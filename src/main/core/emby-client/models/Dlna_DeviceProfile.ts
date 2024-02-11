/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_CodecProfile } from './Dlna_CodecProfile';
import type { Dlna_ContainerProfile } from './Dlna_ContainerProfile';
import type { Dlna_DeviceIdentification } from './Dlna_DeviceIdentification';
import type { Dlna_DirectPlayProfile } from './Dlna_DirectPlayProfile';
import type { Dlna_ResponseProfile } from './Dlna_ResponseProfile';
import type { Dlna_SubtitleProfile } from './Dlna_SubtitleProfile';
import type { Dlna_TranscodingProfile } from './Dlna_TranscodingProfile';
import type { Dlna_XmlAttribute } from './Dlna_XmlAttribute';
export type Dlna_DeviceProfile = {
    Name?: string;
    Id?: string;
    Identification?: Dlna_DeviceIdentification;
    FriendlyName?: string;
    Manufacturer?: string;
    ManufacturerUrl?: string;
    ModelName?: string;
    ModelDescription?: string;
    ModelNumber?: string;
    ModelUrl?: string;
    SerialNumber?: string;
    EnableAlbumArtInDidl?: boolean;
    EnableSingleAlbumArtLimit?: boolean;
    EnableSingleSubtitleLimit?: boolean;
    SupportedMediaTypes?: string;
    UserId?: string;
    AlbumArtPn?: string;
    MaxAlbumArtWidth?: number;
    MaxAlbumArtHeight?: number;
    MaxIconWidth?: number | null;
    MaxIconHeight?: number | null;
    MaxStreamingBitrate?: number | null;
    MaxStaticBitrate?: number | null;
    MusicStreamingTranscodingBitrate?: number | null;
    MaxStaticMusicBitrate?: number | null;
    SonyAggregationFlags?: string;
    ProtocolInfo?: string;
    TimelineOffsetSeconds?: number;
    RequiresPlainVideoItems?: boolean;
    RequiresPlainFolders?: boolean;
    EnableMSMediaReceiverRegistrar?: boolean;
    IgnoreTranscodeByteRangeRequests?: boolean;
    XmlRootAttributes?: Array<Dlna_XmlAttribute>;
    DirectPlayProfiles?: Array<Dlna_DirectPlayProfile>;
    TranscodingProfiles?: Array<Dlna_TranscodingProfile>;
    ContainerProfiles?: Array<Dlna_ContainerProfile>;
    CodecProfiles?: Array<Dlna_CodecProfile>;
    ResponseProfiles?: Array<Dlna_ResponseProfile>;
    SubtitleProfiles?: Array<Dlna_SubtitleProfile>;
};

