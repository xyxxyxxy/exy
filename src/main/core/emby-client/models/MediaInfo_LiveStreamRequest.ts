/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_DeviceProfile } from './Dlna_DeviceProfile';
export type MediaInfo_LiveStreamRequest = {
    OpenToken?: string;
    UserId?: string;
    PlaySessionId?: string;
    MaxStreamingBitrate?: number | null;
    StartTimeTicks?: number | null;
    AudioStreamIndex?: number | null;
    SubtitleStreamIndex?: number | null;
    MaxAudioChannels?: number | null;
    ItemId?: number;
    DeviceProfile?: Dlna_DeviceProfile;
    EnableDirectPlay?: boolean;
    EnableDirectStream?: boolean;
    EnableTranscoding?: boolean;
    AllowVideoStreamCopy?: boolean;
    AllowAudioStreamCopy?: boolean;
    DirectPlayProtocols?: Array<'File' | 'Http' | 'Rtmp' | 'Rtsp' | 'Udp' | 'Rtp' | 'Ftp' | 'Mms'>;
};

