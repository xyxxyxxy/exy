/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemPerson } from './BaseItemPerson';
import type { ChapterInfo } from './ChapterInfo';
import type { ExternalUrl } from './ExternalUrl';
import type { MediaSourceInfo } from './MediaSourceInfo';
import type { MediaStream } from './MediaStream';
import type { MediaUrl } from './MediaUrl';
import type { NameIdPair } from './NameIdPair';
import type { NameLongIdPair } from './NameLongIdPair';
import type { UserItemDataDto } from './UserItemDataDto';
export type BaseItemDto = {
    Name?: string;
    OriginalTitle?: string;
    ServerId?: string;
    Id?: string;
    Etag?: string;
    PlaylistItemId?: string;
    DateCreated?: string | null;
    ExtraType?: string;
    AirsBeforeSeasonNumber?: number | null;
    AirsAfterSeasonNumber?: number | null;
    AirsBeforeEpisodeNumber?: number | null;
    DisplaySpecialsWithSeasons?: boolean | null;
    CanDelete?: boolean | null;
    CanDownload?: boolean | null;
    HasSubtitles?: boolean | null;
    SupportsResume?: boolean | null;
    PreferredMetadataLanguage?: string;
    PreferredMetadataCountryCode?: string;
    SupportsSync?: boolean | null;
    Container?: string;
    SortName?: string;
    ForcedSortName?: string;
    Video3DFormat?: BaseItemDto.Video3DFormat;
    PremiereDate?: string | null;
    ExternalUrls?: Array<ExternalUrl>;
    MediaSources?: Array<MediaSourceInfo>;
    CriticRating?: number | null;
    GameSystemId?: number | null;
    GameSystem?: string;
    ProductionLocations?: Array<string>;
    Path?: string;
    OfficialRating?: string;
    CustomRating?: string;
    ChannelId?: string;
    ChannelName?: string;
    Overview?: string;
    Taglines?: Array<string>;
    Genres?: Array<string>;
    CommunityRating?: number | null;
    RunTimeTicks?: number | null;
    PlayAccess?: BaseItemDto.PlayAccess;
    AspectRatio?: string;
    ProductionYear?: number | null;
    Number?: string;
    ChannelNumber?: string;
    IndexNumber?: number | null;
    IndexNumberEnd?: number | null;
    ParentIndexNumber?: number | null;
    RemoteTrailers?: Array<MediaUrl>;
    ProviderIds?: Record<string, string>;
    IsFolder?: boolean | null;
    ParentId?: string;
    Type?: string;
    People?: Array<BaseItemPerson>;
    Studios?: Array<NameLongIdPair>;
    GenreItems?: Array<NameLongIdPair>;
    ParentLogoItemId?: string;
    ParentBackdropItemId?: string;
    ParentBackdropImageTags?: Array<string>;
    LocalTrailerCount?: number | null;
    UserData?: UserItemDataDto;
    RecursiveItemCount?: number | null;
    ChildCount?: number | null;
    SeriesName?: string;
    SeriesId?: string;
    SeasonId?: string;
    SpecialFeatureCount?: number | null;
    DisplayPreferencesId?: string;
    Status?: string;
    AirTime?: string;
    AirDays?: Array<'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'>;
    Tags?: Array<string>;
    PrimaryImageAspectRatio?: number | null;
    Artists?: Array<string>;
    ArtistItems?: Array<NameIdPair>;
    Album?: string;
    CollectionType?: string;
    DisplayOrder?: string;
    AlbumId?: string;
    AlbumPrimaryImageTag?: string;
    SeriesPrimaryImageTag?: string;
    AlbumArtist?: string;
    AlbumArtists?: Array<NameIdPair>;
    SeasonName?: string;
    MediaStreams?: Array<MediaStream>;
    PartCount?: number | null;
    ImageTags?: Record<string, string>;
    BackdropImageTags?: Array<string>;
    ParentLogoImageTag?: string;
    ParentArtItemId?: string;
    ParentArtImageTag?: string;
    SeriesThumbImageTag?: string;
    SeriesStudio?: string;
    ParentThumbItemId?: string;
    ParentThumbImageTag?: string;
    ParentPrimaryImageItemId?: string;
    ParentPrimaryImageTag?: string;
    Chapters?: Array<ChapterInfo>;
    LocationType?: BaseItemDto.LocationType;
    MediaType?: string;
    EndDate?: string | null;
    LockedFields?: Array<'Cast' | 'Genres' | 'ProductionLocations' | 'Studios' | 'Tags' | 'Name' | 'Overview' | 'Runtime' | 'OfficialRating'>;
    LockData?: boolean | null;
    Width?: number | null;
    Height?: number | null;
    CameraMake?: string;
    CameraModel?: string;
    Software?: string;
    ExposureTime?: number | null;
    FocalLength?: number | null;
    ImageOrientation?: BaseItemDto.ImageOrientation;
    Aperture?: number | null;
    ShutterSpeed?: number | null;
    Latitude?: number | null;
    Longitude?: number | null;
    Altitude?: number | null;
    IsoSpeedRating?: number | null;
    SeriesTimerId?: string;
    ChannelPrimaryImageTag?: string;
    StartDate?: string | null;
    CompletionPercentage?: number | null;
    IsRepeat?: boolean | null;
    IsNew?: boolean | null;
    EpisodeTitle?: string;
    IsMovie?: boolean | null;
    IsSports?: boolean | null;
    IsSeries?: boolean | null;
    IsLive?: boolean | null;
    IsNews?: boolean | null;
    IsKids?: boolean | null;
    IsPremiere?: boolean | null;
    TimerId?: string;
    CurrentProgram?: BaseItemDto;
    MovieCount?: number | null;
    SeriesCount?: number | null;
    AlbumCount?: number | null;
    SongCount?: number | null;
    MusicVideoCount?: number | null;
};
export namespace BaseItemDto {
    export enum Video3DFormat {
        HALF_SIDE_BY_SIDE = 'HalfSideBySide',
        FULL_SIDE_BY_SIDE = 'FullSideBySide',
        FULL_TOP_AND_BOTTOM = 'FullTopAndBottom',
        HALF_TOP_AND_BOTTOM = 'HalfTopAndBottom',
        MVC = 'MVC',
    }
    export enum PlayAccess {
        FULL = 'Full',
        NONE = 'None',
    }
    export enum LocationType {
        FILE_SYSTEM = 'FileSystem',
        VIRTUAL = 'Virtual',
    }
    export enum ImageOrientation {
        TOP_LEFT = 'TopLeft',
        TOP_RIGHT = 'TopRight',
        BOTTOM_RIGHT = 'BottomRight',
        BOTTOM_LEFT = 'BottomLeft',
        LEFT_TOP = 'LeftTop',
        RIGHT_TOP = 'RightTop',
        RIGHT_BOTTOM = 'RightBottom',
        LEFT_BOTTOM = 'LeftBottom',
    }
}

