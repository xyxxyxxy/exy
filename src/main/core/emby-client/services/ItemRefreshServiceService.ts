/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ItemRefreshServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Refreshes metadata for an item
     * Requires authentication as user
     * @param id Item Id
     * @param recursive Indicates if the refresh should occur recursively.
     * @param metadataRefreshMode Specifies the metadata refresh mode
     * @param imageRefreshMode Specifies the image refresh mode
     * @param replaceAllMetadata Determines if metadata should be replaced. Only applicable if mode is FullRefresh
     * @param replaceAllImages Determines if images should be replaced. Only applicable if mode is FullRefresh
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsByIdRefresh(
        id: string,
        recursive?: boolean,
        metadataRefreshMode?: 'Default' | 'FullRefresh',
        imageRefreshMode?: 'Default' | 'FullRefresh',
        replaceAllMetadata?: boolean,
        replaceAllImages?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{Id}/Refresh',
            path: {
                'Id': id,
            },
            query: {
                'Recursive': recursive,
                'MetadataRefreshMode': metadataRefreshMode,
                'ImageRefreshMode': imageRefreshMode,
                'ReplaceAllMetadata': replaceAllMetadata,
                'ReplaceAllImages': replaceAllImages,
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
