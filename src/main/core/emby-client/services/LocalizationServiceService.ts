/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Globalization_CountryInfo } from '../models/Globalization_CountryInfo';
import type { Globalization_CultureDto } from '../models/Globalization_CultureDto';
import type { Globalization_LocalizatonOption } from '../models/Globalization_LocalizatonOption';
import type { ParentalRating } from '../models/ParentalRating';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LocalizationServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets known parental ratings
     * Requires authentication as user
     * @returns ParentalRating Operation successful. Returning a ParentalRating[] object.
     * @throws ApiError
     */
    public getLocalizationParentalratings(): CancelablePromise<Array<ParentalRating>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Localization/ParentalRatings',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets localization options
     * Requires authentication as user
     * @returns Globalization_LocalizatonOption Operation successful. Returning a LocalizatonOption[] object.
     * @throws ApiError
     */
    public getLocalizationOptions(): CancelablePromise<Array<Globalization_LocalizatonOption>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Localization/Options',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets known countries
     * Requires authentication as user
     * @returns Globalization_CountryInfo Operation successful. Returning a CountryInfo[] object.
     * @throws ApiError
     */
    public getLocalizationCountries(): CancelablePromise<Array<Globalization_CountryInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Localization/Countries',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets known cultures
     * Requires authentication as user
     * @returns Globalization_CultureDto Operation successful. Returning a CultureDto[] object.
     * @throws ApiError
     */
    public getLocalizationCultures(): CancelablePromise<Array<Globalization_CultureDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Localization/Cultures',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
