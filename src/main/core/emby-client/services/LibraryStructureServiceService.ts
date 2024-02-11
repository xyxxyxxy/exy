/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Library_AddMediaPath } from '../models/Library_AddMediaPath';
import type { Library_AddVirtualFolder } from '../models/Library_AddVirtualFolder';
import type { Library_RenameVirtualFolder } from '../models/Library_RenameVirtualFolder';
import type { Library_UpdateLibraryOptions } from '../models/Library_UpdateLibraryOptions';
import type { Library_UpdateMediaPath } from '../models/Library_UpdateMediaPath';
import type { VirtualFolderInfo } from '../models/VirtualFolderInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LibraryStructureServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Requires authentication as administrator
     * @returns VirtualFolderInfo Operation successful. Returning a List<VirtualFolderInfo> object.
     * @throws ApiError
     */
    public getLibraryVirtualfolders(): CancelablePromise<Array<VirtualFolderInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Library/VirtualFolders',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param requestBody AddVirtualFolder
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryVirtualfolders(
        requestBody: Library_AddVirtualFolder,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/VirtualFolders',
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
     * Requires authentication as administrator
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteLibraryVirtualfolders(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Library/VirtualFolders',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param requestBody UpdateLibraryOptions
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryVirtualfoldersLibraryoptions(
        requestBody: Library_UpdateLibraryOptions,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/VirtualFolders/LibraryOptions',
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
     * Requires authentication as administrator
     * @param requestBody RenameVirtualFolder
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryVirtualfoldersName(
        requestBody: Library_RenameVirtualFolder,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/VirtualFolders/Name',
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
     * Requires authentication as administrator
     * @param requestBody AddMediaPath
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryVirtualfoldersPaths(
        requestBody: Library_AddMediaPath,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/VirtualFolders/Paths',
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
     * Requires authentication as administrator
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteLibraryVirtualfoldersPaths(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Library/VirtualFolders/Paths',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param requestBody UpdateMediaPath
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLibraryVirtualfoldersPathsUpdate(
        requestBody: Library_UpdateMediaPath,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Library/VirtualFolders/Paths/Update',
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
