/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Branding_BrandingOptions } from '../models/Branding_BrandingOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BrandingServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets branding configuration
     * No authentication required
     * @returns Branding_BrandingOptions Operation successful. Returning a BrandingOptions object.
     * @throws ApiError
     */
    public getBrandingConfiguration(): CancelablePromise<Branding_BrandingOptions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Branding/Configuration',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets custom css
     * No authentication required
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getBrandingCss(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Branding/Css',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets custom css
     * No authentication required
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getBrandingCssCss(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Branding/Css.css',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
