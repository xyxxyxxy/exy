/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Tasks_TaskResult = {
    StartTimeUtc?: string;
    EndTimeUtc?: string;
    Status?: Tasks_TaskResult.Status;
    Name?: string;
    Key?: string;
    Id?: string;
    ErrorMessage?: string;
    LongErrorMessage?: string;
};
export namespace Tasks_TaskResult {
    export enum Status {
        COMPLETED = 'Completed',
        FAILED = 'Failed',
        CANCELLED = 'Cancelled',
        ABORTED = 'Aborted',
    }
}

