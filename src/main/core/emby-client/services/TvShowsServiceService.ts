/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TvShowsServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of upcoming episodes
     * Requires authentication as user
     * @param userId User Id
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @param parentId Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param enableUserData Optional, include user data
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getShowsUpcoming(
        userId: string,
        startIndex?: number | null,
        limit?: number | null,
        fields?: string,
        parentId?: string,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        enableUserData?: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Shows/Upcoming',
            query: {
                'UserId': userId,
                'StartIndex': startIndex,
                'Limit': limit,
                'Fields': fields,
                'ParentId': parentId,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'EnableUserData': enableUserData,
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
     * Gets a list of next up episodes
     * Requires authentication as user
     * @param userId User Id
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @param seriesId Optional. Filter by series id
     * @param parentId Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param enableUserData Optional, include user data
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getShowsNextup(
        userId: string,
        startIndex?: number | null,
        limit?: number | null,
        fields?: string,
        seriesId?: string,
        parentId?: string,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        enableUserData?: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Shows/NextUp',
            query: {
                'UserId': userId,
                'StartIndex': startIndex,
                'Limit': limit,
                'Fields': fields,
                'SeriesId': seriesId,
                'ParentId': parentId,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'EnableUserData': enableUserData,
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
     * Gets seasons for a tv series
     * Requires authentication as user
     * @param userId User Id
     * @param id The series id
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @param isSpecialSeason Optional. Filter by special season.
     * @param isMissing Optional filter by items that are missing episodes or not.
     * @param adjacentTo Optional. Return items that are siblings of a supplied item.
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param enableUserData Optional, include user data
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getShowsByIdSeasons(
        userId: string,
        id: string,
        fields?: string,
        isSpecialSeason?: boolean | null,
        isMissing?: boolean | null,
        adjacentTo?: string,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        enableUserData?: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Shows/{Id}/Seasons',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
                'Fields': fields,
                'IsSpecialSeason': isSpecialSeason,
                'IsMissing': isMissing,
                'AdjacentTo': adjacentTo,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'EnableUserData': enableUserData,
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
     * Gets episodes for a tv season
     * Requires authentication as user
     * @param userId User Id
     * @param id The series id
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @param season Optional filter by season number.
     * @param seasonId Optional. Filter by season id
     * @param isMissing Optional filter by items that are missing episodes or not.
     * @param adjacentTo Optional. Return items that are siblings of a supplied item.
     * @param startItemId Optional. Skip through the list until a given item is found.
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param enableUserData Optional, include user data
     * @param sortBy Optional. Specify one or more sort orders, comma delimeted. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime
     * @param sortOrder Sort Order - Ascending,Descending
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getShowsByIdEpisodes(
        userId: string,
        id: string,
        fields?: string,
        season?: number | null,
        seasonId?: string,
        isMissing?: boolean | null,
        adjacentTo?: string,
        startItemId?: string,
        startIndex?: number | null,
        limit?: number | null,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        enableUserData?: boolean | null,
        sortBy?: string,
        sortOrder?: 'Ascending' | 'Descending',
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Shows/{Id}/Episodes',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
                'Fields': fields,
                'Season': season,
                'SeasonId': seasonId,
                'IsMissing': isMissing,
                'AdjacentTo': adjacentTo,
                'StartItemId': startItemId,
                'StartIndex': startIndex,
                'Limit': limit,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'EnableUserData': enableUserData,
                'SortBy': sortBy,
                'SortOrder': sortOrder,
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
