/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GameSystemSummary } from '../models/GameSystemSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GamesServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Finds games similar to a given game.
     * Requires authentication as user
     * @param userId Optional. Filter by user id
     * @returns GameSystemSummary Operation successful. Returning a GameSystemSummary[] object.
     * @throws ApiError
     */
    public getGamesSystemsummaries(
        userId?: string,
    ): CancelablePromise<Array<GameSystemSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Games/SystemSummaries',
            query: {
                'UserId': userId,
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
