/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Emby_Notifications_Api_Notification = {
    Id?: string;
    UserId?: string;
    Date?: string;
    IsRead?: boolean;
    Name?: string;
    Description?: string;
    Url?: string;
    Level?: Emby_Notifications_Api_Notification.Level;
};
export namespace Emby_Notifications_Api_Notification {
    export enum Level {
        NORMAL = 'Normal',
        WARNING = 'Warning',
        ERROR = 'Error',
    }
}

