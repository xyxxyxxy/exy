/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChannelServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets available channels
     * Requires authentication as user
     * @param userId User Id
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getChannels(
        userId?: string,
        startIndex?: number | null,
        limit?: number | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Channels',
            query: {
                'UserId': userId,
                'StartIndex': startIndex,
                'Limit': limit,
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
     * Gets channel items
     * Requires authentication as user
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getChannelsByIdItems(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Channels/{Id}/Items',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets channel items
     * Requires authentication as user
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getChannelsItemsLatest(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Channels/Items/Latest',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
