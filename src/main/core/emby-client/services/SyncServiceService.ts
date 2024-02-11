/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_Sync_Model_SyncJobItem } from '../models/QueryResult_Sync_Model_SyncJobItem';
import type { QueryResult_Sync_SyncJob } from '../models/QueryResult_Sync_SyncJob';
import type { Sync_Model_SyncDataRequest } from '../models/Sync_Model_SyncDataRequest';
import type { Sync_Model_SyncDataResponse } from '../models/Sync_Model_SyncDataResponse';
import type { Sync_Model_SyncDialogOptions } from '../models/Sync_Model_SyncDialogOptions';
import type { Sync_Model_SyncedItem } from '../models/Sync_Model_SyncedItem';
import type { Sync_Model_SyncedItemProgress } from '../models/Sync_Model_SyncedItemProgress';
import type { Sync_Model_SyncJobCreationResult } from '../models/Sync_Model_SyncJobCreationResult';
import type { Sync_Model_SyncJobRequest } from '../models/Sync_Model_SyncJobRequest';
import type { Sync_SyncJob } from '../models/Sync_SyncJob';
import type { Sync_SyncTarget } from '../models/Sync_SyncTarget';
import type { Users_UserAction } from '../models/Users_UserAction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SyncServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of available sync targets.
     * Requires authentication as user
     * @param userId UserId
     * @returns Sync_SyncTarget Operation successful. Returning a List<SyncTarget> object.
     * @throws ApiError
     */
    public getSyncTargets(
        userId: string,
    ): CancelablePromise<Array<Sync_SyncTarget>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/Targets',
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
     * Gets sync jobs.
     * Requires authentication as user
     * @returns QueryResult_Sync_SyncJob Operation successful. Returning a QueryResult<SyncJob> object.
     * @throws ApiError
     */
    public getSyncJobs(): CancelablePromise<QueryResult_Sync_SyncJob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/Jobs',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets sync jobs.
     * Requires authentication as user
     * @param requestBody SyncJobRequest:
     * @returns Sync_Model_SyncJobCreationResult Operation successful. Returning a SyncJobCreationResult object.
     * @throws ApiError
     */
    public postSyncJobs(
        requestBody: Sync_Model_SyncJobRequest,
    ): CancelablePromise<Sync_Model_SyncJobCreationResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/Jobs',
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
     * Gets sync job items.
     * Requires authentication as user
     * @returns QueryResult_Sync_Model_SyncJobItem Operation successful. Returning a QueryResult<SyncJobItem> object.
     * @throws ApiError
     */
    public getSyncJobitems(): CancelablePromise<QueryResult_Sync_Model_SyncJobItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/JobItems',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a list of available sync targets.
     * Requires authentication as user
     * @param userId UserId
     * @param itemIds ItemIds
     * @param parentId ParentId
     * @param targetId TargetId
     * @param category Category
     * @returns Sync_Model_SyncDialogOptions Operation successful. Returning a SyncDialogOptions object.
     * @throws ApiError
     */
    public getSyncOptions(
        userId: string,
        itemIds?: string,
        parentId?: string,
        targetId?: string,
        category?: 'Latest' | 'NextUp' | 'Resume',
    ): CancelablePromise<Sync_Model_SyncDialogOptions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/Options',
            query: {
                'UserId': userId,
                'ItemIds': itemIds,
                'ParentId': parentId,
                'TargetId': targetId,
                'Category': category,
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
     * Reports an action that occurred while offline.
     * Requires authentication as user
     * @param requestBody List`1:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncOfflineactions(
        requestBody: Array<Users_UserAction>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/OfflineActions',
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
     * Syncs data between device and server
     * Requires authentication as user
     * @param requestBody SyncDataRequest:
     * @returns Sync_Model_SyncDataResponse Operation successful. Returning a SyncDataResponse object.
     * @throws ApiError
     */
    public postSyncData(
        requestBody: Sync_Model_SyncDataRequest,
    ): CancelablePromise<Sync_Model_SyncDataResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/Data',
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
     * Gets sync status for an item.
     * Requires authentication as user
     * @param itemId
     * @param requestBody SyncedItemProgress:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncByItemidStatus(
        itemId: string,
        requestBody: Sync_Model_SyncedItemProgress,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/{ItemId}/Status',
            path: {
                'ItemId': itemId,
            },
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
     * Gets a sync job.
     * Requires authentication as user
     * @param id Id
     * @returns Sync_SyncJob Operation successful. Returning a SyncJob object.
     * @throws ApiError
     */
    public getSyncJobsById(
        id: string,
    ): CancelablePromise<Sync_SyncJob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/Jobs/{Id}',
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
     * Cancels a sync job.
     * Requires authentication as user
     * @param id Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteSyncJobsById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Sync/Jobs/{Id}',
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
     * Updates a sync job.
     * Requires authentication as user
     * @param id
     * @param requestBody SyncJob:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncJobsById(
        id: number,
        requestBody: Sync_SyncJob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/Jobs/{Id}',
            path: {
                'Id': id,
            },
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
     * Cancels items from a sync target
     * Requires authentication as user
     * @param itemIds ItemIds
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncItemsCancel(
        itemIds?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/Items/Cancel',
            query: {
                'ItemIds': itemIds,
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
     * Cancels items from a sync target
     * Requires authentication as user
     * @param targetId TargetId
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteSyncByTargetidItems(
        targetId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Sync/{TargetId}/Items',
            path: {
                'TargetId': targetId,
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
     * Gets ready to download sync items.
     * Requires authentication as user
     * @param targetId TargetId
     * @returns Sync_Model_SyncedItem Operation successful. Returning a List<SyncedItem> object.
     * @throws ApiError
     */
    public getSyncItemsReady(
        targetId: string,
    ): CancelablePromise<Array<Sync_Model_SyncedItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/Items/Ready',
            query: {
                'TargetId': targetId,
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
     * Cancels a sync job item
     * Requires authentication as user
     * @param id Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteSyncJobitemsById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Sync/JobItems/{Id}',
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
     * Reports that a sync job item has successfully been transferred.
     * Requires authentication as user
     * @param id Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncJobitemsByIdTransferred(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/JobItems/{Id}/Transferred',
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
     * Gets a sync job item file
     * Requires authentication as user
     * @param id Id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getSyncJobitemsByIdFile(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/JobItems/{Id}/File',
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
     * Gets a sync job item file
     * Requires authentication as user
     * @param id Id
     * @param name Name
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getSyncJobitemsByIdAdditionalfiles(
        id: string,
        name: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sync/JobItems/{Id}/AdditionalFiles',
            path: {
                'Id': id,
            },
            query: {
                'Name': name,
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
     * Enables a cancelled or queued sync job item
     * Requires authentication as user
     * @param id Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncJobitemsByIdEnable(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/JobItems/{Id}/Enable',
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
     * Marks a job item for removal
     * Requires authentication as user
     * @param id Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncJobitemsByIdMarkforremoval(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/JobItems/{Id}/MarkForRemoval',
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
     * Unmarks a job item for removal
     * Requires authentication as user
     * @param id Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSyncJobitemsByIdUnmarkforremoval(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sync/JobItems/{Id}/UnmarkForRemoval',
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
}
