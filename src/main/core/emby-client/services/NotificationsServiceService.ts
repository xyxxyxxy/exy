/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Emby_Notifications_Api_NotificationResult } from '../models/Emby_Notifications_Api_NotificationResult';
import type { Emby_Notifications_Api_NotificationsSummary } from '../models/Emby_Notifications_Api_NotificationsSummary';
import type { NameIdPair } from '../models/NameIdPair';
import type { Notifications_NotificationTypeInfo } from '../models/Notifications_NotificationTypeInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotificationsServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets notification types
     * Requires authentication as user
     * @returns Notifications_NotificationTypeInfo Operation successful. Returning a List<NotificationTypeInfo> object.
     * @throws ApiError
     */
    public getNotificationsTypes(): CancelablePromise<Array<Notifications_NotificationTypeInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Notifications/Types',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets notification types
     * Requires authentication as user
     * @returns NameIdPair Operation successful. Returning a List<NameIdPair> object.
     * @throws ApiError
     */
    public getNotificationsServices(): CancelablePromise<Array<NameIdPair>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Notifications/Services',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Sends a notification to all admin users
     * Requires authentication as user
     * @param name The notification's name
     * @param description The notification's description
     * @param imageUrl The notification's image url
     * @param url The notification's info url
     * @param level The notification level
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postNotificationsAdmin(
        name: string,
        description: string,
        imageUrl?: string,
        url?: string,
        level?: 'Normal' | 'Warning' | 'Error',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Notifications/Admin',
            query: {
                'Name': name,
                'Description': description,
                'ImageUrl': imageUrl,
                'Url': url,
                'Level': level,
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
     * Gets notifications
     * Requires authentication as user
     * @param userId User Id
     * @param isRead An optional filter by IsRead
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @returns Emby_Notifications_Api_NotificationResult Operation successful. Returning a NotificationResult object.
     * @throws ApiError
     */
    public getNotificationsByUserid(
        userId: string,
        isRead?: boolean | null,
        startIndex?: number | null,
        limit?: number | null,
    ): CancelablePromise<Emby_Notifications_Api_NotificationResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Notifications/{UserId}',
            path: {
                'UserId': userId,
            },
            query: {
                'IsRead': isRead,
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
     * Gets a notification summary for a user
     * Requires authentication as user
     * @param userId User Id
     * @returns Emby_Notifications_Api_NotificationsSummary Operation successful. Returning a NotificationsSummary object.
     * @throws ApiError
     */
    public getNotificationsByUseridSummary(
        userId: string,
    ): CancelablePromise<Emby_Notifications_Api_NotificationsSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Notifications/{UserId}/Summary',
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
     * Marks notifications as read
     * Requires authentication as user
     * @param userId User Id
     * @param ids A list of notification ids, comma delimited
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postNotificationsByUseridRead(
        userId: string,
        ids: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Notifications/{UserId}/Read',
            path: {
                'UserId': userId,
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
     * Marks notifications as unread
     * Requires authentication as user
     * @param userId User Id
     * @param ids A list of notification ids, comma delimited
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postNotificationsByUseridUnread(
        userId: string,
        ids: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Notifications/{UserId}/Unread',
            path: {
                'UserId': userId,
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
