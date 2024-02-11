/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Sync_Model_SyncedItemProgress = {
    Progress?: number | null;
    Status?: Sync_Model_SyncedItemProgress.Status;
};
export namespace Sync_Model_SyncedItemProgress {
    export enum Status {
        QUEUED = 'Queued',
        CONVERTING = 'Converting',
        READY_TO_TRANSFER = 'ReadyToTransfer',
        TRANSFERRING = 'Transferring',
        SYNCED = 'Synced',
        FAILED = 'Failed',
    }
}

