/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MediaStream = {
    Codec?: string;
    CodecTag?: string;
    Language?: string;
    ColorTransfer?: string;
    ColorPrimaries?: string;
    ColorSpace?: string;
    Comment?: string;
    TimeBase?: string;
    CodecTimeBase?: string;
    Title?: string;
    Extradata?: string;
    VideoRange?: string;
    DisplayTitle?: string;
    DisplayLanguage?: string;
    NalLengthSize?: string;
    IsInterlaced?: boolean;
    IsAVC?: boolean | null;
    ChannelLayout?: string;
    BitRate?: number | null;
    BitDepth?: number | null;
    RefFrames?: number | null;
    PacketLength?: number | null;
    Channels?: number | null;
    SampleRate?: number | null;
    IsDefault?: boolean;
    IsForced?: boolean;
    Height?: number | null;
    Width?: number | null;
    AverageFrameRate?: number | null;
    RealFrameRate?: number | null;
    Profile?: string;
    Type?: MediaStream.Type;
    AspectRatio?: string;
    Index?: number;
    Score?: number | null;
    IsExternal?: boolean;
    DeliveryMethod?: MediaStream.DeliveryMethod;
    DeliveryUrl?: string;
    IsExternalUrl?: boolean | null;
    IsTextSubtitleStream?: boolean;
    SupportsExternalStream?: boolean;
    Path?: string;
    PixelFormat?: string;
    Level?: number | null;
    IsAnamorphic?: boolean | null;
};
export namespace MediaStream {
    export enum Type {
        AUDIO = 'Audio',
        VIDEO = 'Video',
        SUBTITLE = 'Subtitle',
        EMBEDDED_IMAGE = 'EmbeddedImage',
    }
    export enum DeliveryMethod {
        ENCODE = 'Encode',
        EMBED = 'Embed',
        EXTERNAL = 'External',
        HLS = 'Hls',
    }
}

