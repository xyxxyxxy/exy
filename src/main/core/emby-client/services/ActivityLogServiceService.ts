/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryResult_ActivityLogEntry } from '../models/QueryResult_ActivityLogEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActivityLogServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets activity log entries
     * Requires authentication as administrator
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param minDate Optional. The minimum date. Format = ISO
     * @returns QueryResult_ActivityLogEntry Operation successful. Returning a QueryResult<ActivityLogEntry> object.
     * @throws ApiError
     */
    public getSystemActivitylogEntries(
        startIndex?: number | null,
        limit?: number | null,
        minDate?: string,
    ): CancelablePromise<QueryResult_ActivityLogEntry> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/ActivityLog/Entries',
            query: {
                'StartIndex': startIndex,
                'Limit': limit,
                'MinDate': minDate,
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
