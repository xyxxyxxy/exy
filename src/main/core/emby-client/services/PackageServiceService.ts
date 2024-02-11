/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Updates_PackageInfo } from '../models/Updates_PackageInfo';
import type { Updates_PackageVersionInfo } from '../models/Updates_PackageVersionInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PackageServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets available packages
     * Requires authentication as user
     * @param packageType Optional package type filter (System/UserInstalled)
     * @param targetSystems Optional. Filter by target system type. Allows multiple, comma delimited.
     * @param isPremium Optional. Filter by premium status
     * @param isAdult Optional. Filter by package that contain adult content.
     * @returns Updates_PackageInfo Operation successful. Returning a PackageInfo[] object.
     * @throws ApiError
     */
    public getPackages(
        packageType?: string,
        targetSystems?: string,
        isPremium?: boolean | null,
        isAdult?: boolean | null,
    ): CancelablePromise<Array<Updates_PackageInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Packages',
            query: {
                'PackageType': packageType,
                'TargetSystems': targetSystems,
                'IsPremium': isPremium,
                'IsAdult': isAdult,
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
     * Gets available package updates for currently installed packages
     * Requires authentication as administrator
     * @param packageType Package type filter (System/UserInstalled)
     * @returns Updates_PackageVersionInfo Operation successful. Returning a PackageVersionInfo[] object.
     * @throws ApiError
     */
    public getPackagesUpdates(
        packageType: string,
    ): CancelablePromise<Array<Updates_PackageVersionInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Packages/Updates',
            query: {
                'PackageType': packageType,
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
     * Gets a package, by name or assembly guid
     * Requires authentication as user
     * @param name The name of the package
     * @param assemblyGuid The guid of the associated assembly
     * @returns Updates_PackageInfo Operation successful. Returning a PackageInfo object.
     * @throws ApiError
     */
    public getPackagesByName(
        name: string,
        assemblyGuid?: string,
    ): CancelablePromise<Updates_PackageInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Packages/{Name}',
            path: {
                'Name': name,
            },
            query: {
                'AssemblyGuid': assemblyGuid,
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
     * Installs a package
     * Requires authentication as administrator
     * @param name Package name
     * @param assemblyGuid Guid of the associated assembly
     * @param version Optional version. Defaults to latest version.
     * @param updateClass Optional update class (Dev, Beta, Release). Defaults to Release.
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postPackagesInstalledByName(
        name: string,
        assemblyGuid?: string,
        version?: string,
        updateClass?: 'Release' | 'Beta' | 'Dev',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Packages/Installed/{Name}',
            path: {
                'Name': name,
            },
            query: {
                'AssemblyGuid': assemblyGuid,
                'Version': version,
                'UpdateClass': updateClass,
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
     * Cancels a package installation
     * Requires authentication as administrator
     * @param id Installation Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deletePackagesInstallingById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Packages/Installing/{Id}',
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
}
