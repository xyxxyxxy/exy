/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PlayerStateInfo = {
    PositionTicks?: number | null;
    CanSeek?: boolean;
    IsPaused?: boolean;
    IsMuted?: boolean;
    VolumeLevel?: number | null;
    AudioStreamIndex?: number | null;
    SubtitleStreamIndex?: number | null;
    MediaSourceId?: string;
    PlayMethod?: PlayerStateInfo.PlayMethod;
    RepeatMode?: PlayerStateInfo.RepeatMode;
};
export namespace PlayerStateInfo {
    export enum PlayMethod {
        TRANSCODE = 'Transcode',
        DIRECT_STREAM = 'DirectStream',
        DIRECT_PLAY = 'DirectPlay',
    }
    export enum RepeatMode {
        REPEAT_NONE = 'RepeatNone',
        REPEAT_ALL = 'RepeatAll',
        REPEAT_ONE = 'RepeatOne',
    }
}

