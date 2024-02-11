/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Updates_PackageVersionInfo = {
    name?: string;
    guid?: string;
    versionStr?: string;
    classification?: Updates_PackageVersionInfo.classification;
    description?: string;
    requiredVersionStr?: string;
    sourceUrl?: string;
    checksum?: string;
    targetFilename?: string;
    infoUrl?: string;
    runtimes?: string;
};
export namespace Updates_PackageVersionInfo {
    export enum classification {
        RELEASE = 'Release',
        BETA = 'Beta',
        DEV = 'Dev',
    }
}

