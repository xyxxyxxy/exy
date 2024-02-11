/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Updates_InstallationInfo = {
    Id?: string;
    Name?: string;
    AssemblyGuid?: string;
    Version?: string;
    UpdateClass?: Updates_InstallationInfo.UpdateClass;
    PercentComplete?: number | null;
};
export namespace Updates_InstallationInfo {
    export enum UpdateClass {
        RELEASE = 'Release',
        BETA = 'Beta',
        DEV = 'Dev',
    }
}

