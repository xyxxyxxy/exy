/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration_PathSubstitution } from './Configuration_PathSubstitution';
export type Configuration_ServerConfiguration = {
    EnableUPnP?: boolean;
    PublicPort?: number;
    PublicHttpsPort?: number;
    HttpServerPortNumber?: number;
    HttpsPortNumber?: number;
    EnableHttps?: boolean;
    SubtitlePermissionsUpgraded?: boolean;
    CertificatePath?: string;
    CertificatePassword?: string;
    IsPortAuthorized?: boolean;
    AutoRunWebApp?: boolean;
    EnableRemoteAccess?: boolean;
    LogAllQueryTimes?: boolean;
    EnableCaseSensitiveItemIds?: boolean;
    MetadataPath?: string;
    MetadataNetworkPath?: string;
    PreferredMetadataLanguage?: string;
    MetadataCountryCode?: string;
    SortReplaceCharacters?: Array<string>;
    SortRemoveCharacters?: Array<string>;
    SortRemoveWords?: Array<string>;
    LibraryMonitorDelay?: number;
    EnableDashboardResponseCaching?: boolean;
    DashboardSourcePath?: string;
    ImageSavingConvention?: Configuration_ServerConfiguration.ImageSavingConvention;
    EnableAutomaticRestart?: boolean;
    SkipDeserializationForBasicTypes?: boolean;
    ServerName?: string;
    WanDdns?: string;
    UICulture?: string;
    SaveMetadataHidden?: boolean;
    RemoteClientBitrateLimit?: number;
    SchemaVersion?: number;
    DisplaySpecialsWithinSeasons?: boolean;
    LocalNetworkSubnets?: Array<string>;
    LocalNetworkAddresses?: Array<string>;
    EnableExternalContentInSuggestions?: boolean;
    RequireHttps?: boolean;
    IsBehindProxy?: boolean;
    RemoteIPFilter?: Array<string>;
    IsRemoteIPFilterBlacklist?: boolean;
    ImageExtractionTimeoutMs?: number;
    PathSubstitutions?: Array<Configuration_PathSubstitution>;
    UninstalledPlugins?: Array<string>;
    CollapseVideoFolders?: boolean;
    EnableOriginalTrackTitles?: boolean;
    EnableDebugLevelLogging?: boolean;
    EnableAutoUpdate?: boolean;
    LogFileRetentionDays?: number;
    RunAtStartup?: boolean;
    IsStartupWizardCompleted?: boolean;
    CachePath?: string;
};
export namespace Configuration_ServerConfiguration {
    export enum ImageSavingConvention {
        LEGACY = 'Legacy',
        COMPATIBLE = 'Compatible',
    }
}

