/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultDirectoryBrowserInfo } from '../models/DefaultDirectoryBrowserInfo';
import type { IO_FileSystemEntryInfo } from '../models/IO_FileSystemEntryInfo';
import type { ValidatePath } from '../models/ValidatePath';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the contents of a given directory in the file system
     * Requires authentication as administrator
     * @param path
     * @param requestBody ValidatePath
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postEnvironmentValidatepath(
        path: string,
        requestBody: ValidatePath,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Environment/ValidatePath',
            query: {
                'Path': path,
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
    /**
     * Gets the parent path of a given path
     * Requires authentication as administrator
     * @returns DefaultDirectoryBrowserInfo Operation successful. Returning a DefaultDirectoryBrowserInfo object.
     * @throws ApiError
     */
    public getEnvironmentDefaultdirectorybrowser(): CancelablePromise<DefaultDirectoryBrowserInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Environment/DefaultDirectoryBrowser',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets the contents of a given directory in the file system
     * Requires authentication as administrator
     * @param path
     * @param includeFiles An optional filter to include or exclude files from the results. true/false
     * @param includeDirectories An optional filter to include or exclude folders from the results. true/false
     * @returns IO_FileSystemEntryInfo Operation successful. Returning a List<FileSystemEntryInfo> object.
     * @throws ApiError
     */
    public getEnvironmentDirectorycontents(
        path: string,
        includeFiles?: boolean,
        includeDirectories?: boolean,
    ): CancelablePromise<Array<IO_FileSystemEntryInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Environment/DirectoryContents',
            query: {
                'Path': path,
                'IncludeFiles': includeFiles,
                'IncludeDirectories': includeDirectories,
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
     * Gets shares from a network device
     * Requires authentication as administrator
     * @param path
     * @returns IO_FileSystemEntryInfo Operation successful. Returning a List<FileSystemEntryInfo> object.
     * @throws ApiError
     */
    public getEnvironmentNetworkshares(
        path: string,
    ): CancelablePromise<Array<IO_FileSystemEntryInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Environment/NetworkShares',
            query: {
                'Path': path,
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
     * Gets available drives from the server's file system
     * Requires authentication as administrator
     * @returns IO_FileSystemEntryInfo Operation successful. Returning a List<FileSystemEntryInfo> object.
     * @throws ApiError
     */
    public getEnvironmentDrives(): CancelablePromise<Array<IO_FileSystemEntryInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Environment/Drives',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a list of devices on the network
     * Requires authentication as administrator
     * @returns IO_FileSystemEntryInfo Operation successful. Returning a List<FileSystemEntryInfo> object.
     * @throws ApiError
     */
    public getEnvironmentNetworkdevices(): CancelablePromise<Array<IO_FileSystemEntryInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Environment/NetworkDevices',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets the parent path of a given path
     * Requires authentication as administrator
     * @param path
     * @returns string Operation successful. Returning a String object.
     * @throws ApiError
     */
    public getEnvironmentParentpath(
        path: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Environment/ParentPath',
            query: {
                'Path': path,
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
