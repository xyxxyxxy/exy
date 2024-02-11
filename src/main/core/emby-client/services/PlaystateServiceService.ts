/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlaybackProgressInfo } from '../models/PlaybackProgressInfo';
import type { PlaybackStartInfo } from '../models/PlaybackStartInfo';
import type { PlaybackStopInfo } from '../models/PlaybackStopInfo';
import type { UserItemDataDto } from '../models/UserItemDataDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PlaystateServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Reports playback has started within a session
     * Requires authentication as user
     * @param requestBody PlaybackStartInfo:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsPlaying(
        requestBody: PlaybackStartInfo,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/Playing',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Reports playback progress within a session
     * Requires authentication as user
     * @param requestBody PlaybackProgressInfo:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsPlayingProgress(
        requestBody: PlaybackProgressInfo,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/Playing/Progress',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Pings a playback session
     * Requires authentication as user
     * @param playSessionId
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsPlayingPing(
        playSessionId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/Playing/Ping',
            query: {
                'PlaySessionId': playSessionId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Reports playback has stopped within a session
     * Requires authentication as user
     * @param requestBody PlaybackStopInfo:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsPlayingStopped(
        requestBody: PlaybackStopInfo,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/Playing/Stopped',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Marks an item as played
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @param datePlayed The date the item was played (if any). Format = yyyyMMddHHmmss
     * @returns UserItemDataDto Operation successful. Returning a UserItemDataDto object.
     * @throws ApiError
     */
    public postUsersByUseridPlayeditemsById(
        userId: string,
        id: string,
        datePlayed?: string,
    ): CancelablePromise<UserItemDataDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{UserId}/PlayedItems/{Id}',
            path: {
                'UserId': userId,
                'Id': id,
            },
            query: {
                'DatePlayed': datePlayed,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Marks an item as unplayed
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @returns UserItemDataDto Operation successful. Returning a UserItemDataDto object.
     * @throws ApiError
     */
    public deleteUsersByUseridPlayeditemsById(
        userId: string,
        id: string,
    ): CancelablePromise<UserItemDataDto> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{UserId}/PlayedItems/{Id}',
            path: {
                'UserId': userId,
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Reports that a user has begun playing an item
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @param mediaSourceId The id of the MediaSource
     * @param canSeek Indicates if the client can seek
     * @param audioStreamIndex
     * @param subtitleStreamIndex
     * @param playMethod
     * @param liveStreamId
     * @param playSessionId
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByUseridPlayingitemsById(
        userId: string,
        id: string,
        mediaSourceId: string,
        canSeek?: boolean,
        audioStreamIndex?: number | null,
        subtitleStreamIndex?: number | null,
        playMethod?: 'Transcode' | 'DirectStream' | 'DirectPlay',
        liveStreamId?: string,
        playSessionId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{UserId}/PlayingItems/{Id}',
            path: {
                'UserId': userId,
                'Id': id,
            },
            query: {
                'MediaSourceId': mediaSourceId,
                'CanSeek': canSeek,
                'AudioStreamIndex': audioStreamIndex,
                'SubtitleStreamIndex': subtitleStreamIndex,
                'PlayMethod': playMethod,
                'LiveStreamId': liveStreamId,
                'PlaySessionId': playSessionId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Reports that a user has stopped playing an item
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @param mediaSourceId The id of the MediaSource
     * @param nextMediaType The next media type that will play
     * @param positionTicks Optional. The position, in ticks, where playback stopped. 1 tick = 10000 ms
     * @param liveStreamId
     * @param playSessionId
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteUsersByUseridPlayingitemsById(
        userId: string,
        id: string,
        mediaSourceId: string,
        nextMediaType: string,
        positionTicks?: number | null,
        liveStreamId?: string,
        playSessionId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{UserId}/PlayingItems/{Id}',
            path: {
                'UserId': userId,
                'Id': id,
            },
            query: {
                'MediaSourceId': mediaSourceId,
                'NextMediaType': nextMediaType,
                'PositionTicks': positionTicks,
                'LiveStreamId': liveStreamId,
                'PlaySessionId': playSessionId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Reports a user's playback progress
     * Requires authentication as user
     * @param userId User Id
     * @param id Item Id
     * @param mediaSourceId The id of the MediaSource
     * @param positionTicks Optional. The current position, in ticks. 1 tick = 10000 ms
     * @param isPaused Indicates if the player is paused.
     * @param isMuted Indicates if the player is muted.
     * @param audioStreamIndex
     * @param subtitleStreamIndex
     * @param volumeLevel Scale of 0-100
     * @param playMethod
     * @param liveStreamId
     * @param playSessionId
     * @param repeatMode
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByUseridPlayingitemsByIdProgress(
        userId: string,
        id: string,
        mediaSourceId: string,
        positionTicks?: number | null,
        isPaused?: boolean,
        isMuted?: boolean,
        audioStreamIndex?: number | null,
        subtitleStreamIndex?: number | null,
        volumeLevel?: number | null,
        playMethod?: 'Transcode' | 'DirectStream' | 'DirectPlay',
        liveStreamId?: string,
        playSessionId?: string,
        repeatMode?: 'RepeatNone' | 'RepeatAll' | 'RepeatOne',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{UserId}/PlayingItems/{Id}/Progress',
            path: {
                'UserId': userId,
                'Id': id,
            },
            query: {
                'MediaSourceId': mediaSourceId,
                'PositionTicks': positionTicks,
                'IsPaused': isPaused,
                'IsMuted': isMuted,
                'AudioStreamIndex': audioStreamIndex,
                'SubtitleStreamIndex': subtitleStreamIndex,
                'VolumeLevel': volumeLevel,
                'PlayMethod': playMethod,
                'LiveStreamId': liveStreamId,
                'PlaySessionId': playSessionId,
                'RepeatMode': repeatMode,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
