/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RemoteSearchResult = {
    Name?: string;
    ProviderIds?: Record<string, string>;
    ProductionYear?: number | null;
    IndexNumber?: number | null;
    IndexNumberEnd?: number | null;
    ParentIndexNumber?: number | null;
    PremiereDate?: string | null;
    ImageUrl?: string;
    SearchProviderName?: string;
    GameSystem?: string;
    Overview?: string;
    AlbumArtist?: RemoteSearchResult;
    Artists?: Array<RemoteSearchResult>;
};

