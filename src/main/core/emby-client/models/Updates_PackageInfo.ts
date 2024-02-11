/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Updates_PackageVersionInfo } from './Updates_PackageVersionInfo';
export type Updates_PackageInfo = {
    id?: string;
    name?: string;
    shortDescription?: string;
    overview?: string;
    isPremium?: boolean;
    adult?: boolean;
    richDescUrl?: string;
    thumbImage?: string;
    previewImage?: string;
    type?: string;
    targetFilename?: string;
    owner?: string;
    category?: string;
    tileColor?: string;
    featureId?: string;
    regInfo?: string;
    price?: number;
    targetSystem?: Updates_PackageInfo.targetSystem;
    guid?: string;
    totalRatings?: number | null;
    avgRating?: number;
    isRegistered?: boolean;
    expDate?: string;
    versions?: Array<Updates_PackageVersionInfo>;
    enableInAppStore?: boolean;
    installs?: number;
};
export namespace Updates_PackageInfo {
    export enum targetSystem {
        SERVER = 'Server',
        MBTHEATER = 'MBTheater',
        MBCLASSIC = 'MBClassic',
    }
}

