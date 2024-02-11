/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllThemeMediaResult } from '../models/AllThemeMediaResult';
import type { BaseItemDto } from '../models/BaseItemDto';
import type { ItemCounts } from '../models/ItemCounts';
import type { Library_DeleteInfo } from '../models/Library_DeleteInfo';
import type { Library_LibraryOptionsResult } from '../models/Library_LibraryOptionsResult';
import type { Library_MediaFolder } from '../models/Library_MediaFolder';
import type { Library_PostUpdatedMedia } from '../models/Library_PostUpdatedMedia';
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { ThemeMediaResult } from '../models/ThemeMediaResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LibraryServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Deletes an item from the library and file system
     * Requires authentication as user
     * @param ids Ids
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteItems(
        ids: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Items',
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
     * Requires authentication as user
     * @param userId Optional. Get counts from a specific user's library.
     * @param isFavorite Optional. Get counts of favorite items
     * @returns ItemCounts Operation successful. Returning a ItemCounts object.
     * @throws ApiError
     */
    public getItemsCounts(
        userId?: string,
        isFavorite?: boolean | null,
    ): CancelablePromise<ItemCounts> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/Counts',
            query: {
                'UserId': userId,
                'IsFavorite': isFavorite,
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
     * Deletes an item from the library and file system
     * Requires authentication as user
     * @param id Item Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteItemsById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Items/{Id}',
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
    /**
     * Requires authentication as user
     * @returns Library_LibraryOptionsResult Operation successful. Returning a LibraryOptionsResult object.
     * @throws ApiError
     */
    public getLibrariesAvailableoptions(): CancelablePromise<Library_LibraryOptionsResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Libraries/AvailableOptions',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets all user media folders.
     * Requires authentication as user
     * @returns Library_MediaFolder Operation successful. Returning a MediaFolder[] object.
     * @throws ApiError
     */
    public getLibrarySelectablemediafolders(): CancelablePromise<Array<Library_MediaFolder>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Library/SelectableMediaFolders',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets all user media folders.
     * Requires authentication as user
     * @param isHidden Optional. Filter by folders that are marked hidden, or not.
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getLibraryMediafolders(
        isHidden?: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Library/MediaFolders',
            query: {
                'IsHidden': isHidden,
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
     * Gets a list of physical paths from virtual folders
     * Requires authentication as administrator
     * @returns string Operation successful. Returning a List<String> object.
     * @throws ApiError
     */
    public getLibraryPhysicalpaths(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Library/PhysicalPaths',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Starts a library scan
     * Requires authentication as administrator
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryRefresh(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/Refresh',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Finds albums similar to a given album.
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
    public getAlbumsByIdSimilar(
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
            url: '/Albums/{Id}/Similar',
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
     * Finds albums similar to a given album.
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
    public getArtistsByIdSimilar(
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
            url: '/Artists/{Id}/Similar',
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
     * Finds games similar to a given game.
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
    public getGamesByIdSimilar(
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
            url: '/Games/{Id}/Similar',
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
     * Gets delete info for an item
     * Requires authentication as user
     * @param id Item Id
     * @returns Library_DeleteInfo Operation successful. Returning a DeleteInfo object.
     * @throws ApiError
     */
    public getItemsByIdDeleteinfo(
        id: string,
    ): CancelablePromise<Library_DeleteInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/DeleteInfo',
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
    /**
     * Gets similar items
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
    public getItemsByIdSimilar(
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
            url: '/Items/{Id}/Similar',
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
     * Downloads item media
     * Requires authentication as user
     * @param id Item Id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getItemsByIdDownload(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/Download',
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
    /**
     * Gets the original file of an item
     * Requires authentication as user
     * @param id Item Id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getItemsByIdFile(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/File',
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
    /**
     * Gets all parents of an item
     * Requires authentication as user
     * @param id Item Id
     * @param userId Optional. Filter by user id, and attach user data
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto[] object.
     * @throws ApiError
     */
    public getItemsByIdAncestors(
        id: string,
        userId?: string,
    ): CancelablePromise<Array<BaseItemDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/Ancestors',
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
     * Gets critic reviews for an item
     * Requires authentication as user
     * @param id Item Id
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getItemsByIdCriticreviews(
        id: string,
        startIndex?: number | null,
        limit?: number | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/CriticReviews',
            path: {
                'Id': id,
            },
            query: {
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
     * Gets theme videos and songs for an item
     * Requires authentication as user
     * @param id Item Id
     * @param userId Optional. Filter by user id, and attach user data
     * @param inheritFromParent Determines whether or not parent items should be searched for theme media.
     * @returns AllThemeMediaResult Operation successful. Returning a AllThemeMediaResult object.
     * @throws ApiError
     */
    public getItemsByIdThememedia(
        id: string,
        userId?: string,
        inheritFromParent?: boolean,
    ): CancelablePromise<AllThemeMediaResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/ThemeMedia',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
                'InheritFromParent': inheritFromParent,
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
     * Gets theme songs for an item
     * Requires authentication as user
     * @param id Item Id
     * @param userId Optional. Filter by user id, and attach user data
     * @param inheritFromParent Determines whether or not parent items should be searched for theme media.
     * @returns ThemeMediaResult Operation successful. Returning a ThemeMediaResult object.
     * @throws ApiError
     */
    public getItemsByIdThemesongs(
        id: string,
        userId?: string,
        inheritFromParent?: boolean,
    ): CancelablePromise<ThemeMediaResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/ThemeSongs',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
                'InheritFromParent': inheritFromParent,
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
     * Gets theme videos for an item
     * Requires authentication as user
     * @param id Item Id
     * @param userId Optional. Filter by user id, and attach user data
     * @param inheritFromParent Determines whether or not parent items should be searched for theme media.
     * @returns ThemeMediaResult Operation successful. Returning a ThemeMediaResult object.
     * @throws ApiError
     */
    public getItemsByIdThemevideos(
        id: string,
        userId?: string,
        inheritFromParent?: boolean,
    ): CancelablePromise<ThemeMediaResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/ThemeVideos',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
                'InheritFromParent': inheritFromParent,
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
     * Deprecated. Use /Library/Media/Updated
     * Requires authentication as user
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibrarySeriesAdded(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/Series/Added',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Deprecated. Use /Library/Media/Updated
     * Requires authentication as user
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibrarySeriesUpdated(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/Series/Updated',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Reports that new movies have been added by an external source
     * Requires authentication as user
     * @param requestBody PostUpdatedMedia
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryMediaUpdated(
        requestBody: Library_PostUpdatedMedia,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/Media/Updated',
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
     * Deprecated. Use /Library/Media/Updated
     * Requires authentication as user
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryMoviesAdded(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/Movies/Added',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Deprecated. Use /Library/Media/Updated
     * Requires authentication as user
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryMoviesUpdated(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/Movies/Updated',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Finds movies and trailers similar to a given movie.
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
    public getMoviesByIdSimilar(
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
            url: '/Movies/{Id}/Similar',
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
     * Finds tv shows similar to a given one.
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
    public getShowsByIdSimilar(
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
            url: '/Shows/{Id}/Similar',
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
     * Finds movies and trailers similar to a given trailer.
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
    public getTrailersByIdSimilar(
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
            url: '/Trailers/{Id}/Similar',
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
