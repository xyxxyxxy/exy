/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InstantMixServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an instant playlist based on a given artist
     * Requires authentication as user
     * @param id The artist Id
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param userId Optional. Filter by user id, and attach user data
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getArtistsInstantmix(
        id: string,
        includeItemTypes?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        userId?: string,
        limit?: number | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Artists/InstantMix',
            query: {
                'Id': id,
                'IncludeItemTypes': includeItemTypes,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'UserId': userId,
                'Limit': limit,
                'Fields': fields,
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
     * Creates an instant playlist based on a music genre
     * Requires authentication as user
     * @param id The genre Id
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param userId Optional. Filter by user id, and attach user data
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getMusicgenresInstantmix(
        id: string,
        includeItemTypes?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        userId?: string,
        limit?: number | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/MusicGenres/InstantMix',
            query: {
                'Id': id,
                'IncludeItemTypes': includeItemTypes,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'UserId': userId,
                'Limit': limit,
                'Fields': fields,
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
     * Creates an instant playlist based on a given album
     * Requires authentication as user
     * @param id Item Id
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param userId Optional. Filter by user id, and attach user data
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getAlbumsByIdInstantmix(
        id: string,
        includeItemTypes?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        userId?: string,
        limit?: number | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Albums/{Id}/InstantMix',
            path: {
                'Id': id,
            },
            query: {
                'IncludeItemTypes': includeItemTypes,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'UserId': userId,
                'Limit': limit,
                'Fields': fields,
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
     * Creates an instant playlist based on a given item
     * Requires authentication as user
     * @param id Item Id
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param userId Optional. Filter by user id, and attach user data
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getItemsByIdInstantmix(
        id: string,
        includeItemTypes?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        userId?: string,
        limit?: number | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/InstantMix',
            path: {
                'Id': id,
            },
            query: {
                'IncludeItemTypes': includeItemTypes,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'UserId': userId,
                'Limit': limit,
                'Fields': fields,
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
     * Creates an instant playlist based on a music genre
     * Requires authentication as user
     * @param name The genre name
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param userId Optional. Filter by user id, and attach user data
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getMusicgenresByNameInstantmix(
        name: string,
        includeItemTypes?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        userId?: string,
        limit?: number | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/MusicGenres/{Name}/InstantMix',
            path: {
                'Name': name,
            },
            query: {
                'IncludeItemTypes': includeItemTypes,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'UserId': userId,
                'Limit': limit,
                'Fields': fields,
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
     * Creates an instant playlist based on a given playlist
     * Requires authentication as user
     * @param id Item Id
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param userId Optional. Filter by user id, and attach user data
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getPlaylistsByIdInstantmix(
        id: string,
        includeItemTypes?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        userId?: string,
        limit?: number | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Playlists/{Id}/InstantMix',
            path: {
                'Id': id,
            },
            query: {
                'IncludeItemTypes': includeItemTypes,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'UserId': userId,
                'Limit': limit,
                'Fields': fields,
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
     * Creates an instant playlist based on a given song
     * Requires authentication as user
     * @param id Item Id
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param userId Optional. Filter by user id, and attach user data
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getSongsByIdInstantmix(
        id: string,
        includeItemTypes?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        userId?: string,
        limit?: number | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Songs/{Id}/InstantMix',
            path: {
                'Id': id,
            },
            query: {
                'IncludeItemTypes': includeItemTypes,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'UserId': userId,
                'Limit': limit,
                'Fields': fields,
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
