/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tuple_Double_Double } from './Tuple_Double_Double';
export type TranscodingInfo = {
    AudioCodec?: string;
    VideoCodec?: string;
    Container?: string;
    IsVideoDirect?: boolean;
    IsAudioDirect?: boolean;
    Bitrate?: number | null;
    Framerate?: number | null;
    CompletionPercentage?: number | null;
    TranscodingPositionTicks?: number | null;
    TranscodingStartPositionTicks?: number | null;
    Width?: number | null;
    Height?: number | null;
    AudioChannels?: number | null;
    TranscodeReasons?: Array<'ContainerNotSupported' | 'VideoCodecNotSupported' | 'AudioCodecNotSupported' | 'ContainerBitrateExceedsLimit' | 'AudioBitrateNotSupported' | 'AudioChannelsNotSupported' | 'VideoResolutionNotSupported' | 'UnknownVideoStreamInfo' | 'UnknownAudioStreamInfo' | 'AudioProfileNotSupported' | 'AudioSampleRateNotSupported' | 'AnamorphicVideoNotSupported' | 'InterlacedVideoNotSupported' | 'SecondaryAudioNotSupported' | 'RefFramesNotSupported' | 'VideoBitDepthNotSupported' | 'VideoBitrateNotSupported' | 'VideoFramerateNotSupported' | 'VideoLevelNotSupported' | 'VideoProfileNotSupported' | 'AudioBitDepthNotSupported' | 'SubtitleCodecNotSupported' | 'DirectPlayError'>;
    CurrentCpuUsage?: number | null;
    AverageCpuUsage?: number | null;
    CpuHistory?: Array<Tuple_Double_Double>;
    CurrentThrottle?: number | null;
    VideoDecoder?: string;
    VideoDecoderIsHardware?: boolean;
    VideoDecoderMediaType?: string;
    VideoDecoderHwAccel?: string;
    VideoEncoder?: string;
    VideoEncoderIsHardware?: boolean;
    VideoEncoderMediaType?: string;
    VideoEncoderHwAccel?: string;
};

