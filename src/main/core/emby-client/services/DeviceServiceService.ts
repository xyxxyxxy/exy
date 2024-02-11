/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Devices_ContentUploadHistory } from '../models/Devices_ContentUploadHistory';
import type { Devices_DeviceInfo } from '../models/Devices_DeviceInfo';
import type { Devices_DeviceOptions } from '../models/Devices_DeviceOptions';
import type { QueryResult_Devices_DeviceInfo } from '../models/QueryResult_Devices_DeviceInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeviceServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets all devices
     * Requires authentication as administrator
     * @returns QueryResult_Devices_DeviceInfo Operation successful. Returning a QueryResult<DeviceInfo> object.
     * @throws ApiError
     */
    public getDevices(): CancelablePromise<QueryResult_Devices_DeviceInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Devices',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Deletes a device
     * No authentication required
     * @param id Device Id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public deleteDevices(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Devices',
            query: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Updates device options
     * Requires authentication as administrator
     * @param requestBody DeviceOptions:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postDevicesOptions(
        requestBody: Devices_DeviceOptions,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Devices/Options',
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
     * Gets options for a device
     * Requires authentication as administrator
     * @param id Device Id
     * @returns Devices_DeviceOptions Operation successful. Returning a DeviceOptions object.
     * @throws ApiError
     */
    public getDevicesOptions(
        id: string,
    ): CancelablePromise<Devices_DeviceOptions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Devices/Options',
            query: {
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
     * Gets info for a device
     * Requires authentication as administrator
     * @param id Device Id
     * @returns Devices_DeviceInfo Operation successful. Returning a DeviceInfo object.
     * @throws ApiError
     */
    public getDevicesInfo(
        id: string,
    ): CancelablePromise<Devices_DeviceInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Devices/Info',
            query: {
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
     * Gets camera upload history for a device
     * Requires authentication as user
     * @param deviceId Device Id
     * @returns Devices_ContentUploadHistory Operation successful. Returning a ContentUploadHistory object.
     * @throws ApiError
     */
    public getDevicesCamerauploads(
        deviceId: string,
    ): CancelablePromise<Devices_ContentUploadHistory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Devices/CameraUploads',
            query: {
                'DeviceId': deviceId,
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
     * Uploads content
     * Requires authentication as user
     * @param deviceId Device Id
     * @param album Album
     * @param name Name
     * @param id Id
     * @param requestBody Binary stream
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postDevicesCamerauploads(
        deviceId: string,
        album: string,
        name: string,
        id: string,
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Devices/CameraUploads',
            query: {
                'DeviceId': deviceId,
                'Album': album,
                'Name': name,
                'Id': id,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
