import { app, shell, BrowserWindow } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    // icon, // TODO Set icon
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  startMainToRendererIpc(mainWindow)
  initTray(mainWindow)

  // Open if no media-servers are configured.
  fromEvent(mainWindow, 'ready-to-show')
    .pipe(withLatestFrom(config$))
    .subscribe(([_, config]) => {
      if (!config.mediaServers.length) mainWindow.show()
      // TODO Notification on first move to tray?
    })

  // Hide on close.
  fromEvent(mainWindow, 'close').subscribe((event) => {
    ;(event as Event).preventDefault()
    mainWindow.hide()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit() // TODO Don't quit. Move to tray instead.
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
import './core'
import contextMenu from 'electron-context-menu'
import log from 'electron-log/main'
import { startMainToRendererIpc } from './ipc'
import { config$ } from './core/stores/config'
import { distinctUntilChanged, fromEvent, map, withLatestFrom } from 'rxjs'
import { initTray } from './tray'
import { name } from '../../package.json'

const logMain = log.scope('main')

config$
  .pipe(
    map((config) => config.isStartupEnabled),
    distinctUntilChanged()
  )
  .subscribe((isStartupEnabled) => {
    logMain.info(`Startup ${isStartupEnabled ? 'enabled' : 'disabled'}.`)
    app.setLoginItemSettings({ openAtLogin: isStartupEnabled })
  })

contextMenu({
  showLookUpSelection: false,
  showSearchWithGoogle: false,
  showCopyImage: false
})
