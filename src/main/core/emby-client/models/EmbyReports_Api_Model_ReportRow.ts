/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbyReports_Api_Model_ReportItem } from './EmbyReports_Api_Model_ReportItem';
export type EmbyReports_Api_Model_ReportRow = {
    Id?: string;
    HasImageTagsBackdrop?: boolean;
    HasImageTagsPrimary?: boolean;
    HasImageTagsLogo?: boolean;
    HasLocalTrailer?: boolean;
    HasLockData?: boolean;
    HasEmbeddedImage?: boolean;
    HasSubtitles?: boolean;
    HasSpecials?: boolean;
    Columns?: Array<EmbyReports_Api_Model_ReportItem>;
    RowType?: EmbyReports_Api_Model_ReportRow.RowType;
    UserId?: string;
};
export namespace EmbyReports_Api_Model_ReportRow {
    export enum RowType {
        MUSIC_ARTIST = 'MusicArtist',
        MUSIC_ALBUM = 'MusicAlbum',
        BOOK = 'Book',
        BOX_SET = 'BoxSet',
        EPISODE = 'Episode',
        GAME = 'Game',
        VIDEO = 'Video',
        MOVIE = 'Movie',
        MUSIC_VIDEO = 'MusicVideo',
        TRAILER = 'Trailer',
        SEASON = 'Season',
        SERIES = 'Series',
        AUDIO = 'Audio',
        BASE_ITEM = 'BaseItem',
        ARTIST = 'Artist',
    }
}

