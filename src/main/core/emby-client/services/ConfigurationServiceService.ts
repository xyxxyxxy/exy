/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration_ServerConfiguration } from '../models/Configuration_ServerConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConfigurationServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets application configuration
     * Requires authentication as user
     * @returns Configuration_ServerConfiguration Operation successful. Returning a ServerConfiguration object.
     * @throws ApiError
     */
    public getSystemConfiguration(): CancelablePromise<Configuration_ServerConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Configuration',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Updates application configuration
     * Requires authentication as administrator
     * @param requestBody ServerConfiguration:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSystemConfiguration(
        requestBody: Configuration_ServerConfiguration,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/System/Configuration',
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
     * Gets a named configuration
     * Requires authentication as user
     * @param key Key
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getSystemConfigurationByKey(
        key: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/System/Configuration/{Key}',
            path: {
                'Key': key,
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
     * Updates named configuration
     * Requires authentication as administrator
     * @param key Key
     * @param requestBody Binary stream
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSystemConfigurationByKey(
        key: string,
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/System/Configuration/{Key}',
            path: {
                'Key': key,
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
