import { IpcMainEvent, ipcMain, shell } from 'electron'
import { combineLatest, filter, finalize, fromEvent, pipe } from 'rxjs'
import {
  addMediaServerConfig,
  config$,
  deleteMediaServerConfig,
  isConnectionConfigured,
  setImgurClientId,
  toggleDebugLogging,
  toggleIshomepageLinked,
  toggleMediaServerActive,
  toggleMediaServerTypeShown,
  toggleStartup
} from './core/stores/config'
import log from 'electron-log/main'
import { IpcChannel, NewMediaServerConfig } from './ipc.types'
import { testImgurClientId$ } from './core/imgur'
import {
  authenticate$,
  logout$,
  mediaServerActivities$,
  testConnection$
} from './core/media-server'
import { randomUUID } from 'crypto'
import { Authentication_AuthenticationResult } from './core/emby-client'
import { AxiosError } from 'axios'
import { MediaServerConfig } from './core/stores/config.types'
import { connectionStatus$, setTestActivity } from './core/discord'

const logger = log.scope('ipc')

export function startMainToRendererIpc(): void {
  logger.debug(`Start IPC.`)
}

// A type guard is used to provide typing for 'event'.
const isEvent = pipe(filter((event): event is IpcMainEvent => !!event))

// Send on updates and on request.
combineLatest([config$, fromEvent(ipcMain, IpcChannel.Config).pipe(isEvent)]).subscribe(
  ([config, event]) => {
    event.sender.send(IpcChannel.Config, config)
  }
)

combineLatest([
  connectionStatus$,
  fromEvent(ipcMain, IpcChannel.DiscordStatus).pipe(isEvent)
]).subscribe(([data, event]) => {
  event.sender.send(IpcChannel.DiscordStatus, data)
})

combineLatest([
  mediaServerActivities$,
  fromEvent(ipcMain, IpcChannel.MediaServerActivities).pipe(isEvent)
]).subscribe(([activities, event]) => {
  event.sender.send(IpcChannel.MediaServerActivities, activities)
})

ipcMain.on(IpcChannel.ToggleStartup, toggleStartup)
ipcMain.on(IpcChannel.ToggleIsMediaServerTypeShown, toggleMediaServerTypeShown)
ipcMain.on(IpcChannel.ToggleIsHomepageLinked, toggleIshomepageLinked)
ipcMain.on(IpcChannel.TestDiscordActivity, (_, content) => setTestActivity(content))
ipcMain.on(IpcChannel.ToggleMediaServerActive, (_, id) => toggleMediaServerActive(id))
ipcMain.on(IpcChannel.DisconnectMediaServer, (_, config: MediaServerConfig) => {
  logout$(config)
    .pipe(finalize(() => deleteMediaServerConfig(config.id)))
    .subscribe({
      next: () => logger.debug(`Successfully logged out.`),
      error: (error) => logger.warn(`Error while trying to logout.`, error)
    })
})
ipcMain.on(IpcChannel.TestMediaServer, (event, config: MediaServerConfig) => {
  logger.debug(`Testing media-server connection to '${config.address}'.`)
  const responseChannel = IpcChannel.TestMediaServer + config.id

  testConnection$(config).subscribe({
    next: () => {
      logger.debug(`Test successful.`)
      event.sender.send(responseChannel)
    },
    error: (error: AxiosError<Authentication_AuthenticationResult>) => {
      logger.debug(`Test failed.`, error)
      event.sender.send(responseChannel, {
        code: error.code,
        status: error.status,
        message: error.toString()
      })
    }
  })
})
ipcMain.on(IpcChannel.ConnectMediaServer, (event, config: NewMediaServerConfig) => {
  logger.info(`Received new media-server config.`, config)

  // Check if this media-server is already configured.
  if (isConnectionConfigured(config))
    return event.sender.send(
      IpcChannel.ConnectMediaServer,
      new Error(`This connection is already configured.`)
    )

  authenticate$(config).subscribe({
    next: (result: Authentication_AuthenticationResult) => {
      logger.info(`New media-server config is valid.`)

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
      logger.info(`New media-server config is invalid.`, error)
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

  logger.info(`Testing Imgur client ID.`, clientId)
  testImgurClientId$(clientId).subscribe({
    next: () => {
      logger.info(`Imgur client ID is valid.`, clientId)
      setImgurClientId(clientId)
      event.sender.send(IpcChannel.SaveImgurClientId)
    },
    error: (error) => {
      logger.info(`Imgur client ID is invalid.`, error)
      event.sender.send(IpcChannel.SaveImgurClientId, error)
    }
  })
})
ipcMain.on(IpcChannel.ToggleDebugLogging, toggleDebugLogging)
ipcMain.on(IpcChannel.OpenLogFile, () => shell.openExternal(log.transports.file.getFile().path))
