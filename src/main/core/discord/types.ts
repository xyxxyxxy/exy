import { Presence } from 'discord-rpc'

export enum ConnectionStatus {
  Disconnected = 'disconnected',
  Connected = 'connected',
  Ready = 'ready'
}

// Enhanced type with some defaults for easier handling.
export type DiscordActivity = Presence & {
  buttons: Array<Button>
}
export type Button = { label: string; url: string }
