/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_ProfileCondition } from './Dlna_ProfileCondition';
export type Dlna_ResponseProfile = {
    Container?: string;
    AudioCodec?: string;
    VideoCodec?: string;
    Type?: Dlna_ResponseProfile.Type;
    OrgPn?: string;
    MimeType?: string;
    Conditions?: Array<Dlna_ProfileCondition>;
};
export namespace Dlna_ResponseProfile {
    export enum Type {
        AUDIO = 'Audio',
        VIDEO = 'Video',
        PHOTO = 'Photo',
    }
}

