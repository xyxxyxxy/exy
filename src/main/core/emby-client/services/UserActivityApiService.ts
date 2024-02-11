/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { playback_reporting_Api_CustomQuery } from '../models/playback_reporting_Api_CustomQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserActivityApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets types filter list items
     * No authentication required
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsTypeFilterList(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/type_filter_list',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a report of the available activity per hour
     * No authentication required
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsUserActivity(
        days?: number,
        endDate?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/user_activity',
            query: {
                'days': days,
                'end_date': endDate,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Get users
     * No authentication required
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsUserList(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/user_list',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Post a backup for importing
     * No authentication required
     * @param requestBody Binary stream
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUserUsageStatsImportBackup(
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user_usage_stats/import_backup',
            body: requestBody,
            mediaType: 'application/octet-stream',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Loads a backup from a file
     * No authentication required
     * @param backupfile File name of file to load
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsLoadBackup(
        backupfile: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/load_backup',
            query: {
                'backupfile': backupfile,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Saves a backup of the playback report data to the backup path
     * No authentication required
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsSaveBackup(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/save_backup',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets play activity for number of days
     * No authentication required
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @param filter Comma separated list of media types to filter (movies,series)
     * @param dataType Data type to return (count,time)
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsPlayactivity(
        days?: number,
        endDate?: string,
        filter?: string,
        dataType?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/PlayActivity',
            query: {
                'days': days,
                'end_date': endDate,
                'filter': filter,
                'data_type': dataType,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a report of the available activity per hour
     * No authentication required
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @param filter Comma separated list of media types to filter (movies,series)
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsHourlyreport(
        days?: number,
        endDate?: string,
        filter?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/HourlyReport',
            query: {
                'days': days,
                'end_date': endDate,
                'filter': filter,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets duration histogram
     * No authentication required
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @param filter Comma separated list of media types to filter (movies,series)
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsDurationhistogramreport(
        days?: number,
        endDate?: string,
        filter?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/DurationHistogramReport',
            query: {
                'days': days,
                'end_date': endDate,
                'filter': filter,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets TV Shows counts
     * No authentication required
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsTvshowsreport(
        days?: number,
        endDate?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/TvShowsReport',
            query: {
                'days': days,
                'end_date': endDate,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets Movies counts
     * No authentication required
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsMoviesreport(
        days?: number,
        endDate?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/MoviesReport',
            query: {
                'days': days,
                'end_date': endDate,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Submit an SQL query
     * No authentication required
     * @param requestBody CustomQuery
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public postUserUsageStatsSubmitCustomQuery(
        requestBody: playback_reporting_Api_CustomQuery,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user_usage_stats/submit_custom_query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a report of all played items for a user in a date period
     * No authentication required
     * @param userId User Id
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @param filter Comma separated list of media types to filter (movies,series)
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsUserplaylist(
        userId: string,
        days?: number,
        endDate?: string,
        filter?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/UserPlaylist',
            query: {
                'user_id': userId,
                'days': days,
                'end_date': endDate,
                'filter': filter,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets Session Info
     * No authentication required
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsSessionList(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/session_list',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets Resource Usage Info
     * No authentication required
     * @param hours Number of Hours
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsResourceUsage(
        hours?: number,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/resource_usage',
            query: {
                'hours': hours,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a list of process Info
     * No authentication required
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsProcessList(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/process_list',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a breakdown of a usage metric
     * No authentication required
     * @param breakdownType Breakdown type
     * @param days Number of Days
     * @param endDate End date of the report in yyyy-MM-dd format
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsByBreakdowntypeBreakdownreport(
        breakdownType: string,
        days?: number,
        endDate?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/{BreakdownType}/BreakdownReport',
            path: {
                'BreakdownType': breakdownType,
            },
            query: {
                'days': days,
                'end_date': endDate,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Get users
     * No authentication required
     * @param action action to perform
     * @param id user Id to perform the action on
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsUserManageByActionById(
        action: string,
        id: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/user_manage/{Action}/{Id}',
            path: {
                'Action': action,
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets activity for {USER} for {Date} formatted as yyyy-MM-dd
     * No authentication required
     * @param userId User Id
     * @param date UTC DateTime, Format yyyy-MM-dd
     * @param filter Comma separated list of media types to filter (movies,series)
     * @returns any Operation successful. Returning a Object object.
     * @throws ApiError
     */
    public getUserUsageStatsByUseridByDateGetitems(
        userId: string,
        date: string,
        filter?: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user_usage_stats/{UserID}/{Date}/GetItems',
            path: {
                'UserID': userId,
                'Date': date,
            },
            query: {
                'Filter': filter,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
