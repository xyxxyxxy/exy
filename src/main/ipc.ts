import { BrowserWindow, ipcMain } from 'electron'
import { fromEvent, switchMap } from 'rxjs'
import {
  addMediaServerConfig,
  config$,
  deavtivateMediaServer,
  deleteMediaServerConfig,
  isConnectionConfigured,
  setImgurClientId,
  toggleDebugLogging,
  toggleMediaServerActive,
  toggleStartup
} from './core/stores/config'
import log from 'electron-log/main'
import { IpcChannel, NewMediaServerConfig } from './ipc.types'
import { testImgurClientId$ } from './core/imgur'
import { authenticate$, logout$ } from './core/media-server'
import { randomUUID } from 'crypto'
import { Authentication_AuthenticationResult } from './core/emby-client'
import { AxiosError } from 'axios'
import { MediaServerConfig } from './core/stores/config.types'

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
ipcMain.on(IpcChannel.ToggleMediaServerActive, (_, id) => toggleMediaServerActive(id))
ipcMain.on(IpcChannel.DisconnectMediaServer, (_, config: MediaServerConfig) => {
  // Deactivate.
  deavtivateMediaServer(config.id)
  // Logout and delete config.
  logout$(config).subscribe({
    next: () => logIpc.debug(`Successfully logged out.`),
    error: (error) => logIpc.warn(`Error while trying to logout.`, error),
    complete: () => deleteMediaServerConfig(config.id)
  })
})
ipcMain.on(IpcChannel.TestMediaServer, (_, config: MediaServerConfig) => {
  // TODO
})

ipcMain.on(IpcChannel.ConnectMediaServer, (event, config: NewMediaServerConfig) => {
  logIpc.info(`Received new media-server config.`, config)

  // Check if this media-server is already configured.
  if (isConnectionConfigured(config))
    return event.sender.send(
      IpcChannel.ConnectMediaServer,
      new Error(`This connection is already configured.`)
    )

  authenticate$(config).subscribe({
    next: (result: Authentication_AuthenticationResult) => {
      logIpc.info(`New media-server config is valid.`)

      const serverId = result.ServerId
      const userId = result.User?.Id
      const accessToken = result.AccessToken

      if (!serverId || !userId || !accessToken)
        return event.sender.send(IpcChannel.ConnectMediaServer, {
          message: 'Error. Media-server response does not include expected data.'
        })

      addMediaServerConfig({
        id: randomUUID(),
        isActive: true,
        serverId,
        userId,
        accessToken,
        type: config.type,
        protocol: config.protocol,
        address: config.address,
        port: config.port,
        username: config.username,
        ignoredLibraryIds: []
      })

      event.sender.send(IpcChannel.ConnectMediaServer)
    },
    error: (error: AxiosError<Authentication_AuthenticationResult>) => {
      logIpc.info(`New media-server config is invalid.`, error)
      event.sender.send(IpcChannel.ConnectMediaServer, {
        code: error.code,
        status: error.status,
        message: error.toString()
      })
    }
  })
})
ipcMain.on(IpcChannel.SaveImgurClientId, (event, clientId: string) => {
  // Reset if empty.
  if (!clientId) {
    setImgurClientId(null)
    event.sender.send(IpcChannel.SaveImgurClientId)
    return
  }

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
