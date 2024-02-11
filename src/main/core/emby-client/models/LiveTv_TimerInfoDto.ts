/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from './BaseItemDto';
export type LiveTv_TimerInfoDto = {
    Status?: LiveTv_TimerInfoDto.Status;
    SeriesTimerId?: string;
    ExternalSeriesTimerId?: string;
    RunTimeTicks?: number | null;
    ProgramInfo?: BaseItemDto;
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
    KeepUntil?: LiveTv_TimerInfoDto.KeepUntil;
};
export namespace LiveTv_TimerInfoDto {
    export enum Status {
        NEW = 'New',
        IN_PROGRESS = 'InProgress',
        COMPLETED = 'Completed',
        CANCELLED = 'Cancelled',
        CONFLICTED_OK = 'ConflictedOk',
        CONFLICTED_NOT_OK = 'ConflictedNotOk',
        ERROR = 'Error',
    }
    export enum KeepUntil {
        UNTIL_DELETED = 'UntilDeleted',
        UNTIL_SPACE_NEEDED = 'UntilSpaceNeeded',
        UNTIL_WATCHED = 'UntilWatched',
        UNTIL_DATE = 'UntilDate',
    }
}

