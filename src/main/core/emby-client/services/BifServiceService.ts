/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RokuMetadata_Api_ThumbnailSetInfo } from '../models/RokuMetadata_Api_ThumbnailSetInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BifServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Requires authentication as user
     * @param width
     * @param id Item Id
     * @returns RokuMetadata_Api_ThumbnailSetInfo Operation successful. Returning a ThumbnailSetInfo object.
     * @throws ApiError
     */
    public getItemsByIdThumbnailset(
        width: number,
        id: string,
    ): CancelablePromise<RokuMetadata_Api_ThumbnailSetInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/ThumbnailSet',
            path: {
                'Id': id,
            },
            query: {
                'Width': width,
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
     * No authentication required
     * @param width
     * @param id Item Id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getVideosByIdIndexBif(
        width: number,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Videos/{Id}/index.bif',
            path: {
                'Id': id,
            },
            query: {
                'Width': width,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
