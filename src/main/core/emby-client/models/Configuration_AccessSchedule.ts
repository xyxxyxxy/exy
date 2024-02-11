/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Configuration_AccessSchedule = {
    DayOfWeek?: Configuration_AccessSchedule.DayOfWeek;
    StartHour?: number;
    EndHour?: number;
};
export namespace Configuration_AccessSchedule {
    export enum DayOfWeek {
        SUNDAY = 'Sunday',
        MONDAY = 'Monday',
        TUESDAY = 'Tuesday',
        WEDNESDAY = 'Wednesday',
        THURSDAY = 'Thursday',
        FRIDAY = 'Friday',
        SATURDAY = 'Saturday',
        EVERYDAY = 'Everyday',
        WEEKDAY = 'Weekday',
        WEEKEND = 'Weekend',
    }
}

