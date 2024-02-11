/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from './BaseItemDto';
import type { Sync_Model_ItemFileInfo } from './Sync_Model_ItemFileInfo';
export type Sync_Model_SyncedItem = {
    ServerId?: string;
    SyncJobId?: number;
    SyncJobName?: string;
    SyncJobDateCreated?: string;
    SyncJobItemId?: number;
    OriginalFileName?: string;
    Item?: BaseItemDto;
    UserId?: string;
    AdditionalFiles?: Array<Sync_Model_ItemFileInfo>;
};

