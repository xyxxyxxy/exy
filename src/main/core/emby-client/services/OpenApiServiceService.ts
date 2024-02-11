/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OpenApiServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the OpenAPI 3 specifications
     * No authentication required
     * @returns string Operation successful. Returning a String object.
     * @throws ApiError
     */
    public getOpenapi(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/openapi',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets OpenAPI 3 specifications
     * No authentication required
     * @returns string Operation successful. Returning a String object.
     * @throws ApiError
     */
    public getOpenapiJson(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/openapi.json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets the swagger specifications
     * No authentication required
     * @returns string Operation successful. Returning a String object.
     * @throws ApiError
     */
    public getSwagger(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/swagger',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets the swagger specifications
     * No authentication required
     * @returns string Operation successful. Returning a String object.
     * @throws ApiError
     */
    public getSwaggerJson(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/swagger.json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
