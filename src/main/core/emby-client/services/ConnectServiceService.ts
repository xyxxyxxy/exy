/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connect_ConnectAuthenticationExchangeResult } from '../models/Connect_ConnectAuthenticationExchangeResult';
import type { Connect_UserLinkResult } from '../models/Connect_UserLinkResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConnectServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Connect link for a user
     * Requires authentication as administrator
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getConnectPending(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Connect/Pending',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets the corresponding local user from a connect user id
     * Requires authentication as user
     * @param connectUserId ConnectUserId
     * @returns Connect_ConnectAuthenticationExchangeResult Operation successful. Returning a ConnectAuthenticationExchangeResult object.
     * @throws ApiError
     */
    public getConnectExchange(
        connectUserId: string,
    ): CancelablePromise<Connect_ConnectAuthenticationExchangeResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Connect/Exchange',
            query: {
                'ConnectUserId': connectUserId,
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
     * Creates a Connect link for a user
     * Requires authentication as administrator
     * @param id User Id
     * @param connectUsername Connect username
     * @returns Connect_UserLinkResult Operation successful. Returning a UserLinkResult object.
     * @throws ApiError
     */
    public postUsersByIdConnectLink(
        id: string,
        connectUsername: string,
    ): CancelablePromise<Connect_UserLinkResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/Connect/Link',
            path: {
                'Id': id,
            },
            query: {
                'ConnectUsername': connectUsername,
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
     * Removes a Connect link for a user
     * Requires authentication as administrator
     * @param id User Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteUsersByIdConnectLink(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{Id}/Connect/Link',
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
