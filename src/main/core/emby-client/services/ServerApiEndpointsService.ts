/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServerApiEndpointsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Tests SMTP
     * No authentication required
     * @param userId User Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postNotificationSmtpTestByUserid(
        userId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Notification/SMTP/Test/{UserID}',
            path: {
                'UserID': userId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
