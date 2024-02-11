/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tasks_TaskResult } from './Tasks_TaskResult';
import type { Tasks_TaskTriggerInfo } from './Tasks_TaskTriggerInfo';
export type Tasks_TaskInfo = {
    Name?: string;
    State?: Tasks_TaskInfo.State;
    CurrentProgressPercentage?: number | null;
    Id?: string;
    LastExecutionResult?: Tasks_TaskResult;
    Triggers?: Array<Tasks_TaskTriggerInfo>;
    Description?: string;
    Category?: string;
    IsHidden?: boolean;
    Key?: string;
};
export namespace Tasks_TaskInfo {
    export enum State {
        IDLE = 'Idle',
        CANCELLING = 'Cancelling',
        RUNNING = 'Running',
    }
}

