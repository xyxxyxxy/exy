/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from '../models/BaseItemDto';
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { UserItemDataDto } from '../models/UserItemDataDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserLibraryServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a live tv program
     * Requires authentication as user
     * @param id Item Id
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto object.
     * @throws ApiError
     */
    public getLivetvProgramsById(
        id: string,
    ): CancelablePromise<BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Programs/{Id}',
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
     * Gets latest media
     * Requires authentication as user
     * @param userId User Id
     * @param limit Limit
     * @param parentId Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, SortName, Studios, Taglines
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param isFolder Filter by items that are folders, or not.
     * @param isPlayed Filter by items that are played, or not.
     * @param groupItems Whether or not to group items into a parent container.
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param enableUserData Optional, include user data
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto[] object.
     * @throws ApiError
     */
    public getUsersByUseridItemsLatest(
        userId: string,
        limit?: number,
        parentId?: string,
        fields?: string,
        includeItemTypes?: string,
        isFolder?: boolean | null,
        isPlayed?: boolean | null,
        groupItems?: boolean,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        enableUserData?: boolean | null,
    ): CancelablePromise<Array<BaseItemDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Items/Latest',
            path: {
                'UserId': userId,
            },
            query: {
                'Limit': limit,
                'ParentId': parentId,
                'Fields': fields,
                'IncludeItemTypes': includeItemTypes,
                'IsFolder': isFolder,
                'IsPlayed': isPlayed,
                'GroupItems': groupItems,
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
     * Gets an item from a user's library
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto object.
     * @throws ApiError
     */
    public getUsersByUseridItemsById(
        userId: string,
        id: string,
    ): CancelablePromise<BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Items/{Id}',
            path: {
                'UserId': userId,
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
     * Gets the root folder from a user's library
     * Requires authentication as user
     * @param userId User Id
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto object.
     * @throws ApiError
     */
    public getUsersByUseridItemsRoot(
        userId: string,
    ): CancelablePromise<BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Items/Root',
            path: {
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
     * Marks an item as a favorite
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @returns UserItemDataDto Operation successful. Returning a UserItemDataDto object.
     * @throws ApiError
     */
    public postUsersByUseridFavoriteitemsById(
        userId: string,
        id: string,
    ): CancelablePromise<UserItemDataDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{UserId}/FavoriteItems/{Id}',
            path: {
                'UserId': userId,
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
     * Unmarks an item as a favorite
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @returns UserItemDataDto Operation successful. Returning a UserItemDataDto object.
     * @throws ApiError
     */
    public deleteUsersByUseridFavoriteitemsById(
        userId: string,
        id: string,
    ): CancelablePromise<UserItemDataDto> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{UserId}/FavoriteItems/{Id}',
            path: {
                'UserId': userId,
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
     * Gets special features for an item
     * Requires authentication as user
     * @param userId User Id
     * @param id Movie Id
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto[] object.
     * @throws ApiError
     */
    public getUsersByUseridItemsByIdSpecialfeatures(
        userId: string,
        id: string,
    ): CancelablePromise<Array<BaseItemDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Items/{Id}/SpecialFeatures',
            path: {
                'UserId': userId,
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
     * Gets local trailers for an item
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto[] object.
     * @throws ApiError
     */
    public getUsersByUseridItemsByIdLocaltrailers(
        userId: string,
        id: string,
    ): CancelablePromise<Array<BaseItemDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Items/{Id}/LocalTrailers',
            path: {
                'UserId': userId,
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
     * Gets intros to play before the main media item plays
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getUsersByUseridItemsByIdIntros(
        userId: string,
        id: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{UserId}/Items/{Id}/Intros',
            path: {
                'UserId': userId,
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
     * Deletes a user's saved personal rating for an item
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @returns UserItemDataDto Operation successful. Returning a UserItemDataDto object.
     * @throws ApiError
     */
    public deleteUsersByUseridItemsByIdRating(
        userId: string,
        id: string,
    ): CancelablePromise<UserItemDataDto> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{UserId}/Items/{Id}/Rating',
            path: {
                'UserId': userId,
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
     * Updates a user's rating for an item
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @param likes Whether the user likes the item or not. true/false
     * @returns UserItemDataDto Operation successful. Returning a UserItemDataDto object.
     * @throws ApiError
     */
    public postUsersByUseridItemsByIdRating(
        userId: string,
        id: string,
        likes: boolean,
    ): CancelablePromise<UserItemDataDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{UserId}/Items/{Id}/Rating',
            path: {
                'UserId': userId,
                'Id': id,
            },
            query: {
                'Likes': likes,
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
