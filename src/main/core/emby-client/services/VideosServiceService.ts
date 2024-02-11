/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VideosServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Merges videos into a single record
     * Requires authentication as administrator
     * @param ids Item id list. This allows multiple, comma delimited.
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postVideosMergeversions(
        ids?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Videos/MergeVersions',
            query: {
                'Ids': ids,
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
     * Gets additional parts for a video.
     * Requires authentication as user
     * @param id Item Id
     * @param userId Optional. Filter by user id, and attach user data
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getVideosByIdAdditionalparts(
        id: string,
        userId?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Videos/{Id}/AdditionalParts',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
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
     * Removes alternate video sources.
     * Requires authentication as administrator
     * @param id Item Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteVideosByIdAlternatesources(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Videos/{Id}/AlternateSources',
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
}
