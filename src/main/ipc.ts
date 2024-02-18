import { BrowserWindow, ipcMain } from 'electron'
import { fromEvent, switchMap } from 'rxjs'
import { config$, setImgurClientId, toggleDebugLogging, toggleStartup } from './core/stores/config'
import log from 'electron-log/main'
import { IpcChannel } from './ipc.types'
import { testImgurClientId$ } from './core/imgur'

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
ipcMain.on(IpcChannel.SaveImgurClientId, (event, clientId) => {
  // Reset.
  if (!clientId) {
    setImgurClientId(null)
    event.sender.send(IpcChannel.SaveImgurClientId)
    return
  }

  // Test and apply if successful.
  // On error, reply with error.
  logIpc.info(`Testing Imgur client ID.`, clientId)
  testImgurClientId$(clientId).subscribe({
    next: () => {
      logIpc.info(`Imgur client ID is valid.`, clientId)
      setImgurClientId(clientId)
      event.sender.send(IpcChannel.SaveImgurClientId)
    },
    error: (error) => {
      logIpc.info(`Imgur client ID is invalid.`, error)
      event.sender.send(IpcChannel.SaveImgurClientId, error)
    }
  })
})
ipcMain.on(IpcChannel.ToggleDebugLogging, toggleDebugLogging)
