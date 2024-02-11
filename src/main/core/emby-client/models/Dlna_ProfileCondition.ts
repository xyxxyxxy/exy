/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Dlna_ProfileCondition = {
    Condition?: Dlna_ProfileCondition.Condition;
    Property?: Dlna_ProfileCondition.Property;
    Value?: string;
    IsRequired?: boolean;
};
export namespace Dlna_ProfileCondition {
    export enum Condition {
        EQUALS = 'Equals',
        NOT_EQUALS = 'NotEquals',
        LESS_THAN_EQUAL = 'LessThanEqual',
        GREATER_THAN_EQUAL = 'GreaterThanEqual',
        EQUALS_ANY = 'EqualsAny',
    }
    export enum Property {
        AUDIO_CHANNELS = 'AudioChannels',
        AUDIO_BITRATE = 'AudioBitrate',
        AUDIO_PROFILE = 'AudioProfile',
        WIDTH = 'Width',
        HEIGHT = 'Height',
        HAS64BIT_OFFSETS = 'Has64BitOffsets',
        PACKET_LENGTH = 'PacketLength',
        VIDEO_BIT_DEPTH = 'VideoBitDepth',
        VIDEO_BITRATE = 'VideoBitrate',
        VIDEO_FRAMERATE = 'VideoFramerate',
        VIDEO_LEVEL = 'VideoLevel',
        VIDEO_PROFILE = 'VideoProfile',
        VIDEO_TIMESTAMP = 'VideoTimestamp',
        IS_ANAMORPHIC = 'IsAnamorphic',
        REF_FRAMES = 'RefFrames',
        NUM_AUDIO_STREAMS = 'NumAudioStreams',
        NUM_VIDEO_STREAMS = 'NumVideoStreams',
        IS_SECONDARY_AUDIO = 'IsSecondaryAudio',
        VIDEO_CODEC_TAG = 'VideoCodecTag',
        IS_AVC = 'IsAvc',
        IS_INTERLACED = 'IsInterlaced',
        AUDIO_SAMPLE_RATE = 'AudioSampleRate',
        AUDIO_BIT_DEPTH = 'AudioBitDepth',
    }
}

