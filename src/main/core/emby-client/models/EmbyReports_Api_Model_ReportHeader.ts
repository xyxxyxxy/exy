/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EmbyReports_Api_Model_ReportHeader = {
    HeaderFieldType?: EmbyReports_Api_Model_ReportHeader.HeaderFieldType;
    Name?: string;
    FieldName?: EmbyReports_Api_Model_ReportHeader.FieldName;
    SortField?: string;
    Type?: string;
    ItemViewType?: EmbyReports_Api_Model_ReportHeader.ItemViewType;
    Visible?: boolean;
    DisplayType?: EmbyReports_Api_Model_ReportHeader.DisplayType;
    ShowHeaderLabel?: boolean;
    CanGroup?: boolean;
};
export namespace EmbyReports_Api_Model_ReportHeader {
    export enum HeaderFieldType {
        STRING = 'String',
        BOOLEAN = 'Boolean',
        DATE = 'Date',
        TIME = 'Time',
        DATE_TIME = 'DateTime',
        INT = 'Int',
        IMAGE = 'Image',
        OBJECT = 'Object',
        MINUTES = 'Minutes',
    }
    export enum FieldName {
        NONE = 'None',
        PATH = 'Path',
        NAME = 'Name',
        PREMIERE_DATE = 'PremiereDate',
        DATE_ADDED = 'DateAdded',
        RELEASE_DATE = 'ReleaseDate',
        RUNTIME = 'Runtime',
        PLAY_COUNT = 'PlayCount',
        SEASON = 'Season',
        SEASON_NUMBER = 'SeasonNumber',
        SERIES = 'Series',
        NETWORK = 'Network',
        YEAR = 'Year',
        PARENTAL_RATING = 'ParentalRating',
        COMMUNITY_RATING = 'CommunityRating',
        TRAILERS = 'Trailers',
        SPECIALS = 'Specials',
        GAME_SYSTEM = 'GameSystem',
        ALBUM_ARTIST = 'AlbumArtist',
        ALBUM = 'Album',
        DISC = 'Disc',
        TRACK = 'Track',
        AUDIO = 'Audio',
        EMBEDDED_IMAGE = 'EmbeddedImage',
        VIDEO = 'Video',
        RESOLUTION = 'Resolution',
        SUBTITLES = 'Subtitles',
        GENRES = 'Genres',
        COUNTRIES = 'Countries',
        STATUS = 'Status',
        TRACKS = 'Tracks',
        EPISODE_SERIES = 'EpisodeSeries',
        EPISODE_SEASON = 'EpisodeSeason',
        EPISODE_NUMBER = 'EpisodeNumber',
        AUDIO_ALBUM_ARTIST = 'AudioAlbumArtist',
        MUSIC_ARTIST = 'MusicArtist',
        AUDIO_ALBUM = 'AudioAlbum',
        LOCKED = 'Locked',
        IMAGE_PRIMARY = 'ImagePrimary',
        IMAGE_BACKDROP = 'ImageBackdrop',
        IMAGE_LOGO = 'ImageLogo',
        ACTOR = 'Actor',
        STUDIOS = 'Studios',
        COMPOSER = 'Composer',
        DIRECTOR = 'Director',
        GUEST_STAR = 'GuestStar',
        PRODUCER = 'Producer',
        WRITER = 'Writer',
        ARTIST = 'Artist',
        YEARS = 'Years',
        PARENTAL_RATINGS = 'ParentalRatings',
        COMMUNITY_RATINGS = 'CommunityRatings',
        OVERVIEW = 'Overview',
        SHORT_OVERVIEW = 'ShortOverview',
        TYPE = 'Type',
        DATE = 'Date',
        USER_PRIMARY_IMAGE = 'UserPrimaryImage',
        SEVERITY = 'Severity',
        ITEM = 'Item',
        USER = 'User',
        USER_ID = 'UserId',
    }
    export enum ItemViewType {
        NONE = 'None',
        DETAIL = 'Detail',
        EDIT = 'Edit',
        LIST = 'List',
        ITEM_BY_NAME_DETAILS = 'ItemByNameDetails',
        STATUS_IMAGE = 'StatusImage',
        EMBEDDED_IMAGE = 'EmbeddedImage',
        SUBTITLE_IMAGE = 'SubtitleImage',
        TRAILERS_IMAGE = 'TrailersImage',
        SPECIALS_IMAGE = 'SpecialsImage',
        LOCK_DATA_IMAGE = 'LockDataImage',
        TAGS_PRIMARY_IMAGE = 'TagsPrimaryImage',
        TAGS_BACKDROP_IMAGE = 'TagsBackdropImage',
        TAGS_LOGO_IMAGE = 'TagsLogoImage',
        USER_PRIMARY_IMAGE = 'UserPrimaryImage',
    }
    export enum DisplayType {
        NONE = 'None',
        SCREEN = 'Screen',
        EXPORT = 'Export',
        SCREEN_EXPORT = 'ScreenExport',
    }
}

