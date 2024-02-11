/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_DeviceProfile } from './Dlna_DeviceProfile';
export type MediaInfo_PlaybackInfoRequest = {
    Id?: string;
    UserId?: string;
    MaxStreamingBitrate?: number | null;
    StartTimeTicks?: number | null;
    AudioStreamIndex?: number | null;
    SubtitleStreamIndex?: number | null;
    MaxAudioChannels?: number | null;
    MediaSourceId?: string;
    LiveStreamId?: string;
    DeviceProfile?: Dlna_DeviceProfile;
    EnableDirectPlay?: boolean;
    EnableDirectStream?: boolean;
    EnableTranscoding?: boolean;
    AllowVideoStreamCopy?: boolean;
    AllowAudioStreamCopy?: boolean;
    IsPlayback?: boolean;
    AutoOpenLiveStream?: boolean;
    DirectPlayProtocols?: Array<'File' | 'Http' | 'Rtmp' | 'Rtsp' | 'Udp' | 'Rtp' | 'Ftp' | 'Mms'>;
};

