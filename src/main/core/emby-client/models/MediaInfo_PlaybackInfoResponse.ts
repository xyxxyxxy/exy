/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaSourceInfo } from './MediaSourceInfo';
export type MediaInfo_PlaybackInfoResponse = {
    MediaSources?: Array<MediaSourceInfo>;
    PlaySessionId?: string;
    ErrorCode?: MediaInfo_PlaybackInfoResponse.ErrorCode;
};
export namespace MediaInfo_PlaybackInfoResponse {
    export enum ErrorCode {
        NOT_ALLOWED = 'NotAllowed',
        NO_COMPATIBLE_STREAM = 'NoCompatibleStream',
        RATE_LIMIT_EXCEEDED = 'RateLimitExceeded',
    }
}

