/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LiveTv_SeriesTimerInfoDto = {
    RecordAnyTime?: boolean;
    SkipEpisodesInLibrary?: boolean;
    RecordAnyChannel?: boolean;
    KeepUpTo?: number;
    RecordNewOnly?: boolean;
    Days?: Array<'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'>;
    DayPattern?: LiveTv_SeriesTimerInfoDto.DayPattern;
    ImageTags?: Record<string, string>;
    ParentThumbItemId?: string;
    ParentThumbImageTag?: string;
    ParentPrimaryImageItemId?: string;
    ParentPrimaryImageTag?: string;
    Id?: string;
    Type?: string;
    ServerId?: string;
    ExternalId?: string;
    ChannelId?: string;
    ExternalChannelId?: string;
    ChannelName?: string;
    ChannelPrimaryImageTag?: string;
    ProgramId?: string;
    ExternalProgramId?: string;
    Name?: string;
    Overview?: string;
    StartDate?: string;
    EndDate?: string;
    ServiceName?: string;
    Priority?: number;
    PrePaddingSeconds?: number;
    PostPaddingSeconds?: number;
    IsPrePaddingRequired?: boolean;
    ParentBackdropItemId?: string;
    ParentBackdropImageTags?: Array<string>;
    IsPostPaddingRequired?: boolean;
    KeepUntil?: LiveTv_SeriesTimerInfoDto.KeepUntil;
};
export namespace LiveTv_SeriesTimerInfoDto {
    export enum DayPattern {
        DAILY = 'Daily',
        WEEKDAYS = 'Weekdays',
        WEEKENDS = 'Weekends',
    }
    export enum KeepUntil {
        UNTIL_DELETED = 'UntilDeleted',
        UNTIL_SPACE_NEEDED = 'UntilSpaceNeeded',
        UNTIL_WATCHED = 'UntilWatched',
        UNTIL_DATE = 'UntilDate',
    }
}

