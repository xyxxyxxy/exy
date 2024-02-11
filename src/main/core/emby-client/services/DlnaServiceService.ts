/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_DeviceProfile } from '../models/Dlna_DeviceProfile';
import type { Dlna_DeviceProfileInfo } from '../models/Dlna_DeviceProfileInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DlnaServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of profiles
     * Requires authentication as administrator
     * @returns Dlna_DeviceProfileInfo Operation successful. Returning a DeviceProfileInfo[] object.
     * @throws ApiError
     */
    public getDlnaProfileinfos(): CancelablePromise<Array<Dlna_DeviceProfileInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/ProfileInfos',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Creates a profile
     * Requires authentication as administrator
     * @param requestBody DeviceProfile:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postDlnaProfiles(
        requestBody: Dlna_DeviceProfile,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Dlna/Profiles',
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
     * Gets a single profile
     * Requires authentication as administrator
     * @param id Profile Id
     * @returns Dlna_DeviceProfile Operation successful. Returning a DeviceProfile object.
     * @throws ApiError
     */
    public getDlnaProfilesById(
        id: string,
    ): CancelablePromise<Dlna_DeviceProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/Profiles/{Id}',
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
     * Deletes a profile
     * Requires authentication as administrator
     * @param id Profile Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteDlnaProfilesById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Dlna/Profiles/{Id}',
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
     * Updates a profile
     * Requires authentication as administrator
     * @param id
     * @param requestBody DeviceProfile:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postDlnaProfilesById(
        id: string,
        requestBody: Dlna_DeviceProfile,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Dlna/Profiles/{Id}',
            path: {
                'Id': id,
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
     * Gets the default profile
     * Requires authentication as administrator
     * @returns Dlna_DeviceProfile Operation successful. Returning a DeviceProfile object.
     * @throws ApiError
     */
    public getDlnaProfilesDefault(): CancelablePromise<Dlna_DeviceProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Dlna/Profiles/Default',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
