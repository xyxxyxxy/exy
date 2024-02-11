/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Plugins_PluginInfo } from '../models/Plugins_PluginInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PluginServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of currently installed plugins
     * Requires authentication as user
     * @returns Plugins_PluginInfo Operation successful. Returning a PluginInfo[] object.
     * @throws ApiError
     */
    public getPlugins(): CancelablePromise<Array<Plugins_PluginInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Plugins',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Uninstalls a plugin
     * Requires authentication as administrator
     * @param id Plugin Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deletePluginsById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Plugins/{Id}',
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
     * Gets a plugin thumb image
     * No authentication required
     * @param id Plugin Id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getPluginsByIdThumb(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Plugins/{Id}/Thumb',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a plugin's configuration
     * Requires authentication as user
     * @param id Plugin Id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getPluginsByIdConfiguration(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Plugins/{Id}/Configuration',
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
     * Updates a plugin's configuration
     * Requires authentication as user
     * @param id Plugin Id
     * @param requestBody Binary stream
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postPluginsByIdConfiguration(
        id: string,
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Plugins/{Id}/Configuration',
            path: {
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
