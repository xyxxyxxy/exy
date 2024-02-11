/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from './BaseItemDto';
import type { QueueItem } from './QueueItem';
export type PlaybackStopInfo = {
    NowPlayingQueue?: Array<QueueItem>;
    PlaylistItemId?: string;
    Item?: BaseItemDto;
    ItemId?: string;
    SessionId?: string;
    MediaSourceId?: string;
    PositionTicks?: number | null;
    LiveStreamId?: string;
    PlaySessionId?: string;
    Failed?: boolean;
    NextMediaType?: string;
};

