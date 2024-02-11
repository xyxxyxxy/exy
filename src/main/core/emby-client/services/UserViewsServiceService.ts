/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from '../models/BaseItemDto';
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserViewsServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * No authentication required
     * @param userId User Id
     * @param includeExternalContent Whether or not to include external views such as channels or live tv
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getUsersByUseridViews(
        userId: string,
        includeExternalContent: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Views',
            path: {
                'UserId': userId,
            },
            query: {
                'IncludeExternalContent': includeExternalContent,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param userId User Id
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto[] object.
     * @throws ApiError
     */
    public getUsersByUseridGroupingoptions(
        userId: string,
    ): CancelablePromise<Array<BaseItemDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/GroupingOptions',
            path: {
                'UserId': userId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
