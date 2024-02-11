/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from './BaseItemDto';
import type { QueueItem } from './QueueItem';
export type PlaybackStartInfo = {
    CanSeek?: boolean;
    Item?: BaseItemDto;
    NowPlayingQueue?: Array<QueueItem>;
    PlaylistItemId?: string;
    ItemId?: string;
    SessionId?: string;
    MediaSourceId?: string;
    AudioStreamIndex?: number | null;
    SubtitleStreamIndex?: number | null;
    IsPaused?: boolean;
    IsMuted?: boolean;
    PositionTicks?: number | null;
    RunTimeTicks?: number | null;
    PlaybackStartTimeTicks?: number | null;
    VolumeLevel?: number | null;
    Brightness?: number | null;
    AspectRatio?: string;
    PlayMethod?: PlaybackStartInfo.PlayMethod;
    LiveStreamId?: string;
    PlaySessionId?: string;
    RepeatMode?: PlaybackStartInfo.RepeatMode;
};
export namespace PlaybackStartInfo {
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

