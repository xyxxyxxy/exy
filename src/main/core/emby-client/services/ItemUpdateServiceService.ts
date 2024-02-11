/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from '../models/BaseItemDto';
import type { MetadataEditorInfo } from '../models/MetadataEditorInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ItemUpdateServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Updates an item
     * Requires authentication as administrator
     * @param itemId The id of the item
     * @param requestBody BaseItemDto:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsByItemid(
        itemId: string,
        requestBody: BaseItemDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{ItemId}',
            path: {
                'ItemId': itemId,
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
    /**
     * Gets metadata editor info for an item
     * Requires authentication as administrator
     * @param itemId The id of the item
     * @returns MetadataEditorInfo Operation successful. Returning a MetadataEditorInfo object.
     * @throws ApiError
     */
    public getItemsByItemidMetadataeditor(
        itemId: string,
    ): CancelablePromise<MetadataEditorInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{ItemId}/MetadataEditor',
            path: {
                'ItemId': itemId,
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
