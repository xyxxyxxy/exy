/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaStream } from './MediaStream';
export type MediaSourceInfo = {
    Protocol?: MediaSourceInfo.Protocol;
    Id?: string;
    Path?: string;
    EncoderPath?: string;
    EncoderProtocol?: MediaSourceInfo.EncoderProtocol;
    Type?: MediaSourceInfo.Type;
    Container?: string;
    Size?: number | null;
    Name?: string;
    IsRemote?: boolean;
    RunTimeTicks?: number | null;
    SupportsTranscoding?: boolean;
    SupportsDirectStream?: boolean;
    SupportsDirectPlay?: boolean;
    IsInfiniteStream?: boolean;
    RequiresOpening?: boolean;
    OpenToken?: string;
    RequiresClosing?: boolean;
    LiveStreamId?: string;
    BufferMs?: number | null;
    RequiresLooping?: boolean;
    SupportsProbing?: boolean;
    Video3DFormat?: MediaSourceInfo.Video3DFormat;
    MediaStreams?: Array<MediaStream>;
    Formats?: Array<string>;
    Bitrate?: number | null;
    Timestamp?: MediaSourceInfo.Timestamp;
    RequiredHttpHeaders?: Record<string, string>;
    TranscodingUrl?: string;
    TranscodingSubProtocol?: string;
    TranscodingContainer?: string;
    AnalyzeDurationMs?: number | null;
    ReadAtNativeFramerate?: boolean;
    DefaultAudioStreamIndex?: number | null;
    DefaultSubtitleStreamIndex?: number | null;
};
export namespace MediaSourceInfo {
    export enum Protocol {
        FILE = 'File',
        HTTP = 'Http',
        RTMP = 'Rtmp',
        RTSP = 'Rtsp',
        UDP = 'Udp',
        RTP = 'Rtp',
        FTP = 'Ftp',
        MMS = 'Mms',
    }
    export enum EncoderProtocol {
        FILE = 'File',
        HTTP = 'Http',
        RTMP = 'Rtmp',
        RTSP = 'Rtsp',
        UDP = 'Udp',
        RTP = 'Rtp',
        FTP = 'Ftp',
        MMS = 'Mms',
    }
    export enum Type {
        DEFAULT = 'Default',
        GROUPING = 'Grouping',
        PLACEHOLDER = 'Placeholder',
    }
    export enum Video3DFormat {
        HALF_SIDE_BY_SIDE = 'HalfSideBySide',
        FULL_SIDE_BY_SIDE = 'FullSideBySide',
        FULL_TOP_AND_BOTTOM = 'FullTopAndBottom',
        HALF_TOP_AND_BOTTOM = 'HalfTopAndBottom',
        MVC = 'MVC',
    }
    export enum Timestamp {
        NONE = 'None',
        ZERO = 'Zero',
        VALID = 'Valid',
    }
}

