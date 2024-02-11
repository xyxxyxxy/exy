/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Dlna_TranscodingProfile = {
    Container?: string;
    Type?: Dlna_TranscodingProfile.Type;
    VideoCodec?: string;
    AudioCodec?: string;
    Protocol?: string;
    EstimateContentLength?: boolean;
    EnableMpegtsM2TsMode?: boolean;
    TranscodeSeekInfo?: Dlna_TranscodingProfile.TranscodeSeekInfo;
    CopyTimestamps?: boolean;
    Context?: Dlna_TranscodingProfile.Context;
    MaxAudioChannels?: string;
    MinSegments?: number;
    SegmentLength?: number;
    BreakOnNonKeyFrames?: boolean;
    ManifestSubtitles?: string;
};
export namespace Dlna_TranscodingProfile {
    export enum Type {
        AUDIO = 'Audio',
        VIDEO = 'Video',
        PHOTO = 'Photo',
    }
    export enum TranscodeSeekInfo {
        AUTO = 'Auto',
        BYTES = 'Bytes',
    }
    export enum Context {
        STREAMING = 'Streaming',
        STATIC = 'Static',
    }
}

