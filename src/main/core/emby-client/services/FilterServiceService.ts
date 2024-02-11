/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryFilters } from '../models/QueryFilters';
import type { QueryFiltersLegacy } from '../models/QueryFiltersLegacy';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FilterServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets branding configuration
     * Requires authentication as user
     * @param userId User Id
     * @param parentId Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
     * @returns QueryFilters Operation successful. Returning a QueryFilters object.
     * @throws ApiError
     */
    public getItemsFilters2(
        userId?: string,
        parentId?: string,
        includeItemTypes?: string,
        mediaTypes?: string,
    ): CancelablePromise<QueryFilters> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/Filters2',
            query: {
                'UserId': userId,
                'ParentId': parentId,
                'IncludeItemTypes': includeItemTypes,
                'MediaTypes': mediaTypes,
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
     * Gets branding configuration
     * Requires authentication as user
     * @param userId User Id
     * @param parentId Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
     * @returns QueryFiltersLegacy Operation successful. Returning a QueryFiltersLegacy object.
     * @throws ApiError
     */
    public getItemsFilters(
        userId?: string,
        parentId?: string,
        includeItemTypes?: string,
        mediaTypes?: string,
    ): CancelablePromise<QueryFiltersLegacy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/Filters',
            query: {
                'UserId': userId,
                'ParentId': parentId,
                'IncludeItemTypes': includeItemTypes,
                'MediaTypes': mediaTypes,
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
