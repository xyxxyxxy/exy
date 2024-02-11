/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_News_NewsItem } from '../models/QueryResult_News_NewsItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NewsServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the latest product news.
     * No authentication required
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @returns QueryResult_News_NewsItem Operation successful. Returning a QueryResult<NewsItem> object.
     * @throws ApiError
     */
    public getNewsProduct(
        startIndex?: number | null,
        limit?: number | null,
    ): CancelablePromise<QueryResult_News_NewsItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/News/Product',
            query: {
                'StartIndex': startIndex,
                'Limit': limit,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
