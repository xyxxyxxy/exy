/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tasks_TaskInfo } from '../models/Tasks_TaskInfo';
import type { Tasks_TaskTriggerInfo } from '../models/Tasks_TaskTriggerInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ScheduledTaskServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets scheduled tasks
     * Requires authentication as administrator
     * @param isHidden Optional filter tasks that are hidden, or not.
     * @param isEnabled Optional filter tasks that are enabled, or not.
     * @returns Tasks_TaskInfo Operation successful. Returning a TaskInfo[] object.
     * @throws ApiError
     */
    public getScheduledtasks(
        isHidden?: boolean | null,
        isEnabled?: boolean | null,
    ): CancelablePromise<Array<Tasks_TaskInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ScheduledTasks',
            query: {
                'IsHidden': isHidden,
                'IsEnabled': isEnabled,
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
     * Gets a scheduled task, by Id
     * Requires authentication as administrator
     * @param id
     * @returns Tasks_TaskInfo Operation successful. Returning a TaskInfo object.
     * @throws ApiError
     */
    public getScheduledtasksById(
        id: string,
    ): CancelablePromise<Tasks_TaskInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ScheduledTasks/{Id}',
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
     * Starts a scheduled task
     * Requires authentication as administrator
     * @param id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postScheduledtasksRunningById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ScheduledTasks/Running/{Id}',
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
     * Stops a scheduled task
     * Requires authentication as administrator
     * @param id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteScheduledtasksRunningById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ScheduledTasks/Running/{Id}',
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
     * Updates the triggers for a scheduled task
     * Requires authentication as administrator
     * @param id
     * @param requestBody List`1:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postScheduledtasksByIdTriggers(
        id: string,
        requestBody: Array<Tasks_TaskTriggerInfo>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ScheduledTasks/{Id}/Triggers',
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
}
