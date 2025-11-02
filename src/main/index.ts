import { app, shell, BrowserWindow, Notification } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import './core'
import contextMenu from 'electron-context-menu'
import log from 'electron-log/main'
import { startMainToRendererIpc } from './ipc'
import { config$ } from './core/stores/config'
import {
  distinctUntilChanged,
  filter,
  first,
  fromEvent,
  map,
  merge,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs'
import { initTray } from './tray'
import { name } from '../../package.json'

const logger = log.scope('main')

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    minWidth: 600,
    minHeight: 450,
    show: false,
    autoHideMenuBar: true,
    icon: icon,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false // Needed for preload script, see: https://electron-vite.org/guide/dev#efficient
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

  startMainToRendererIpc()
  lockSingleInstance(mainWindow)
  initTray(mainWindow)

  // "Getting started" behavior.
  fromEvent(mainWindow, 'ready-to-show')
    .pipe(
      withLatestFrom(config$),
      // No media-servers configured is considered a fresh installation.
      map(([, config]) => !config.mediaServers.length),
      // Nothing to do if already configured.
      filter((isGettingStarted) => isGettingStarted),
      // Show configuration window.
      tap(() => mainWindow.show()),
      // Display tray info on first close/minimize.
      switchMap(() => closeOrMinimize$),
      first()
    )
    .subscribe(() => {
      new Notification({
        title: `${name} running in background`,
        // body: 'You can access it in the tray menu',
        silent: true,
        icon
      }).show()
    })

  const closeOrMinimize$ = merge(fromEvent(mainWindow, 'close'), fromEvent(mainWindow, 'minimize'))

  // Hide on minimize and close.
  closeOrMinimize$.subscribe((event) => {
    ;(event as Event).preventDefault()
    mainWindow.hide()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId(name)

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()
})

config$
  .pipe(
    map((config) => config.isStartupEnabled),
    distinctUntilChanged()
  )
  .subscribe((isStartupEnabled) => {
    logger.info(`Startup ${isStartupEnabled ? 'enabled' : 'disabled'}.`)
    app.setLoginItemSettings({ openAtLogin: isStartupEnabled })
  })

contextMenu({
  showLookUpSelection: false,
  showSearchWithGoogle: false,
  showCopyImage: false
})

// Single process lock.
// See: https://www.electronjs.org/docs/latest/api/app#apprequestsingleinstancelockadditionaldata
function lockSingleInstance(mainWindow: BrowserWindow): void {
  const additionalData = { myKey: name }
  const gotTheLock = app.requestSingleInstanceLock(additionalData)

  if (!gotTheLock) {
    app.exit()
  } else {
    app.on('second-instance', (_, _1, _2, additionalData) => {
      // Print out data received from the second instance.
      logger.warn(additionalData)

      // Someone tried to run a second instance, we should focus our window.
      mainWindow.show()
    })
  }
}
