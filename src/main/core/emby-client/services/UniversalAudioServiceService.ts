/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UniversalAudioServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets an audio stream
     * Requires authentication as user
     * @param id Item Id
     * @param container
     * @param deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getAudioByIdByContainer(
        id: string,
        container: string,
        deviceId?: string,
        startTimeTicks?: number | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Audio/{Id}/universal.{Container}',
            path: {
                'Id': id,
                'Container': container,
            },
            query: {
                'DeviceId': deviceId,
                'StartTimeTicks': startTimeTicks,
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
     * Gets an audio stream
     * Requires authentication as user
     * @param id Item Id
     * @param container
     * @param deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headAudioByIdByContainer(
        id: string,
        container: string,
        deviceId?: string,
        startTimeTicks?: number | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Audio/{Id}/universal.{Container}',
            path: {
                'Id': id,
                'Container': container,
            },
            query: {
                'DeviceId': deviceId,
                'StartTimeTicks': startTimeTicks,
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
     * Gets an audio stream
     * Requires authentication as user
     * @param id Item Id
     * @param deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getAudioByIdUniversal(
        id: string,
        deviceId?: string,
        startTimeTicks?: number | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Audio/{Id}/universal',
            path: {
                'Id': id,
            },
            query: {
                'DeviceId': deviceId,
                'StartTimeTicks': startTimeTicks,
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
     * Gets an audio stream
     * Requires authentication as user
     * @param id Item Id
     * @param deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headAudioByIdUniversal(
        id: string,
        deviceId?: string,
        startTimeTicks?: number | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Audio/{Id}/universal',
            path: {
                'Id': id,
            },
            query: {
                'DeviceId': deviceId,
                'StartTimeTicks': startTimeTicks,
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
