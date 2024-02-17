import { BrowserWindow, ipcMain } from 'electron'
import { fromEvent, switchMap } from 'rxjs'
import { config$, toggleDebugLogging } from './core/stores/config'
import log from 'electron-log/main'

const logIpc = log.scope('ipc')

export enum IpcChannel {
  Config = 'Config',
  ToggleDebugLogging = 'ToggleDebugLogging'
}

export function startMainToRendererIpc(mainWindow: BrowserWindow): void {
  // Send config updates to renderer.
  fromEvent(ipcMain, IpcChannel.Config)
    .pipe(switchMap(() => config$))
    .subscribe((config) => {
      logIpc.debug('Sending config update.')
      mainWindow.webContents.send(IpcChannel.Config, config)
    })
}

ipcMain.on(IpcChannel.ToggleDebugLogging, toggleDebugLogging)
