/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration_MediaPathInfo } from './Configuration_MediaPathInfo';
import type { Configuration_TypeOptions } from './Configuration_TypeOptions';
export type Configuration_LibraryOptions = {
    EnableArchiveMediaFiles?: boolean;
    EnablePhotos?: boolean;
    EnableRealtimeMonitor?: boolean;
    EnableChapterImageExtraction?: boolean;
    ExtractChapterImagesDuringLibraryScan?: boolean;
    DownloadImagesInAdvance?: boolean;
    PathInfos?: Array<Configuration_MediaPathInfo>;
    SaveLocalMetadata?: boolean;
    SaveLocalThumbnailSets?: boolean;
    ImportMissingEpisodes?: boolean;
    EnableAutomaticSeriesGrouping?: boolean;
    EnableEmbeddedTitles?: boolean;
    EnableAudioResume?: boolean;
    AutomaticRefreshIntervalDays?: number;
    PreferredMetadataLanguage?: string;
    ContentType?: string;
    MetadataCountryCode?: string;
    SeasonZeroDisplayName?: string;
    MetadataSavers?: Array<string>;
    DisabledLocalMetadataReaders?: Array<string>;
    LocalMetadataReaderOrder?: Array<string>;
    DisabledSubtitleFetchers?: Array<string>;
    SubtitleFetcherOrder?: Array<string>;
    SkipSubtitlesIfEmbeddedSubtitlesPresent?: boolean;
    SkipSubtitlesIfAudioTrackMatches?: boolean;
    SubtitleDownloadLanguages?: Array<string>;
    RequirePerfectSubtitleMatch?: boolean;
    SaveSubtitlesWithMedia?: boolean;
    ForcedSubtitlesOnly?: boolean;
    TypeOptions?: Array<Configuration_TypeOptions>;
    CollapseSingleItemFolders?: boolean;
    MinResumePct?: number;
    MaxResumePct?: number;
    MinResumeDurationSeconds?: number;
    ThumbnailImagesIntervalSeconds?: number;
};

