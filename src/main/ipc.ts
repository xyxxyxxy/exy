import { BrowserWindow, ipcMain } from 'electron'
import { fromEvent, switchMap } from 'rxjs'
import { config$, toggleDebugLogging, toggleStartup } from './core/stores/config'
import log from 'electron-log/main'
import { IpcChannel } from './ipc.types'

const logIpc = log.scope('ipc')

export function startMainToRendererIpc(mainWindow: BrowserWindow): void {
  // Send config updates to renderer.
  fromEvent(ipcMain, IpcChannel.Config)
    .pipe(switchMap(() => config$))
    .subscribe((config) => {
      logIpc.debug('Sending config update.')
      mainWindow.webContents.send(IpcChannel.Config, config)
    })
}

ipcMain.on(IpcChannel.ToggleStartup, toggleStartup)
ipcMain.on(IpcChannel.SaveImgurClientId, (_, data) => {
  logIpc.info(`Received data`, data)
  // TODO
})
ipcMain.on(IpcChannel.ToggleDebugLogging, toggleDebugLogging)
