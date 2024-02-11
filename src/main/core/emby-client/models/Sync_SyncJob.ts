/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Sync_SyncJob = {
    Id?: number;
    TargetId?: string;
    TargetName?: string;
    Quality?: string;
    Bitrate?: number | null;
    Profile?: string;
    Category?: Sync_SyncJob.Category;
    ParentId?: number;
    Progress?: number;
    Name?: string;
    Status?: Sync_SyncJob.Status;
    UserId?: number;
    UnwatchedOnly?: boolean;
    SyncNewContent?: boolean;
    ItemLimit?: number | null;
    RequestedItemIds?: Array<number>;
    DateCreated?: string;
    DateLastModified?: string;
    ItemCount?: number;
    ParentName?: string;
    PrimaryImageItemId?: string;
    PrimaryImageTag?: string;
};
export namespace Sync_SyncJob {
    export enum Category {
        LATEST = 'Latest',
        NEXT_UP = 'NextUp',
        RESUME = 'Resume',
    }
    export enum Status {
        QUEUED = 'Queued',
        CONVERTING = 'Converting',
        READY_TO_TRANSFER = 'ReadyToTransfer',
        TRANSFERRING = 'Transferring',
        COMPLETED = 'Completed',
        COMPLETED_WITH_ERROR = 'CompletedWithError',
        FAILED = 'Failed',
    }
}

