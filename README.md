![intro](resources/docs/intro.png)

[Emby](https://emby.media)/[Jellyfin](https://jellyfin.org) companion app to provide [Discord](https://discord.com) rich presence.

- Easy to setup via UI
- Preview images for playing media
- Supports all media types
- Showing play state (pause, time remaining, current chapter)
- Customize style and media types to show or hide
- Login with your regular user, no Emby/Jellyfin API key required

## Download

Installers can be downloaded from the [release page](https://github.com/xyxxyxxy/exy/releases/latest).

# Screenshots

First time opening exy:
![setup-1](resources/docs/screenshot-0.jpg)

Connect to your media-server:

![setup-2](resources/docs/screenshot-1.jpg)

Customize your activity:

![setup-3](resources/docs/screenshot-2.jpg)

Start a stream and see the activity in exy & Discord:

<img src="resources/docs/example.jpg" alt="example" width="400">

> [!NOTE]
> Buttons are only visible to other users in Discord.

# Setup

Follow the instructions in the UI to connect to your media-server.

> [!NOTE]
> Discord must run on the same machine.

## Discord settings

"Display current activity as a status message." needs to be enabled.
![discord-settings](resources/docs/discord-setting.png)
Can be found in "Discord settings" -> "Activity Privacy".

> [!TIP]
> Activity can be hidden on a per-server basis in Discord.

# Privacy

Be aware that images shown in Discord activities have to be publicly available. For this [freeimage.host](https://freeimage.host/) is used to upload the preview image of the playing media item.

Other than that exy contacts GitHub on startup to check for updates.

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

## Update Emby API client

The Emby API client is generated using `npm run generate-emby-client`. This commands loads the openapi spec from the [Emby SDK](https://dev.emby.media/home/sdk/index.html) and generates a TypeScript client using [Hey API](https://heyapi.dev/).

# Code Dependency Upgrade Notes

To upgrade `electron-store` to [version 9](https://github.com/sindresorhus/electron-store/releases/tag/v9.0.0) or higher the following config is required in `tsconfig.node.json`, because `electron-store` was converted into an ESM:

```
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
```

And `"type": "module"` needs to be added in the `package.json`.

This means that [imports need to be updated](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-make-my-typescript-project-output-esm) in the project:

> You must use a .js extension in relative imports even though you're importing .ts files.

The generated emby client in `./src/main/core/emby-client` does not work as ESM yet and a workaround using [fix-esm-import-path](https://www.npmjs.com/package/fix-esm-import-path) did not work.
