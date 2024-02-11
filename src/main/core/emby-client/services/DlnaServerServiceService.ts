/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DlnaServerServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets dlna server info
     * No authentication required
     * @param uuId Server UuId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaByUuidDescriptionXml(
        uuId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/{UuId}/description.xml',
            path: {
                'UuId': uuId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets dlna server info
     * No authentication required
     * @param uuId Server UuId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaByUuidDescription(
        uuId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/{UuId}/description',
            path: {
                'UuId': uuId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a server icon
     * No authentication required
     * @param filename The icon filename
     * @param uuId Server UuId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaIconsByFilename(
        filename: string,
        uuId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/icons/{Filename}',
            path: {
                'Filename': filename,
            },
            query: {
                'UuId': uuId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets dlna content directory xml
     * No authentication required
     * @param uuId Server UuId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaByUuidContentdirectoryContentdirectoryXml(
        uuId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/{UuId}/contentdirectory/contentdirectory.xml',
            path: {
                'UuId': uuId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets dlna content directory xml
     * No authentication required
     * @param uuId Server UuId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaByUuidContentdirectoryContentdirectory(
        uuId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/{UuId}/contentdirectory/contentdirectory',
            path: {
                'UuId': uuId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets dlna connection manager xml
     * No authentication required
     * @param uuId Server UuId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaByUuidConnectionmanagerConnectionmanagerXml(
        uuId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/{UuId}/connectionmanager/connectionmanager.xml',
            path: {
                'UuId': uuId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets dlna connection manager xml
     * No authentication required
     * @param uuId Server UuId
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaByUuidConnectionmanagerConnectionmanager(
        uuId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/{UuId}/connectionmanager/connectionmanager',
            path: {
                'UuId': uuId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Processes a control request
     * No authentication required
     * @param uuId Server UuId
     * @param requestBody Binary stream
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postDlnaByUuidContentdirectoryControl(
        uuId: string,
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Dlna/{UuId}/contentdirectory/control',
            path: {
                'UuId': uuId,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Processes a control request
     * No authentication required
     * @param uuId Server UuId
     * @param requestBody Binary stream
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postDlnaByUuidConnectionmanagerControl(
        uuId: string,
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Dlna/{UuId}/connectionmanager/control',
            path: {
                'UuId': uuId,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a server icon
     * No authentication required
     * @param uuId Server UuId
     * @param filename The icon filename
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getDlnaByUuidIconsByFilename(
        uuId: string,
        filename: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/{UuId}/icons/{Filename}',
            path: {
                'UuId': uuId,
                'Filename': filename,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
