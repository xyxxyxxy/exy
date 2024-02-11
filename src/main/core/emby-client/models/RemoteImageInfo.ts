/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RemoteImageInfo = {
    ProviderName?: string;
    Url?: string;
    ThumbnailUrl?: string;
    Height?: number | null;
    Width?: number | null;
    CommunityRating?: number | null;
    VoteCount?: number | null;
    Language?: string;
    Type?: RemoteImageInfo.Type;
    RatingType?: RemoteImageInfo.RatingType;
};
export namespace RemoteImageInfo {
    export enum Type {
        PRIMARY = 'Primary',
        ART = 'Art',
        BACKDROP = 'Backdrop',
        BANNER = 'Banner',
        LOGO = 'Logo',
        THUMB = 'Thumb',
        DISC = 'Disc',
        BOX = 'Box',
        SCREENSHOT = 'Screenshot',
        MENU = 'Menu',
        CHAPTER = 'Chapter',
        BOX_REAR = 'BoxRear',
        THUMBNAIL = 'Thumbnail',
    }
    export enum RatingType {
        SCORE = 'Score',
        LIKES = 'Likes',
    }
}

