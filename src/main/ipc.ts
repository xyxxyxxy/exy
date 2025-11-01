import { IpcMainEvent, ipcMain, shell } from 'electron'
import { combineLatest, filter, finalize, fromEvent, pipe } from 'rxjs'
import {
  addMediaServer,
  config$,
  deleteMediaServer,
  isConnectionConfigured,
  toggleMediaServerActive,
  toggleIgnoredMediaType,
  resetExternalLinks,
  saveExternalLink,
  deleteExternalLink,
  toggleExternalLinkActive,
  moveExternalLinkUp,
  moveExternalLinkDown,
  clearConfig,
  toggleConfigFlag
} from './core/stores/config'
import log from 'electron-log/main'
import { IpcChannel, NewMediaServerConfig } from './ipc.types'
import {
  authenticate$,
  logout$,
  mediaServerAllActivities$,
  testConnection$
} from './core/media-server'
import { randomUUID } from 'crypto'
import { AxiosError } from 'axios'
import { ConfigSelector, MediaServerConfig } from './core/stores/config.types'
import { connectionStatus$, setTestActivity } from './core/discord'
import { clearCache } from './core/stores/cache'
import { updateAvailable$ } from './core/updater/updater'
import { AuthenticationAuthenticationResult } from './core/openapi/emby'

const logger = log.scope('ipc')

export function startMainToRendererIpc(): void {
  logger.debug(`Start IPC.`)
}

// A type guard is used to provide typing for 'event'.
const isEvent = pipe(filter((event): event is IpcMainEvent => !!event))

// Send on config updates and on request.
combineLatest([config$, fromEvent(ipcMain, IpcChannel.Config).pipe(isEvent)]).subscribe(
  ([config, event]) => {
    event.sender.send(IpcChannel.Config, config)
  }
)

combineLatest([
  updateAvailable$,
  fromEvent(ipcMain, IpcChannel.UpdateAvailable).pipe(isEvent)
]).subscribe(([update, event]) => {
  event.sender.send(IpcChannel.UpdateAvailable, update)
})

combineLatest([
  connectionStatus$,
  fromEvent(ipcMain, IpcChannel.DiscordStatus).pipe(isEvent)
]).subscribe(([data, event]) => {
  event.sender.send(IpcChannel.DiscordStatus, data)
})

combineLatest([
  mediaServerAllActivities$,
  fromEvent(ipcMain, IpcChannel.MediaServerActivities).pipe(isEvent)
]).subscribe(([activities, event]) => {
  event.sender.send(IpcChannel.MediaServerActivities, activities)
})

ipcMain.on(IpcChannel.ToggleStartup, () => toggleConfigFlag(ConfigSelector.IsStartupEnabled))
ipcMain.on(IpcChannel.ToggleIgnoredMediaType, (_, type) => toggleIgnoredMediaType(type))
ipcMain.on(IpcChannel.ToggleIsPlayStateShown, () =>
  toggleConfigFlag(ConfigSelector.IsPlayStateShown)
)
ipcMain.on(IpcChannel.ToggleIsLogoUsed, () => toggleConfigFlag(ConfigSelector.IsLogoUsed))
ipcMain.on(IpcChannel.ToggleIsThemeUsed, () => toggleConfigFlag(ConfigSelector.IsThemeUsed))
ipcMain.on(IpcChannel.TestDiscordActivity, (_, content) => setTestActivity(content))
ipcMain.on(IpcChannel.ToggleMediaServerActive, (_, id) => toggleMediaServerActive(id))
ipcMain.on(IpcChannel.DisconnectMediaServer, (_, config: MediaServerConfig) => {
  logout$(config)
    .pipe(finalize(() => deleteMediaServer(config.id)))
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
    error: (error: AxiosError<AuthenticationAuthenticationResult>) => {
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
    next: (result: AuthenticationAuthenticationResult) => {
      logger.info(`New media-server config is valid.`)

      const serverId = result.ServerId
      const userId = result.User?.Id
      const accessToken = result.AccessToken

      if (!serverId || !userId || !accessToken)
        return event.sender.send(IpcChannel.ConnectMediaServer, {
          message: 'Error. Media-server response does not include expected data.'
        })

      addMediaServer({
        id: randomUUID(),
        isActive: true,
        serverId,
        userId,
        accessToken,
        type: config.type,
        protocol: config.protocol,
        address: config.address,
        port: config.port,
        username: config.username
      })

      event.sender.send(IpcChannel.ConnectMediaServer)
    },
    error: (error: AxiosError<AuthenticationAuthenticationResult>) => {
      logger.info(`New media-server config is invalid.`, error)
      event.sender.send(IpcChannel.ConnectMediaServer, {
        code: error.code,
        status: error.status,
        message: error.toString()
      })
    }
  })
})
ipcMain.on(IpcChannel.ToggleDebugLogging, () =>
  toggleConfigFlag(ConfigSelector.IsDebugLoggingEnabled)
)
ipcMain.on(IpcChannel.SaveExternalLink, (_, data) => {
  if (!data.id) data = { ...data, id: randomUUID() }
  saveExternalLink(data)
})
ipcMain.on(IpcChannel.ToggleExternalLinkActive, (_, id) => toggleExternalLinkActive(id))
ipcMain.on(IpcChannel.MoveExternalLinkUp, (_, id) => moveExternalLinkUp(id))
ipcMain.on(IpcChannel.MoveExternalLinkDown, (_, id) => moveExternalLinkDown(id))
ipcMain.on(IpcChannel.DeleteExternalLink, (_, id) => deleteExternalLink(id))
ipcMain.on(IpcChannel.ResetExternalLinks, resetExternalLinks)
ipcMain.on(IpcChannel.ClearCache, clearCache)
ipcMain.on(IpcChannel.ClearConfig, clearConfig)
ipcMain.on(IpcChannel.OpenLogFile, () => shell.openExternal(log.transports.file.getFile().path))
