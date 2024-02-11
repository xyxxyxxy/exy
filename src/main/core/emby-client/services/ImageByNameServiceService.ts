/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageByNameInfo } from '../models/ImageByNameInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ImageByNameServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets all media info image by name
     * Requires authentication as user
     * @returns ImageByNameInfo Operation successful. Returning a List<ImageByNameInfo> object.
     * @throws ApiError
     */
    public getImagesMediainfo(): CancelablePromise<Array<ImageByNameInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Images/MediaInfo',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets all rating images by name
     * Requires authentication as user
     * @returns ImageByNameInfo Operation successful. Returning a List<ImageByNameInfo> object.
     * @throws ApiError
     */
    public getImagesRatings(): CancelablePromise<Array<ImageByNameInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Images/Ratings',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets all general images by name
     * Requires authentication as user
     * @returns ImageByNameInfo Operation successful. Returning a List<ImageByNameInfo> object.
     * @throws ApiError
     */
    public getImagesGeneral(): CancelablePromise<Array<ImageByNameInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Images/General',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a general image by name
     * No authentication required
     * @param name The name of the image
     * @param type Image Type (primary, backdrop, logo, etc).
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getImagesGeneralByNameByType(
        name: string,
        type: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Images/General/{Name}/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a rating image by name
     * No authentication required
     * @param name The name of the image
     * @param theme The theme to get the image from
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getImagesRatingsByThemeByName(
        name: string,
        theme: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Images/Ratings/{Theme}/{Name}',
            path: {
                'Name': name,
                'Theme': theme,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a media info image by name
     * No authentication required
     * @param name The name of the image
     * @param theme The theme to get the image from
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getImagesMediainfoByThemeByName(
        name: string,
        theme: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Images/MediaInfo/{Theme}/{Name}',
            path: {
                'Name': name,
                'Theme': theme,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
