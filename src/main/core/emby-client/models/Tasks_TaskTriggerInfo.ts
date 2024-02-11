/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Tasks_TaskTriggerInfo = {
    Type?: string;
    TimeOfDayTicks?: number | null;
    IntervalTicks?: number | null;
    SystemEvent?: Tasks_TaskTriggerInfo.SystemEvent;
    DayOfWeek?: Tasks_TaskTriggerInfo.DayOfWeek;
    MaxRuntimeTicks?: number | null;
};
export namespace Tasks_TaskTriggerInfo {
    export enum SystemEvent {
        WAKE_FROM_SLEEP = 'WakeFromSleep',
        DISPLAY_CONFIGURATION_CHANGE = 'DisplayConfigurationChange',
    }
    export enum DayOfWeek {
        SUNDAY = 'Sunday',
        MONDAY = 'Monday',
        TUESDAY = 'Tuesday',
        WEDNESDAY = 'Wednesday',
        THURSDAY = 'Thursday',
        FRIDAY = 'Friday',
        SATURDAY = 'Saturday',
    }
}

