/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Emby_Notifications_Api_NotificationsSummary = {
    UnreadCount?: number;
    MaxUnreadNotificationLevel?: Emby_Notifications_Api_NotificationsSummary.MaxUnreadNotificationLevel;
};
export namespace Emby_Notifications_Api_NotificationsSummary {
    export enum MaxUnreadNotificationLevel {
        NORMAL = 'Normal',
        WARNING = 'Warning',
        ERROR = 'Error',
    }
}

