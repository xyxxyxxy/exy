/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration_CodecConfiguration } from '../models/Configuration_CodecConfiguration';
import type { MediaEncoding_Codecs_VideoCodecs_VideoCodecBase } from '../models/MediaEncoding_Codecs_VideoCodecs_VideoCodecBase';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EncodingInfoServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets details about available video encoders and decoders
     * Requires authentication as user
     * @returns MediaEncoding_Codecs_VideoCodecs_VideoCodecBase Operation successful. Returning a VideoCodecBase[] object.
     * @throws ApiError
     */
    public getEncodingCodecinformationVideo(): CancelablePromise<Array<MediaEncoding_Codecs_VideoCodecs_VideoCodecBase>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Encoding/CodecInformation/Video',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets default codec configurations
     * Requires authentication as user
     * @returns Configuration_CodecConfiguration Operation successful. Returning a CodecConfiguration[] object.
     * @throws ApiError
     */
    public getEncodingCodecconfigurationDefaults(): CancelablePromise<Array<Configuration_CodecConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Encoding/CodecConfiguration/Defaults',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
