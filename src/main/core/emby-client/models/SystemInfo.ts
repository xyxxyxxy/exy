/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Updates_InstallationInfo } from './Updates_InstallationInfo';
export type SystemInfo = {
    SystemUpdateLevel?: SystemInfo.SystemUpdateLevel;
    OperatingSystemDisplayName?: string;
    PackageName?: string;
    HasPendingRestart?: boolean;
    IsShuttingDown?: boolean;
    SupportsLibraryMonitor?: boolean;
    WebSocketPortNumber?: number;
    CompletedInstallations?: Array<Updates_InstallationInfo>;
    CanSelfRestart?: boolean;
    CanSelfUpdate?: boolean;
    CanLaunchWebBrowser?: boolean;
    ProgramDataPath?: string;
    ItemsByNamePath?: string;
    CachePath?: string;
    LogPath?: string;
    InternalMetadataPath?: string;
    TranscodingTempPath?: string;
    HttpServerPortNumber?: number;
    SupportsHttps?: boolean;
    HttpsPortNumber?: number;
    HasUpdateAvailable?: boolean;
    SupportsAutoRunAtStartup?: boolean;
    HardwareAccelerationRequiresPremiere?: boolean;
    LocalAddress?: string;
    WanAddress?: string;
    ServerName?: string;
    Version?: string;
    OperatingSystem?: string;
    Id?: string;
};
export namespace SystemInfo {
    export enum SystemUpdateLevel {
        RELEASE = 'Release',
        BETA = 'Beta',
        DEV = 'Dev',
    }
}

