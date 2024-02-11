/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Providers_SongInfo } from './Providers_SongInfo';
export type Providers_AlbumInfo = {
    AlbumArtists?: Array<string>;
    SongInfos?: Array<Providers_SongInfo>;
    Name?: string;
    MetadataLanguage?: string;
    MetadataCountryCode?: string;
    ProviderIds?: Record<string, string>;
    Year?: number | null;
    IndexNumber?: number | null;
    ParentIndexNumber?: number | null;
    PremiereDate?: string | null;
    IsAutomated?: boolean;
};

