/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecommendationDto } from '../models/RecommendationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MoviesServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets movie recommendations
     * Requires authentication as user
     * @param categoryLimit The max number of categories to return
     * @param itemLimit The max number of items to return per category
     * @param userId Optional. Filter by user id, and attach user data
     * @param parentId Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @returns RecommendationDto Operation successful. Returning a RecommendationDto[] object.
     * @throws ApiError
     */
    public getMoviesRecommendations(
        categoryLimit?: number,
        itemLimit?: number,
        userId?: string,
        parentId?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
    ): CancelablePromise<Array<RecommendationDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Movies/Recommendations',
            query: {
                'CategoryLimit': categoryLimit,
                'ItemLimit': itemLimit,
                'UserId': userId,
                'ParentId': parentId,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
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
