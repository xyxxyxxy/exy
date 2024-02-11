/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Search_SearchHintResult } from '../models/Search_SearchHintResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SearchServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets search hints based on a search term
     * Requires authentication as user
     * @param searchTerm The search term to filter on
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param userId Optional. Supply a user id to search within a user's library or omit to search all.
     * @param includePeople
     * @param includeMedia
     * @param includeGenres
     * @param includeStudios
     * @param includeArtists
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param excludeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param mediaTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param isMovie Optional filter for movies.
     * @param isSeries Optional filter for movies.
     * @param isNews Optional filter for news.
     * @param isKids Optional filter for kids.
     * @param isSports Optional filter for sports.
     * @returns Search_SearchHintResult Operation successful. Returning a SearchHintResult object.
     * @throws ApiError
     */
    public getSearchHints(
        searchTerm: string,
        startIndex?: number | null,
        limit?: number | null,
        userId?: string,
        includePeople?: boolean,
        includeMedia?: boolean,
        includeGenres?: boolean,
        includeStudios?: boolean,
        includeArtists?: boolean,
        includeItemTypes?: string,
        excludeItemTypes?: string,
        mediaTypes?: string,
        isMovie?: boolean | null,
        isSeries?: boolean | null,
        isNews?: boolean | null,
        isKids?: boolean | null,
        isSports?: boolean | null,
    ): CancelablePromise<Search_SearchHintResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Search/Hints',
            query: {
                'StartIndex': startIndex,
                'Limit': limit,
                'UserId': userId,
                'SearchTerm': searchTerm,
                'IncludePeople': includePeople,
                'IncludeMedia': includeMedia,
                'IncludeGenres': includeGenres,
                'IncludeStudios': includeStudios,
                'IncludeArtists': includeArtists,
                'IncludeItemTypes': includeItemTypes,
                'ExcludeItemTypes': excludeItemTypes,
                'MediaTypes': mediaTypes,
                'IsMovie': isMovie,
                'IsSeries': isSeries,
                'IsNews': isNews,
                'IsKids': isKids,
                'IsSports': isSports,
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
