/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Dlna_DirectPlayProfile = {
    Container?: string;
    AudioCodec?: string;
    VideoCodec?: string;
    Type?: Dlna_DirectPlayProfile.Type;
};
export namespace Dlna_DirectPlayProfile {
    export enum Type {
        AUDIO = 'Audio',
        VIDEO = 'Video',
        PHOTO = 'Photo',
    }
}

