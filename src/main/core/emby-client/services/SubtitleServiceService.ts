/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemoteSubtitleInfo } from '../models/RemoteSubtitleInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubtitleServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Requires authentication as user
     * @param id Item Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public getProvidersSubtitlesSubtitlesById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Providers/Subtitles/Subtitles/{Id}',
            path: {
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
     * Deletes an external subtitle file
     * Requires authentication as user
     * @param id Item Id
     * @param index The subtitle stream index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public deleteVideosByIdSubtitlesByIndex(
        id: string,
        index: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Videos/{Id}/Subtitles/{Index}',
            path: {
                'Id': id,
                'Index': index,
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
     * @param id Item Id
     * @param language Language
     * @param isPerfectMatch IsPerfectMatch
     * @param isForced IsForced
     * @returns RemoteSubtitleInfo Operation successful. Returning a RemoteSubtitleInfo[] object.
     * @throws ApiError
     */
    public getItemsByIdRemotesearchSubtitlesByLanguage(
        id: string,
        language: string,
        isPerfectMatch?: boolean | null,
        isForced?: boolean | null,
    ): CancelablePromise<Array<RemoteSubtitleInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/RemoteSearch/Subtitles/{Language}',
            path: {
                'Id': id,
                'Language': language,
            },
            query: {
                'IsPerfectMatch': isPerfectMatch,
                'IsForced': isForced,
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
     * @param id Item Id
     * @param subtitleId SubtitleId
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsByIdRemotesearchSubtitlesBySubtitleid(
        id: string,
        subtitleId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{Id}/RemoteSearch/Subtitles/{SubtitleId}',
            path: {
                'Id': id,
                'SubtitleId': subtitleId,
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
     * Gets subtitles in a specified format.
     * No authentication required
     * @param id Item Id
     * @param mediaSourceId MediaSourceId
     * @param index The subtitle stream index
     * @param format Format
     * @param startPositionTicks StartPositionTicks
     * @param endPositionTicks EndPositionTicks
     * @param copyTimestamps CopyTimestamps
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getVideosByIdByMediasourceidSubtitlesByIndexByFormat(
        id: string,
        mediaSourceId: string,
        index: number,
        format: string,
        startPositionTicks?: number,
        endPositionTicks?: number | null,
        copyTimestamps?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Videos/{Id}/{MediaSourceId}/Subtitles/{Index}/Stream.{Format}',
            path: {
                'Id': id,
                'MediaSourceId': mediaSourceId,
                'Index': index,
                'Format': format,
            },
            query: {
                'StartPositionTicks': startPositionTicks,
                'EndPositionTicks': endPositionTicks,
                'CopyTimestamps': copyTimestamps,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets subtitles in a specified format.
     * No authentication required
     * @param id Item Id
     * @param mediaSourceId MediaSourceId
     * @param index The subtitle stream index
     * @param format Format
     * @param startPositionTicks StartPositionTicks
     * @param endPositionTicks EndPositionTicks
     * @param copyTimestamps CopyTimestamps
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getVideosByIdByMediasourceidSubtitlesByIndexByStartpositionticksByFormat(
        id: string,
        mediaSourceId: string,
        index: number,
        format: string,
        startPositionTicks: number,
        endPositionTicks?: number | null,
        copyTimestamps?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Videos/{Id}/{MediaSourceId}/Subtitles/{Index}/{StartPositionTicks}/Stream.{Format}',
            path: {
                'Id': id,
                'MediaSourceId': mediaSourceId,
                'Index': index,
                'Format': format,
                'StartPositionTicks': startPositionTicks,
            },
            query: {
                'EndPositionTicks': endPositionTicks,
                'CopyTimestamps': copyTimestamps,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
