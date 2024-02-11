/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaSourceInfo } from './MediaSourceInfo';
import type { Sync_Model_ItemFileInfo } from './Sync_Model_ItemFileInfo';
export type Sync_Model_SyncJobItem = {
    Id?: number;
    JobId?: number;
    ItemId?: number;
    ItemName?: string;
    MediaSourceId?: string;
    MediaSource?: MediaSourceInfo;
    TargetId?: string;
    OutputPath?: string;
    Status?: Sync_Model_SyncJobItem.Status;
    Progress?: number | null;
    DateCreated?: string;
    PrimaryImageItemId?: number;
    PrimaryImageTag?: string;
    TemporaryPath?: string;
    AdditionalFiles?: Array<Sync_Model_ItemFileInfo>;
    ItemDateModifiedTicks?: number;
};
export namespace Sync_Model_SyncJobItem {
    export enum Status {
        QUEUED = 'Queued',
        CONVERTING = 'Converting',
        READY_TO_TRANSFER = 'ReadyToTransfer',
        TRANSFERRING = 'Transferring',
        SYNCED = 'Synced',
        FAILED = 'Failed',
    }
}

