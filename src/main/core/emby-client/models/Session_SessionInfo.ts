/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from './BaseItemDto';
import type { ClientCapabilities } from './ClientCapabilities';
import type { PlayerStateInfo } from './PlayerStateInfo';
import type { SessionUserInfo } from './SessionUserInfo';
import type { TranscodingInfo } from './TranscodingInfo';
export type Session_SessionInfo = {
    PlayState?: PlayerStateInfo;
    AdditionalUsers?: Array<SessionUserInfo>;
    Capabilities?: ClientCapabilities;
    RemoteEndPoint?: string;
    PlayableMediaTypes?: Array<string>;
    PlaylistItemId?: string;
    Id?: string;
    ServerId?: string;
    UserId?: string;
    UserName?: string;
    UserPrimaryImageTag?: string;
    Client?: string;
    LastActivityDate?: string;
    DeviceName?: string;
    DeviceType?: string;
    NowPlayingItem?: BaseItemDto;
    DeviceId?: string;
    ApplicationVersion?: string;
    AppIconUrl?: string;
    SupportedCommands?: Array<string>;
    TranscodingInfo?: TranscodingInfo;
    SupportsRemoteControl?: boolean;
};

