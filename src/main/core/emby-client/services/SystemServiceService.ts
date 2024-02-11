/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogFile } from '../models/LogFile';
import type { Net_EndPointInfo } from '../models/Net_EndPointInfo';
import type { PublicSystemInfo } from '../models/PublicSystemInfo';
import type { SystemInfo } from '../models/SystemInfo';
import type { WakeOnLanInfo } from '../models/WakeOnLanInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SystemServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * No authentication required
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSystemPing(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/System/Ping',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public getSystemPing(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Ping',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets wake on lan information
     * Requires authentication as user
     * @returns WakeOnLanInfo Operation successful. Returning a WakeOnLanInfo[] object.
     * @throws ApiError
     */
    public getSystemWakeonlaninfo(): CancelablePromise<Array<WakeOnLanInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/WakeOnLanInfo',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a list of available server log files
     * Requires authentication as administrator
     * @returns LogFile Operation successful. Returning a LogFile[] object.
     * @throws ApiError
     */
    public getSystemLogs(): CancelablePromise<Array<LogFile>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Logs',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets information about the server
     * Requires authentication as user
     * @returns SystemInfo Operation successful. Returning a SystemInfo object.
     * @throws ApiError
     */
    public getSystemInfo(): CancelablePromise<SystemInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Info',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Restarts the application, if needed
     * Requires authentication as administrator
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postSystemRestart(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/System/Restart',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Shuts down the application
     * Requires authentication as administrator
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postSystemShutdown(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/System/Shutdown',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets information about the request endpoint
     * Requires authentication as user
     * @returns Net_EndPointInfo Operation successful. Returning a EndPointInfo object.
     * @throws ApiError
     */
    public getSystemEndpoint(): CancelablePromise<Net_EndPointInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Endpoint',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a log file
     * Requires authentication as administrator
     * @param name The log file name.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getSystemLogsLog(
        name: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Logs/Log',
            query: {
                'Name': name,
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
     * Gets public information about the server
     * No authentication required
     * @returns PublicSystemInfo Operation successful. Returning a PublicSystemInfo object.
     * @throws ApiError
     */
    public getSystemInfoPublic(): CancelablePromise<PublicSystemInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Info/Public',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
