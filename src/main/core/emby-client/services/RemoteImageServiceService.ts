/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageProviderInfo } from '../models/ImageProviderInfo';
import type { RemoteImageResult } from '../models/RemoteImageResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RemoteImageServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a remote image
     * No authentication required
     * @param imageUrl The image url
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getImagesRemote(
        imageUrl: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Images/Remote',
            query: {
                'ImageUrl': imageUrl,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets available remote images for an item
     * Requires authentication as user
     * @param id Item Id
     * @param type The image type
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param providerName Optional. The image provider to use
     * @param includeAllLanguages Optional.
     * @returns RemoteImageResult Operation successful. Returning a RemoteImageResult object.
     * @throws ApiError
     */
    public getItemsByIdRemoteimages(
        id: string,
        type?: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        startIndex?: number | null,
        limit?: number | null,
        providerName?: string,
        includeAllLanguages?: boolean,
    ): CancelablePromise<RemoteImageResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/RemoteImages',
            path: {
                'Id': id,
            },
            query: {
                'Type': type,
                'StartIndex': startIndex,
                'Limit': limit,
                'ProviderName': providerName,
                'IncludeAllLanguages': includeAllLanguages,
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
     * Gets available remote image providers for an item
     * Requires authentication as user
     * @param id Item Id
     * @returns ImageProviderInfo Operation successful. Returning a List<ImageProviderInfo> object.
     * @throws ApiError
     */
    public getItemsByIdRemoteimagesProviders(
        id: string,
    ): CancelablePromise<Array<ImageProviderInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/RemoteImages/Providers',
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
     * Downloads a remote image for an item
     * Requires authentication as administrator
     * @param id Item Id
     * @param type The image type
     * @param providerName The image provider
     * @param imageUrl The image url
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsByIdRemoteimagesDownload(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        providerName?: string,
        imageUrl?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{Id}/RemoteImages/Download',
            path: {
                'Id': id,
            },
            query: {
                'Type': type,
                'ProviderName': providerName,
                'ImageUrl': imageUrl,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
