/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DisplayPreferences } from '../models/DisplayPreferences';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DisplayPreferencesServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a user's display preferences for an item
     * Requires authentication as user
     * @param id Item Id
     * @param userId User Id
     * @param client Client
     * @returns DisplayPreferences Operation successful. Returning a DisplayPreferences object.
     * @throws ApiError
     */
    public getDisplaypreferencesById(
        id: string,
        userId: string,
        client: string,
    ): CancelablePromise<DisplayPreferences> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/DisplayPreferences/{Id}',
            path: {
                'Id': id,
            },
            query: {
                'UserId': userId,
                'Client': client,
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
     * Updates a user's display preferences for an item
     * Requires authentication as user
     * @param displayPreferencesId DisplayPreferences Id
     * @param userId User Id
     * @param requestBody DisplayPreferences:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postDisplaypreferencesByDisplaypreferencesid(
        displayPreferencesId: string,
        userId: string,
        requestBody: DisplayPreferences,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DisplayPreferences/{DisplayPreferencesId}',
            path: {
                'DisplayPreferencesId': displayPreferencesId,
            },
            query: {
                'UserId': userId,
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
