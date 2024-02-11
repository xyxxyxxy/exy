/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Playlists_PlaylistCreationResult } from '../models/Playlists_PlaylistCreationResult';
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PlaylistServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new playlist
     * Requires authentication as user
     * @param name The name of the new playlist.
     * @param ids Item Ids to add to the playlist
     * @param mediaType The playlist media type
     * @returns Playlists_PlaylistCreationResult Operation successful. Returning a PlaylistCreationResult object.
     * @throws ApiError
     */
    public postPlaylists(
        name?: string,
        ids?: string,
        mediaType?: string,
    ): CancelablePromise<Playlists_PlaylistCreationResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Playlists',
            query: {
                'Name': name,
                'Ids': ids,
                'MediaType': mediaType,
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
     * Adds items to a playlist
     * Requires authentication as user
     * @param ids Item id, comma delimited
     * @param id
     * @param userId User Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postPlaylistsByIdItems(
        ids: string,
        id: string,
        userId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Playlists/{Id}/Items',
            path: {
                'Id': id,
            },
            query: {
                'Ids': ids,
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
     * Removes items from a playlist
     * Requires authentication as user
     * @param id
     * @param entryIds
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deletePlaylistsByIdItems(
        id: string,
        entryIds: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Playlists/{Id}/Items',
            path: {
                'Id': id,
            },
            query: {
                'EntryIds': entryIds,
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
     * Gets the original items of a playlist
     * Requires authentication as user
     * @param id
     * @param userId User Id
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getPlaylistsByIdItems(
        id: string,
        userId?: string,
        startIndex?: number | null,
        limit?: number | null,
        fields?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Playlists/{Id}/Items',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
                'StartIndex': startIndex,
                'Limit': limit,
                'Fields': fields,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
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
     * Moves a playlist item
     * Requires authentication as user
     * @param itemId ItemId
     * @param id
     * @param newIndex NewIndex
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postPlaylistsByIdItemsByItemidMoveByNewindex(
        itemId: number,
        id: string,
        newIndex: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Playlists/{Id}/Items/{ItemId}/Move/{NewIndex}',
            path: {
                'ItemId': itemId,
                'Id': id,
                'NewIndex': newIndex,
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
