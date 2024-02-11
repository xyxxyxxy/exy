/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaInfo_LiveStreamRequest } from '../models/MediaInfo_LiveStreamRequest';
import type { MediaInfo_LiveStreamResponse } from '../models/MediaInfo_LiveStreamResponse';
import type { MediaInfo_PlaybackInfoRequest } from '../models/MediaInfo_PlaybackInfoRequest';
import type { MediaInfo_PlaybackInfoResponse } from '../models/MediaInfo_PlaybackInfoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MediaInfoServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Opens a media source
     * Requires authentication as user
     * @param requestBody LiveStreamRequest:
     * @returns MediaInfo_LiveStreamResponse Operation successful. Returning a LiveStreamResponse object.
     * @throws ApiError
     */
    public postLivestreamsOpen(
        requestBody: MediaInfo_LiveStreamRequest,
    ): CancelablePromise<MediaInfo_LiveStreamResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveStreams/Open',
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
     * Closes a media source
     * Requires authentication as user
     * @param liveStreamId LiveStreamId
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLivestreamsClose(
        liveStreamId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveStreams/Close',
            query: {
                'LiveStreamId': liveStreamId,
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
     * Closes a media source
     * Requires authentication as user
     * @param liveStreamId LiveStreamId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postLivestreamsMediainfo(
        liveStreamId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveStreams/MediaInfo',
            query: {
                'LiveStreamId': liveStreamId,
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
     * Requires authentication as user
     * @param size Size
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getPlaybackBitratetest(
        size: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Playback/BitrateTest',
            query: {
                'Size': size,
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
     * Gets live playback media info for an item
     * Requires authentication as user
     * @param id Item Id
     * @param userId User Id
     * @returns MediaInfo_PlaybackInfoResponse Operation successful. Returning a PlaybackInfoResponse object.
     * @throws ApiError
     */
    public getItemsByIdPlaybackinfo(
        id: string,
        userId: string,
    ): CancelablePromise<MediaInfo_PlaybackInfoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/PlaybackInfo',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
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
     * Gets live playback media info for an item
     * Requires authentication as user
     * @param id
     * @param requestBody PlaybackInfoRequest:
     * @returns MediaInfo_PlaybackInfoResponse Operation successful. Returning a PlaybackInfoResponse object.
     * @throws ApiError
     */
    public postItemsByIdPlaybackinfo(
        id: string,
        requestBody: MediaInfo_PlaybackInfoRequest,
    ): CancelablePromise<MediaInfo_PlaybackInfoResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{Id}/PlaybackInfo',
            path: {
                'Id': id,
            },
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
}
