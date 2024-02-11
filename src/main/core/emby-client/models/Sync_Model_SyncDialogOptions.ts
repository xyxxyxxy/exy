/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Sync_Model_SyncProfileOption } from './Sync_Model_SyncProfileOption';
import type { Sync_Model_SyncQualityOption } from './Sync_Model_SyncQualityOption';
import type { Sync_SyncTarget } from './Sync_SyncTarget';
export type Sync_Model_SyncDialogOptions = {
    Targets?: Array<Sync_SyncTarget>;
    Options?: Array<'Name' | 'Quality' | 'UnwatchedOnly' | 'SyncNewContent' | 'ItemLimit' | 'Profile'>;
    QualityOptions?: Array<Sync_Model_SyncQualityOption>;
    ProfileOptions?: Array<Sync_Model_SyncProfileOption>;
};

