/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalIdInfo } from '../models/ExternalIdInfo';
import type { Providers_RemoteSearchQuery_Providers_AlbumInfo } from '../models/Providers_RemoteSearchQuery_Providers_AlbumInfo';
import type { Providers_RemoteSearchQuery_Providers_ArtistInfo } from '../models/Providers_RemoteSearchQuery_Providers_ArtistInfo';
import type { Providers_RemoteSearchQuery_Providers_BookInfo } from '../models/Providers_RemoteSearchQuery_Providers_BookInfo';
import type { Providers_RemoteSearchQuery_Providers_BoxSetInfo } from '../models/Providers_RemoteSearchQuery_Providers_BoxSetInfo';
import type { Providers_RemoteSearchQuery_Providers_GameInfo } from '../models/Providers_RemoteSearchQuery_Providers_GameInfo';
import type { Providers_RemoteSearchQuery_Providers_MovieInfo } from '../models/Providers_RemoteSearchQuery_Providers_MovieInfo';
import type { Providers_RemoteSearchQuery_Providers_MusicVideoInfo } from '../models/Providers_RemoteSearchQuery_Providers_MusicVideoInfo';
import type { Providers_RemoteSearchQuery_Providers_PersonLookupInfo } from '../models/Providers_RemoteSearchQuery_Providers_PersonLookupInfo';
import type { Providers_RemoteSearchQuery_Providers_SeriesInfo } from '../models/Providers_RemoteSearchQuery_Providers_SeriesInfo';
import type { Providers_RemoteSearchQuery_Providers_TrailerInfo } from '../models/Providers_RemoteSearchQuery_Providers_TrailerInfo';
import type { RemoteSearchResult } from '../models/RemoteSearchResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ItemLookupServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets external id infos for an item
     * Requires authentication as administrator
     * @param id Item Id
     * @returns ExternalIdInfo Operation successful. Returning a List<ExternalIdInfo> object.
     * @throws ApiError
     */
    public getItemsByIdExternalidinfos(
        id: string,
    ): CancelablePromise<Array<ExternalIdInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/ExternalIdInfos',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchTrailer(
        requestBody: Providers_RemoteSearchQuery_Providers_TrailerInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/Trailer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchBook(
        requestBody: Providers_RemoteSearchQuery_Providers_BookInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/Book',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchMovie(
        requestBody: Providers_RemoteSearchQuery_Providers_MovieInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/Movie',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchSeries(
        requestBody: Providers_RemoteSearchQuery_Providers_SeriesInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/Series',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchGame(
        requestBody: Providers_RemoteSearchQuery_Providers_GameInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/Game',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchBoxset(
        requestBody: Providers_RemoteSearchQuery_Providers_BoxSetInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/BoxSet',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchMusicvideo(
        requestBody: Providers_RemoteSearchQuery_Providers_MusicVideoInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/MusicVideo',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchPerson(
        requestBody: Providers_RemoteSearchQuery_Providers_PersonLookupInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/Person',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchMusicalbum(
        requestBody: Providers_RemoteSearchQuery_Providers_AlbumInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/MusicAlbum',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param requestBody RemoteSearchQuery`1:
     * @returns RemoteSearchResult Operation successful. Returning a List<RemoteSearchResult> object.
     * @throws ApiError
     */
    public postItemsRemotesearchMusicartist(
        requestBody: Providers_RemoteSearchQuery_Providers_ArtistInfo,
    ): CancelablePromise<Array<RemoteSearchResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/MusicArtist',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a remote image
     * No authentication required
     * @param imageUrl The image url
     * @param providerName
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getItemsRemotesearchImage(
        imageUrl: string,
        providerName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/RemoteSearch/Image',
            query: {
                'ImageUrl': imageUrl,
                'ProviderName': providerName,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Applies search criteria to an item and refreshes metadata
     * Requires authentication as administrator
     * @param id The item id
     * @param requestBody RemoteSearchResult:
     * @param replaceAllImages Whether or not to replace all images
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsRemotesearchApplyById(
        id: string,
        requestBody: RemoteSearchResult,
        replaceAllImages?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/RemoteSearch/Apply/{Id}',
            path: {
                'Id': id,
            },
            query: {
                'ReplaceAllImages': replaceAllImages,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
