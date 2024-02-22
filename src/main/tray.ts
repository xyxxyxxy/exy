import { BrowserWindow, Menu, MenuItem, MenuItemConstructorOptions, Tray, app } from 'electron'
import icon from '../../resources/icon.png?asset'
import { fromEvent } from 'rxjs'
import { name } from '../../package.json'
import { config$, toggleMediaServerActive } from './core/stores/config'

export function initTray(mainWindow: BrowserWindow): void {
  const tray = new Tray(icon)

  tray.setToolTip(name)

  // Show window on tray click.
  fromEvent(tray, 'click').subscribe(() => mainWindow.show())

  config$.subscribe((config) => {
    const template: Array<MenuItemConstructorOptions | MenuItem> = []

    config.mediaServers.forEach((server) =>
      template.push({
        label: server.address,
        type: 'checkbox',
        checked: server.isActive,
        click: () => toggleMediaServerActive(server.id)
      })
    )

    template.push(
      { type: 'separator' },
      {
        label: '⚙️ Configuration',
        click: () => mainWindow.show()
      },
      { type: 'separator' },
      {
        label: '🧻 Exit',
        click: () => app.exit()
      }
    )

    const menu = Menu.buildFromTemplate(template)
    tray.setContextMenu(menu)
  })
}
