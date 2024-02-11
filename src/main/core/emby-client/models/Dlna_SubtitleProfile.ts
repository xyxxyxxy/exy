/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Dlna_SubtitleProfile = {
    Format?: string;
    Method?: Dlna_SubtitleProfile.Method;
    DidlMode?: string;
    Language?: string;
    Container?: string;
};
export namespace Dlna_SubtitleProfile {
    export enum Method {
        ENCODE = 'Encode',
        EMBED = 'Embed',
        EXTERNAL = 'External',
        HLS = 'Hls',
    }
}

