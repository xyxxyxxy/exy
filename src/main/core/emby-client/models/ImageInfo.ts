/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ImageInfo = {
    ImageType?: ImageInfo.ImageType;
    ImageIndex?: number | null;
    Path?: string;
    Height?: number | null;
    Width?: number | null;
    Size?: number;
};
export namespace ImageInfo {
    export enum ImageType {
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
}

