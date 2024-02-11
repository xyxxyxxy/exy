/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collections_CollectionCreationResult } from '../models/Collections_CollectionCreationResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CollectionServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new collection
     * Requires authentication as user
     * @param isLocked Whether or not to lock the new collection.
     * @param name The name of the new collection.
     * @param parentId Optional - create the collection within a specific folder
     * @param ids Item Ids to add to the collection
     * @returns Collections_CollectionCreationResult Operation successful. Returning a CollectionCreationResult object.
     * @throws ApiError
     */
    public postCollections(
        isLocked?: boolean,
        name?: string,
        parentId?: string,
        ids?: string,
    ): CancelablePromise<Collections_CollectionCreationResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Collections',
            query: {
                'IsLocked': isLocked,
                'Name': name,
                'ParentId': parentId,
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
     * Adds items to a collection
     * Requires authentication as user
     * @param ids Item id, comma delimited
     * @param id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postCollectionsByIdItems(
        ids: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Collections/{Id}/Items',
            path: {
                'Id': id,
            },
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
     * Removes items from a collection
     * Requires authentication as user
     * @param ids Item id, comma delimited
     * @param id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteCollectionsByIdItems(
        ids: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Collections/{Id}/Items',
            path: {
                'Id': id,
            },
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
}
