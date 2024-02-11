/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_ProfileCondition } from './Dlna_ProfileCondition';
export type Dlna_CodecProfile = {
    Type?: Dlna_CodecProfile.Type;
    Conditions?: Array<Dlna_ProfileCondition>;
    ApplyConditions?: Array<Dlna_ProfileCondition>;
    Codec?: string;
    Container?: string;
};
export namespace Dlna_CodecProfile {
    export enum Type {
        VIDEO = 'Video',
        VIDEO_AUDIO = 'VideoAudio',
        AUDIO = 'Audio',
    }
}

