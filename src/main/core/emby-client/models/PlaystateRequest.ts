/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PlaystateRequest = {
    Command?: PlaystateRequest.Command;
    SeekPositionTicks?: number | null;
    ControllingUserId?: string;
};
export namespace PlaystateRequest {
    export enum Command {
        STOP = 'Stop',
        PAUSE = 'Pause',
        UNPAUSE = 'Unpause',
        NEXT_TRACK = 'NextTrack',
        PREVIOUS_TRACK = 'PreviousTrack',
        SEEK = 'Seek',
        REWIND = 'Rewind',
        FAST_FORWARD = 'FastForward',
        PLAY_PAUSE = 'PlayPause',
    }
}

