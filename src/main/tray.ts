import { BrowserWindow, Menu, MenuItem, MenuItemConstructorOptions, Tray, app } from 'electron'
import { combineLatest, fromEvent, map } from 'rxjs'
import { name } from '../../package.json'
import { config$, toggleMediaServerActive } from './core/stores/config'
import icon from '../../resources/icon.png?asset'
import iconActive from '../../resources/icon-active.png?asset'
import iconInactive from '../../resources/icon-inactive.png?asset'
import { activity$ } from './core/activity'
import { connectionStatus$ } from './core/discord'
import { ConnectionStatus } from './core/discord/types'

export function initTray(mainWindow: BrowserWindow): void {
  const tray = new Tray(icon)

  tray.setToolTip(name)

  // Show window on tray click.
  fromEvent(tray, 'click').subscribe(() => mainWindow.show())

  // Reflect playing state/Discord status with tray icon.
  combineLatest([activity$, connectionStatus$]).subscribe(([activity, discordStatus]) => {
    let image = icon
    let toolTip = name

    // Discord not ready.
    if (discordStatus !== ConnectionStatus.Ready) {
      image = iconInactive
      toolTip += ` - Discord disconnected`
    }

    // Discord ready and activity present.
    if (discordStatus === ConnectionStatus.Ready && activity) {
      image = iconActive
      toolTip += ` - Playing ${activity.title}`
    }

    tray.setImage(image)
    tray.setToolTip(toolTip)
  })

  // Build tray men.
  config$.subscribe((config) => {
    const template: Array<MenuItemConstructorOptions | MenuItem> = []

    config.mediaServers.forEach((server) =>
      template.push({
        type: 'checkbox',
        label: server.address,
        checked: server.isActive,
        click: () => toggleMediaServerActive(server.id)
      })
    )

    template.push(
      { type: 'separator' },
      {
        label: 'Configuration',
        click: () => mainWindow.show()
      },
      {
        label: 'Exit',
        click: () => app.exit()
      }
    )

    const menu = Menu.buildFromTemplate(template)
    tray.setContextMenu(menu)
  })
}
