import { BrowserWindow, Menu, MenuItem, MenuItemConstructorOptions, Tray, app } from 'electron'
import icon from '../../resources/icon.png?asset'
import { fromEvent } from 'rxjs'
import { name } from '../../package.json'

export function initTray(mainWindow: BrowserWindow): void {
  const tray = new Tray(icon)

  tray.setToolTip(name)

  // Show window on tray click.
  fromEvent(tray, 'click').subscribe(() => mainWindow.show())

  const template: Array<MenuItemConstructorOptions | MenuItem> = [
    { type: 'separator' },
    // {
    //   label:
    //     "🪤 TODO List connections here with checkbos to indicate active",
    //   type: "checkbox",
    //   checked: true,
    // },
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
  ]

  const menu = Menu.buildFromTemplate(template)
  tray.setContextMenu(menu)
}
