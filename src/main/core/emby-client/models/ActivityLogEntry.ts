/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActivityLogEntry = {
    Id?: number;
    Name?: string;
    Overview?: string;
    ShortOverview?: string;
    Type?: string;
    ItemId?: string;
    Date?: string;
    UserId?: string;
    UserPrimaryImageTag?: string;
    Severity?: ActivityLogEntry.Severity;
};
export namespace ActivityLogEntry {
    export enum Severity {
        INFO = 'Info',
        DEBUG = 'Debug',
        WARN = 'Warn',
        ERROR = 'Error',
        FATAL = 'Fatal',
    }
}

