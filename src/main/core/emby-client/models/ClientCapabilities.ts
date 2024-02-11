/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_DeviceProfile } from './Dlna_DeviceProfile';
export type ClientCapabilities = {
    PlayableMediaTypes?: Array<string>;
    SupportedCommands?: Array<string>;
    SupportsMediaControl?: boolean;
    PushToken?: string;
    PushTokenType?: string;
    SupportsPersistentIdentifier?: boolean;
    SupportsSync?: boolean;
    DeviceProfile?: Dlna_DeviceProfile;
    IconUrl?: string;
    AppId?: string;
};

