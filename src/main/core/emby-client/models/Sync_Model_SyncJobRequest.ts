/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Sync_Model_SyncJobRequest = {
    TargetId?: string;
    ItemIds?: Array<string>;
    Category?: Sync_Model_SyncJobRequest.Category;
    ParentId?: string;
    Quality?: string;
    Profile?: string;
    Name?: string;
    UserId?: string;
    UnwatchedOnly?: boolean;
    SyncNewContent?: boolean;
    ItemLimit?: number | null;
    Bitrate?: number | null;
};
export namespace Sync_Model_SyncJobRequest {
    export enum Category {
        LATEST = 'Latest',
        NEXT_UP = 'NextUp',
        RESUME = 'Resume',
    }
}

