/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LiveTv_LiveTvServiceInfo = {
    Name?: string;
    HomePageUrl?: string;
    Status?: LiveTv_LiveTvServiceInfo.Status;
    StatusMessage?: string;
    Version?: string;
    HasUpdateAvailable?: boolean;
    IsVisible?: boolean;
    Tuners?: Array<string>;
};
export namespace LiveTv_LiveTvServiceInfo {
    export enum Status {
        OK = 'Ok',
        UNAVAILABLE = 'Unavailable',
    }
}

