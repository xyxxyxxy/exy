# exy

[Emby](https://emby.media)/[Jellyfin](https://jellyfin.org) companion app to provide [Discord](https://discord.com) rich presence.

![intro](resources/docs/intro.png)

## Features

- Easy to setup via UI
- Preview images using Imgur
- All media types supported
- Showing play state (pause, time remaining, current chapter)
- Ignore media types and customize what is shared
- Login with your regular user, no Emby/Jellyfin API key required
- Detect YouTube/BitChute content and link to original video

## Download

Installers can be downloaded from the [latest release](https://github.com/xyxxyxxy/exy/releases/latest) page.

## Requirements

Discord setting "Display current activity as a status message." needs to be enabled.
![discord-settings](resources/docs/discord-setting.png)
This setting can be found in "Discord settings" -> "Activity Privacy".

# Development

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Discord application

A Discord application for exy is already setup. Changing the application is only required if you want to change the "game played" displayed in Discord or some art assets. Running exy locally and/or a custom build is necessary to apply another application ID.

### Using another Discord application

A new application can be created in the [Discord developer portal](https://discord.com/developers/applications).
The application ID used by exy can be changed in the [environment.json](src/environment.json) file.

### Art assets

All art assets are stored in [resources/discord-art-assets/](resources/discord-art-assets/).

Assets need to be uploaded in the application settings -> "Rich Presence" -> "Art Assets":
![discord-art-assets](/resources/docs/discord-art-assets.png)
