/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration_AccessSchedule } from './Configuration_AccessSchedule';
export type Users_UserPolicy = {
    IsAdministrator?: boolean;
    IsHidden?: boolean;
    IsHiddenRemotely?: boolean;
    IsDisabled?: boolean;
    MaxParentalRating?: number | null;
    BlockedTags?: Array<string>;
    EnableUserPreferenceAccess?: boolean;
    AccessSchedules?: Array<Configuration_AccessSchedule>;
    BlockUnratedItems?: Array<'Movie' | 'Trailer' | 'Series' | 'Music' | 'Game' | 'Book' | 'LiveTvChannel' | 'LiveTvProgram' | 'ChannelContent' | 'Other'>;
    EnableRemoteControlOfOtherUsers?: boolean;
    EnableSharedDeviceControl?: boolean;
    EnableRemoteAccess?: boolean;
    EnableLiveTvManagement?: boolean;
    EnableLiveTvAccess?: boolean;
    EnableMediaPlayback?: boolean;
    EnableAudioPlaybackTranscoding?: boolean;
    EnableVideoPlaybackTranscoding?: boolean;
    EnablePlaybackRemuxing?: boolean;
    EnableContentDeletion?: boolean;
    EnableContentDeletionFromFolders?: Array<string>;
    EnableContentDownloading?: boolean;
    EnableSubtitleDownloading?: boolean;
    EnableSubtitleManagement?: boolean;
    EnableSyncTranscoding?: boolean;
    EnableMediaConversion?: boolean;
    EnabledDevices?: Array<string>;
    EnableAllDevices?: boolean;
    EnabledChannels?: Array<string>;
    EnableAllChannels?: boolean;
    EnabledFolders?: Array<string>;
    EnableAllFolders?: boolean;
    InvalidLoginAttemptCount?: number;
    EnablePublicSharing?: boolean;
    BlockedMediaFolders?: Array<string>;
    BlockedChannels?: Array<string>;
    RemoteClientBitrateLimit?: number;
    AuthenticationProviderId?: string;
    ExcludedSubFolders?: Array<string>;
    DisablePremiumFeatures?: boolean;
};

