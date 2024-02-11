/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SuggestionsServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets items based on a query.
     * No authentication required
     * @param userId
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getUsersByUseridSuggestions(
        userId: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Suggestions',
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
