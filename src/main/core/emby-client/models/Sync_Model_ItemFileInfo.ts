/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Sync_Model_ItemFileInfo = {
    Type?: Sync_Model_ItemFileInfo.Type;
    Name?: string;
    Path?: string;
    ImageType?: Sync_Model_ItemFileInfo.ImageType;
    Index?: number;
};
export namespace Sync_Model_ItemFileInfo {
    export enum Type {
        MEDIA = 'Media',
        IMAGE = 'Image',
        SUBTITLES = 'Subtitles',
    }
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

