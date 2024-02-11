/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebDashboard_Api_ConfigurationPageInfo } from '../models/WebDashboard_Api_ConfigurationPageInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DashboardServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * No authentication required
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getWebConfigurationpage(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/web/ConfigurationPage',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @returns WebDashboard_Api_ConfigurationPageInfo Operation successful. Returning a List<ConfigurationPageInfo> object.
     * @throws ApiError
     */
    public getWebConfigurationpages(): CancelablePromise<Array<WebDashboard_Api_ConfigurationPageInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/web/ConfigurationPages',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
