/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticateUser } from '../models/AuthenticateUser';
import type { AuthenticateUserByName } from '../models/AuthenticateUserByName';
import type { Authentication_AuthenticationResult } from '../models/Authentication_AuthenticationResult';
import type { Configuration_UserConfiguration } from '../models/Configuration_UserConfiguration';
import type { CreateUserByName } from '../models/CreateUserByName';
import type { ForgotPassword } from '../models/ForgotPassword';
import type { ForgotPasswordPin } from '../models/ForgotPasswordPin';
import type { UpdateUserEasyPassword } from '../models/UpdateUserEasyPassword';
import type { UpdateUserPassword } from '../models/UpdateUserPassword';
import type { UserDto } from '../models/UserDto';
import type { Users_ForgotPasswordResult } from '../models/Users_ForgotPasswordResult';
import type { Users_PinRedeemResult } from '../models/Users_PinRedeemResult';
import type { Users_UserPolicy } from '../models/Users_UserPolicy';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of users
     * Requires authentication as user
     * @param isHidden Optional filter by IsHidden=true or false
     * @param isDisabled Optional filter by IsDisabled=true or false
     * @returns UserDto Operation successful. Returning a UserDto[] object.
     * @throws ApiError
     */
    public getUsers(
        isHidden?: boolean | null,
        isDisabled?: boolean | null,
    ): CancelablePromise<Array<UserDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users',
            query: {
                'IsHidden': isHidden,
                'IsDisabled': isDisabled,
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
     * Gets a list of publicly visible users for display on a login screen.
     * No authentication required
     * @returns UserDto Operation successful. Returning a UserDto[] object.
     * @throws ApiError
     */
    public getUsersPublic(): CancelablePromise<Array<UserDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/Public',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a user by Id
     * Requires authentication as user
     * @param id
     * @returns UserDto Operation successful. Returning a UserDto object.
     * @throws ApiError
     */
    public getUsersById(
        id: string,
    ): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{Id}',
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
     * Deletes a user
     * Requires authentication as administrator
     * @param id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteUsersById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{Id}',
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
     * Updates a user
     * Requires authentication as user
     * @param id
     * @param requestBody UserDto:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersById(
        id: string,
        requestBody: UserDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}',
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
     * Authenticates a user
     * Authenticate a user by nane and password. A 200 status code indicates success, while anything in the 400 or 500 range indicates failure
     * ---
     * No authentication required
     * @param xEmbyAuthorization The authorization header can be either named 'Authorization' or 'X-Emby-Authorization'.
     * It must be of the following schema:
     * Emby UserId="(guid)", Client="(string)", Device="(string)", DeviceId="(string)", Version="string", Token="(string)"
     * Please consult the documentation for further details.
     * @param requestBody AuthenticateUserByName
     * @returns Authentication_AuthenticationResult Operation successful. Returning a AuthenticationResult object.
     * @throws ApiError
     */
    public postUsersAuthenticatebyname(
        xEmbyAuthorization: string,
        requestBody: AuthenticateUserByName,
    ): CancelablePromise<Authentication_AuthenticationResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/AuthenticateByName',
            headers: {
                'X-Emby-Authorization': xEmbyAuthorization,
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
     * Creates a user
     * Requires authentication as administrator
     * @param requestBody CreateUserByName
     * @returns UserDto Operation successful. Returning a UserDto object.
     * @throws ApiError
     */
    public postUsersNew(
        requestBody: CreateUserByName,
    ): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/New',
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
     * Initiates the forgot password process for a local user
     * No authentication required
     * @param requestBody ForgotPassword
     * @returns Users_ForgotPasswordResult Operation successful. Returning a ForgotPasswordResult object.
     * @throws ApiError
     */
    public postUsersForgotpassword(
        requestBody: ForgotPassword,
    ): CancelablePromise<Users_ForgotPasswordResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/ForgotPassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Authenticates a user
     * No authentication required
     * @param id
     * @param requestBody AuthenticateUser
     * @returns Authentication_AuthenticationResult Operation successful. Returning a AuthenticationResult object.
     * @throws ApiError
     */
    public postUsersByIdAuthenticate(
        id: string,
        requestBody: AuthenticateUser,
    ): CancelablePromise<Authentication_AuthenticationResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/Authenticate',
            path: {
                'Id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Updates a user's password
     * Requires authentication as user
     * @param id
     * @param requestBody UpdateUserPassword
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByIdPassword(
        id: string,
        requestBody: UpdateUserPassword,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/Password',
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
     * Updates a user's easy password
     * Requires authentication as user
     * @param id
     * @param requestBody UpdateUserEasyPassword
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByIdEasypassword(
        id: string,
        requestBody: UpdateUserEasyPassword,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/EasyPassword',
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
     * Redeems a forgot password pin
     * No authentication required
     * @param requestBody ForgotPasswordPin
     * @returns Users_PinRedeemResult Operation successful. Returning a PinRedeemResult object.
     * @throws ApiError
     */
    public postUsersForgotpasswordPin(
        requestBody: ForgotPasswordPin,
    ): CancelablePromise<Users_PinRedeemResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/ForgotPassword/Pin',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Updates a user configuration
     * Requires authentication as user
     * @param id
     * @param requestBody UserConfiguration:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByIdConfiguration(
        id: string,
        requestBody: Configuration_UserConfiguration,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/Configuration',
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
     * Updates a user policy
     * Requires authentication as administrator
     * @param id
     * @param requestBody UserPolicy:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByIdPolicy(
        id: string,
        requestBody: Users_UserPolicy,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/Policy',
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
}
