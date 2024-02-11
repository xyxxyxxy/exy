/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from '../models/BaseItemDto';
import type { LiveTv_GetPrograms } from '../models/LiveTv_GetPrograms';
import type { LiveTv_GuideInfo } from '../models/LiveTv_GuideInfo';
import type { LiveTv_ListingProviderTypeInfo } from '../models/LiveTv_ListingProviderTypeInfo';
import type { LiveTv_ListingsProviderInfo } from '../models/LiveTv_ListingsProviderInfo';
import type { LiveTv_LiveTvInfo } from '../models/LiveTv_LiveTvInfo';
import type { LiveTv_SeriesTimerInfoDto } from '../models/LiveTv_SeriesTimerInfoDto';
import type { LiveTv_SetChannelMapping } from '../models/LiveTv_SetChannelMapping';
import type { LiveTv_TimerInfoDto } from '../models/LiveTv_TimerInfoDto';
import type { LiveTv_TunerHostInfo } from '../models/LiveTv_TunerHostInfo';
import type { NameIdPair } from '../models/NameIdPair';
import type { QueryResult_BaseItemDto } from '../models/QueryResult_BaseItemDto';
import type { QueryResult_LiveTv_SeriesTimerInfoDto } from '../models/QueryResult_LiveTv_SeriesTimerInfoDto';
import type { QueryResult_LiveTv_TimerInfoDto } from '../models/QueryResult_LiveTv_TimerInfoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LiveTvServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public optionsLivetvChannelmappings(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/LiveTv/ChannelMappings',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getLivetvChannelmappings(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/ChannelMappings',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headLivetvChannelmappings(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/LiveTv/ChannelMappings',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @param requestBody SetChannelMapping
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postLivetvChannelmappings(
        providerId: string,
        requestBody: LiveTv_SetChannelMapping,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/ChannelMappings',
            query: {
                'ProviderId': providerId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @param requestBody SetChannelMapping
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public putLivetvChannelmappings(
        providerId: string,
        requestBody: LiveTv_SetChannelMapping,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/LiveTv/ChannelMappings',
            query: {
                'ProviderId': providerId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public deleteLivetvChannelmappings(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/LiveTv/ChannelMappings',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public patchLivetvChannelmappings(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/LiveTv/ChannelMappings',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public optionsLivetvChannelmappingoptions(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'OPTIONS',
            url: '/LiveTv/ChannelMappingOptions',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getLivetvChannelmappingoptions(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/ChannelMappingOptions',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headLivetvChannelmappingoptions(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/LiveTv/ChannelMappingOptions',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postLivetvChannelmappingoptions(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/ChannelMappingOptions',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public putLivetvChannelmappingoptions(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/LiveTv/ChannelMappingOptions',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public deleteLivetvChannelmappingoptions(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/LiveTv/ChannelMappingOptions',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param providerId Provider id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public patchLivetvChannelmappingoptions(
        providerId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/LiveTv/ChannelMappingOptions',
            query: {
                'ProviderId': providerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Adds a listing provider
     * Requires authentication as user
     * @param requestBody ListingsProviderInfo:
     * @returns LiveTv_ListingsProviderInfo Operation successful. Returning a ListingsProviderInfo object.
     * @throws ApiError
     */
    public postLivetvListingproviders(
        requestBody: LiveTv_ListingsProviderInfo,
    ): CancelablePromise<LiveTv_ListingsProviderInfo> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/ListingProviders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Deletes a listing provider
     * Requires authentication as user
     * @param id Provider id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteLivetvListingproviders(
        id?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/LiveTv/ListingProviders',
            query: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets current listing providers
     * Requires authentication as user
     * @returns LiveTv_ListingsProviderInfo Operation successful. Returning a ListingsProviderInfo[] object.
     * @throws ApiError
     */
    public getLivetvListingproviders(): CancelablePromise<Array<LiveTv_ListingsProviderInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/ListingProviders',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets tuner hosts
     * Requires authentication as user
     * @returns LiveTv_TunerHostInfo Operation successful. Returning a TunerHostInfo[] object.
     * @throws ApiError
     */
    public getLivetvTunerhosts(): CancelablePromise<Array<LiveTv_TunerHostInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/TunerHosts',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Adds a tuner host
     * Requires authentication as user
     * @param requestBody TunerHostInfo:
     * @returns LiveTv_TunerHostInfo Operation successful. Returning a TunerHostInfo object.
     * @throws ApiError
     */
    public postLivetvTunerhosts(
        requestBody: LiveTv_TunerHostInfo,
    ): CancelablePromise<LiveTv_TunerHostInfo> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/TunerHosts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Deletes a tuner host
     * Requires authentication as user
     * @param id Tuner host id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteLivetvTunerhosts(
        id?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/LiveTv/TunerHosts',
            query: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets available live tv services.
     * Requires authentication as user
     * @returns LiveTv_LiveTvInfo Operation successful. Returning a LiveTvInfo object.
     * @throws ApiError
     */
    public getLivetvInfo(): CancelablePromise<LiveTv_LiveTvInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Info',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets available live tv channels.
     * Requires authentication as user
     * @param type Optional filter by channel type.
     * @param userId Optional filter by user and attach user data.
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param isMovie Optional filter for movies.
     * @param isSeries Optional filter for movies.
     * @param isNews Optional filter for news.
     * @param isKids Optional filter for kids.
     * @param isSports Optional filter for sports.
     * @param limit Optional. The maximum number of records to return
     * @param isFavorite Filter by channels that are favorites, or not.
     * @param isLiked Filter by channels that are liked, or not.
     * @param isDisliked Filter by channels that are disliked, or not.
     * @param enableFavoriteSorting Incorporate favorite and like status into channel sorting.
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines
     * @param addCurrentProgram Optional. Adds current program info to each channel
     * @param enableUserData Optional, include user data
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getLivetvChannels(
        type?: 'TV' | 'Radio',
        userId?: string,
        startIndex?: number | null,
        isMovie?: boolean | null,
        isSeries?: boolean | null,
        isNews?: boolean | null,
        isKids?: boolean | null,
        isSports?: boolean | null,
        limit?: number | null,
        isFavorite?: boolean | null,
        isLiked?: boolean | null,
        isDisliked?: boolean | null,
        enableFavoriteSorting?: boolean,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        fields?: string,
        addCurrentProgram?: boolean,
        enableUserData?: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Channels',
            query: {
                'Type': type,
                'UserId': userId,
                'StartIndex': startIndex,
                'IsMovie': isMovie,
                'IsSeries': isSeries,
                'IsNews': isNews,
                'IsKids': isKids,
                'IsSports': isSports,
                'Limit': limit,
                'IsFavorite': isFavorite,
                'IsLiked': isLiked,
                'IsDisliked': isDisliked,
                'EnableFavoriteSorting': enableFavoriteSorting,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'Fields': fields,
                'AddCurrentProgram': addCurrentProgram,
                'EnableUserData': enableUserData,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets available live tv epgs..
     * Requires authentication as user
     * @param channelIds The channels to return guide information for.
     * @param userId Optional filter by user id.
     * @param minStartDate Optional. The minimum premiere date. Format = ISO
     * @param hasAired Optional. Filter by programs that have completed airing, or not.
     * @param maxStartDate Optional. The maximum premiere date. Format = ISO
     * @param minEndDate Optional. The minimum premiere date. Format = ISO
     * @param maxEndDate Optional. The maximum premiere date. Format = ISO
     * @param isMovie Optional filter for movies.
     * @param isSeries Optional filter for movies.
     * @param isNews Optional filter for news.
     * @param isKids Optional filter for kids.
     * @param isSports Optional filter for sports.
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param sortBy Optional. Specify one or more sort orders, comma delimeted. Options: Name, StartDate
     * @param sortOrder Sort Order - Ascending,Descending
     * @param genreIds The genres to return guide information for.
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param enableUserData Optional, include user data
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getLivetvPrograms(
        channelIds?: string,
        userId?: string,
        minStartDate?: string,
        hasAired?: boolean | null,
        maxStartDate?: string,
        minEndDate?: string,
        maxEndDate?: string,
        isMovie?: boolean | null,
        isSeries?: boolean | null,
        isNews?: boolean | null,
        isKids?: boolean | null,
        isSports?: boolean | null,
        startIndex?: number | null,
        limit?: number | null,
        sortBy?: string,
        sortOrder?: string,
        genreIds?: string,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        enableUserData?: boolean | null,
        fields?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Programs',
            query: {
                'ChannelIds': channelIds,
                'UserId': userId,
                'MinStartDate': minStartDate,
                'HasAired': hasAired,
                'MaxStartDate': maxStartDate,
                'MinEndDate': minEndDate,
                'MaxEndDate': maxEndDate,
                'IsMovie': isMovie,
                'IsSeries': isSeries,
                'IsNews': isNews,
                'IsKids': isKids,
                'IsSports': isSports,
                'StartIndex': startIndex,
                'Limit': limit,
                'SortBy': sortBy,
                'SortOrder': sortOrder,
                'GenreIds': genreIds,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'EnableUserData': enableUserData,
                'Fields': fields,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets available live tv epgs..
     * Requires authentication as user
     * @param requestBody GetPrograms
     * @param channelIds The channels to return guide information for.
     * @param userId Optional filter by user id.
     * @param minStartDate Optional. The minimum premiere date. Format = ISO
     * @param maxStartDate Optional. The maximum premiere date. Format = ISO
     * @param minEndDate Optional. The minimum premiere date. Format = ISO
     * @param maxEndDate Optional. The maximum premiere date. Format = ISO
     * @param isMovie Optional filter for movies.
     * @param isSeries Optional filter for movies.
     * @param isNews Optional filter for news.
     * @param isKids Optional filter for kids.
     * @param isSports Optional filter for sports.
     * @param genreIds The genres to return guide information for.
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public postLivetvPrograms(
        requestBody: LiveTv_GetPrograms,
        channelIds?: string,
        userId?: string,
        minStartDate?: string,
        maxStartDate?: string,
        minEndDate?: string,
        maxEndDate?: string,
        isMovie?: boolean | null,
        isSeries?: boolean | null,
        isNews?: boolean | null,
        isKids?: boolean | null,
        isSports?: boolean | null,
        genreIds?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/Programs',
            query: {
                'ChannelIds': channelIds,
                'UserId': userId,
                'MinStartDate': minStartDate,
                'MaxStartDate': maxStartDate,
                'MinEndDate': minEndDate,
                'MaxEndDate': maxEndDate,
                'IsMovie': isMovie,
                'IsSeries': isSeries,
                'IsNews': isNews,
                'IsKids': isKids,
                'IsSports': isSports,
                'GenreIds': genreIds,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets live tv recordings
     * Requires authentication as user
     * @param channelId Optional filter by channel id.
     * @param status Optional filter by recording status.
     * @param isInProgress Optional filter by recordings that are in progress, or not.
     * @param seriesTimerId Optional filter by recordings belonging to a series timer
     * @param artistType Artist or AlbumArtist
     * @param maxOfficialRating Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
     * @param hasThemeSong Optional filter by items with theme songs.
     * @param hasThemeVideo Optional filter by items with theme videos.
     * @param hasSubtitles Optional filter by items with subtitles.
     * @param hasSpecialFeature Optional filter by items with special features.
     * @param hasTrailer Optional filter by items with trailers.
     * @param adjacentTo Optional. Return items that are siblings of a supplied item.
     * @param minIndexNumber Optional filter by minimum index number.
     * @param minPlayers Optional filter by minimum number of game players.
     * @param maxPlayers Optional filter by maximum number of game players.
     * @param parentIndexNumber Optional filter by parent index number.
     * @param hasParentalRating Optional filter by items that have or do not have a parental rating
     * @param isHd Optional filter by items that are HD or not.
     * @param locationTypes Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimeted.
     * @param excludeLocationTypes Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimeted.
     * @param isMissing Optional filter by items that are missing episodes or not.
     * @param isUnaired Optional filter by items that are unaired episodes or not.
     * @param minCommunityRating Optional filter by minimum community rating.
     * @param minCriticRating Optional filter by minimum critic rating.
     * @param airedDuringSeason Gets all episodes that aired during a season, including specials.
     * @param minPremiereDate Optional. The minimum premiere date. Format = ISO
     * @param minDateLastSaved Optional. The minimum premiere date. Format = ISO
     * @param minDateLastSavedForUser Optional. The minimum premiere date. Format = ISO
     * @param maxPremiereDate Optional. The maximum premiere date. Format = ISO
     * @param hasOverview Optional filter by items that have an overview or not.
     * @param hasImdbId Optional filter by items that have an imdb id or not.
     * @param hasTmdbId Optional filter by items that have a tmdb id or not.
     * @param hasTvdbId Optional filter by items that have a tvdb id or not.
     * @param excludeItemIds Optional. If specified, results will be filtered by exxcluding item ids. This allows multiple, comma delimeted.
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param recursive When searching within folders, this determines whether or not the search will be recursive. true/false
     * @param sortOrder Sort Order - Ascending,Descending
     * @param parentId Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines
     * @param excludeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param anyProviderIdEquals Optional. If specified, result will be filtered to contain only items which match at least one of the specified IDs. Each provider ID must be in the form 'prov.id', e.g. 'imdb.tt123456'. This allows multiple, comma delimeted value pairs.
     * @param filters Optional. Specify additional filters to apply. This allows multiple, comma delimeted. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes
     * @param isFavorite Optional filter by items that are marked as favorite, or not.
     * @param isMovie Optional filter for movies.
     * @param isSeries Optional filter for movies.
     * @param isNews Optional filter for news.
     * @param isKids Optional filter for kids.
     * @param isSports Optional filter for sports.
     * @param mediaTypes Optional filter by MediaType. Allows multiple, comma delimited.
     * @param imageTypes Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.
     * @param sortBy Optional. Specify one or more sort orders, comma delimeted. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime
     * @param isPlayed Optional filter by items that are played, or not.
     * @param genres Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimeted.
     * @param officialRatings Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimeted.
     * @param tags Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimeted.
     * @param years Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimeted.
     * @param enableImages Optional, include image information in output
     * @param enableUserData Optional, include user data
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param person Optional. If specified, results will be filtered to include only those containing the specified person.
     * @param personIds Optional. If specified, results will be filtered to include only those containing the specified person.
     * @param personTypes Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited
     * @param studios Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimeted.
     * @param studioIds Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimeted.
     * @param artists Optional. If specified, results will be filtered based on artist. This allows multiple, pipe delimeted.
     * @param artistIds Optional. If specified, results will be filtered based on artist. This allows multiple, pipe delimeted.
     * @param albums Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimeted.
     * @param ids Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited.
     * @param videoTypes Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimeted.
     * @param containers Optional filter by Container. Allows multiple, comma delimeted.
     * @param audioCodecs Optional filter by AudioCodec. Allows multiple, comma delimeted.
     * @param videoCodecs Optional filter by VideoCodec. Allows multiple, comma delimeted.
     * @param subtitleCodecs Optional filter by SubtitleCodec. Allows multiple, comma delimeted.
     * @param path Optional filter by Path.
     * @param userId User Id
     * @param minOfficialRating Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
     * @param isLocked Optional filter by items that are locked.
     * @param isPlaceHolder Optional filter by items that are placeholders
     * @param hasOfficialRating Optional filter by items that have official ratings
     * @param groupItemsIntoCollections Whether or not to hide items behind their boxsets.
     * @param is3D Optional filter by items that are 3D, or not.
     * @param seriesStatus Optional filter by Series Status. Allows multiple, comma delimeted.
     * @param nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
     * @param nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
     * @param nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getLivetvRecordings(
        channelId?: string,
        status?: 'New' | 'InProgress' | 'Completed' | 'Cancelled' | 'ConflictedOk' | 'ConflictedNotOk' | 'Error',
        isInProgress?: boolean | null,
        seriesTimerId?: string,
        artistType?: string,
        maxOfficialRating?: string,
        hasThemeSong?: boolean | null,
        hasThemeVideo?: boolean | null,
        hasSubtitles?: boolean | null,
        hasSpecialFeature?: boolean | null,
        hasTrailer?: boolean | null,
        adjacentTo?: string,
        minIndexNumber?: number | null,
        minPlayers?: number | null,
        maxPlayers?: number | null,
        parentIndexNumber?: number | null,
        hasParentalRating?: boolean | null,
        isHd?: boolean | null,
        locationTypes?: string,
        excludeLocationTypes?: string,
        isMissing?: boolean | null,
        isUnaired?: boolean | null,
        minCommunityRating?: number | null,
        minCriticRating?: number | null,
        airedDuringSeason?: number | null,
        minPremiereDate?: string,
        minDateLastSaved?: string,
        minDateLastSavedForUser?: string,
        maxPremiereDate?: string,
        hasOverview?: boolean | null,
        hasImdbId?: boolean | null,
        hasTmdbId?: boolean | null,
        hasTvdbId?: boolean | null,
        excludeItemIds?: string,
        startIndex?: number | null,
        limit?: number | null,
        recursive?: boolean,
        sortOrder?: string,
        parentId?: string,
        fields?: string,
        excludeItemTypes?: string,
        includeItemTypes?: string,
        anyProviderIdEquals?: string,
        filters?: string,
        isFavorite?: boolean | null,
        isMovie?: boolean | null,
        isSeries?: boolean | null,
        isNews?: boolean | null,
        isKids?: boolean | null,
        isSports?: boolean | null,
        mediaTypes?: string,
        imageTypes?: string,
        sortBy?: string,
        isPlayed?: boolean | null,
        genres?: string,
        officialRatings?: string,
        tags?: string,
        years?: string,
        enableImages?: boolean | null,
        enableUserData?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        person?: string,
        personIds?: string,
        personTypes?: string,
        studios?: string,
        studioIds?: string,
        artists?: string,
        artistIds?: string,
        albums?: string,
        ids?: string,
        videoTypes?: string,
        containers?: string,
        audioCodecs?: string,
        videoCodecs?: string,
        subtitleCodecs?: string,
        path?: string,
        userId?: string,
        minOfficialRating?: string,
        isLocked?: boolean | null,
        isPlaceHolder?: boolean | null,
        hasOfficialRating?: boolean | null,
        groupItemsIntoCollections?: boolean,
        is3D?: boolean | null,
        seriesStatus?: string,
        nameStartsWithOrGreater?: string,
        nameStartsWith?: string,
        nameLessThan?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Recordings',
            query: {
                'ChannelId': channelId,
                'Status': status,
                'IsInProgress': isInProgress,
                'SeriesTimerId': seriesTimerId,
                'ArtistType': artistType,
                'MaxOfficialRating': maxOfficialRating,
                'HasThemeSong': hasThemeSong,
                'HasThemeVideo': hasThemeVideo,
                'HasSubtitles': hasSubtitles,
                'HasSpecialFeature': hasSpecialFeature,
                'HasTrailer': hasTrailer,
                'AdjacentTo': adjacentTo,
                'MinIndexNumber': minIndexNumber,
                'MinPlayers': minPlayers,
                'MaxPlayers': maxPlayers,
                'ParentIndexNumber': parentIndexNumber,
                'HasParentalRating': hasParentalRating,
                'IsHD': isHd,
                'LocationTypes': locationTypes,
                'ExcludeLocationTypes': excludeLocationTypes,
                'IsMissing': isMissing,
                'IsUnaired': isUnaired,
                'MinCommunityRating': minCommunityRating,
                'MinCriticRating': minCriticRating,
                'AiredDuringSeason': airedDuringSeason,
                'MinPremiereDate': minPremiereDate,
                'MinDateLastSaved': minDateLastSaved,
                'MinDateLastSavedForUser': minDateLastSavedForUser,
                'MaxPremiereDate': maxPremiereDate,
                'HasOverview': hasOverview,
                'HasImdbId': hasImdbId,
                'HasTmdbId': hasTmdbId,
                'HasTvdbId': hasTvdbId,
                'ExcludeItemIds': excludeItemIds,
                'StartIndex': startIndex,
                'Limit': limit,
                'Recursive': recursive,
                'SortOrder': sortOrder,
                'ParentId': parentId,
                'Fields': fields,
                'ExcludeItemTypes': excludeItemTypes,
                'IncludeItemTypes': includeItemTypes,
                'AnyProviderIdEquals': anyProviderIdEquals,
                'Filters': filters,
                'IsFavorite': isFavorite,
                'IsMovie': isMovie,
                'IsSeries': isSeries,
                'IsNews': isNews,
                'IsKids': isKids,
                'IsSports': isSports,
                'MediaTypes': mediaTypes,
                'ImageTypes': imageTypes,
                'SortBy': sortBy,
                'IsPlayed': isPlayed,
                'Genres': genres,
                'OfficialRatings': officialRatings,
                'Tags': tags,
                'Years': years,
                'EnableImages': enableImages,
                'EnableUserData': enableUserData,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'Person': person,
                'PersonIds': personIds,
                'PersonTypes': personTypes,
                'Studios': studios,
                'StudioIds': studioIds,
                'Artists': artists,
                'ArtistIds': artistIds,
                'Albums': albums,
                'Ids': ids,
                'VideoTypes': videoTypes,
                'Containers': containers,
                'AudioCodecs': audioCodecs,
                'VideoCodecs': videoCodecs,
                'SubtitleCodecs': subtitleCodecs,
                'Path': path,
                'UserId': userId,
                'MinOfficialRating': minOfficialRating,
                'IsLocked': isLocked,
                'IsPlaceHolder': isPlaceHolder,
                'HasOfficialRating': hasOfficialRating,
                'GroupItemsIntoCollections': groupItemsIntoCollections,
                'Is3D': is3D,
                'SeriesStatus': seriesStatus,
                'NameStartsWithOrGreater': nameStartsWithOrGreater,
                'NameStartsWith': nameStartsWith,
                'NameLessThan': nameLessThan,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets live tv timers
     * Requires authentication as user
     * @param channelId Optional filter by channel id.
     * @param seriesTimerId Optional filter by timers belonging to a series timer
     * @returns QueryResult_LiveTv_TimerInfoDto Operation successful. Returning a QueryResult<TimerInfoDto> object.
     * @throws ApiError
     */
    public getLivetvTimers(
        channelId?: string,
        seriesTimerId?: string,
    ): CancelablePromise<QueryResult_LiveTv_TimerInfoDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Timers',
            query: {
                'ChannelId': channelId,
                'SeriesTimerId': seriesTimerId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Creates a live tv timer
     * Requires authentication as user
     * @param requestBody TimerInfoDto:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLivetvTimers(
        requestBody: LiveTv_TimerInfoDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/Timers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets live tv series timers
     * Requires authentication as user
     * @param sortBy Optional. Sort by SortName or Priority
     * @param sortOrder Optional. Sort in Ascending or Descending order
     * @returns QueryResult_LiveTv_SeriesTimerInfoDto Operation successful. Returning a QueryResult<SeriesTimerInfoDto> object.
     * @throws ApiError
     */
    public getLivetvSeriestimers(
        sortBy?: string,
        sortOrder?: 'Ascending' | 'Descending',
    ): CancelablePromise<QueryResult_LiveTv_SeriesTimerInfoDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/SeriesTimers',
            query: {
                'SortBy': sortBy,
                'SortOrder': sortOrder,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Creates a live tv series timer
     * Requires authentication as user
     * @param requestBody SeriesTimerInfoDto:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLivetvSeriestimers(
        requestBody: LiveTv_SeriesTimerInfoDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/SeriesTimers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets guide info
     * Requires authentication as user
     * @returns LiveTv_GuideInfo Operation successful. Returning a GuideInfo object.
     * @throws ApiError
     */
    public getLivetvGuideinfo(): CancelablePromise<LiveTv_GuideInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/GuideInfo',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @returns NameIdPair Operation successful. Returning a List<NameIdPair> object.
     * @throws ApiError
     */
    public getLivetvTunerhostsTypes(): CancelablePromise<Array<NameIdPair>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/TunerHosts/Types',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets recording folders
     * Requires authentication as user
     * @param userId Optional filter by user and attach user data.
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto[] object.
     * @throws ApiError
     */
    public getLivetvRecordingsFolders(
        userId?: string,
    ): CancelablePromise<Array<BaseItemDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Recordings/Folders',
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
    /**
     * Requires authentication as user
     * @returns LiveTv_TunerHostInfo Operation successful. Returning a List<TunerHostInfo> object.
     * @throws ApiError
     */
    public getLivetvTunersDiscvover(): CancelablePromise<Array<LiveTv_TunerHostInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Tuners/Discvover',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @returns LiveTv_ListingsProviderInfo Operation successful. Returning a ListingsProviderInfo object.
     * @throws ApiError
     */
    public getLivetvListingprovidersDefault(): CancelablePromise<LiveTv_ListingsProviderInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/ListingProviders/Default',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets available lineups
     * Requires authentication as user
     * @param id Provider id
     * @param type Provider Type
     * @param location Location
     * @param country Country
     * @returns NameIdPair Operation successful. Returning a List<NameIdPair> object.
     * @throws ApiError
     */
    public getLivetvListingprovidersLineups(
        id?: string,
        type?: string,
        location?: string,
        country?: string,
    ): CancelablePromise<Array<NameIdPair>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/ListingProviders/Lineups',
            query: {
                'Id': id,
                'Type': type,
                'Location': location,
                'Country': country,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a live tv channel
     * Requires authentication as user
     * @param id Channel Id
     * @param userId Optional attach user data.
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto object.
     * @throws ApiError
     */
    public getLivetvChannelsById(
        id: string,
        userId?: string,
    ): CancelablePromise<BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Channels/{Id}',
            path: {
                'Id': id,
            },
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
    /**
     * Gets available live tv epgs..
     * Requires authentication as user
     * @param userId Optional filter by user id.
     * @param limit Optional. The maximum number of records to return
     * @param isAiring Optional. Filter by programs that are currently airing, or not.
     * @param hasAired Optional. Filter by programs that have completed airing, or not.
     * @param isSeries Optional filter for movies.
     * @param isMovie Optional filter for movies.
     * @param isNews Optional filter for news.
     * @param isKids Optional filter for kids.
     * @param isSports Optional filter for sports.
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param genreIds The genres to return guide information for.
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines
     * @param enableUserData Optional, include user data
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getLivetvProgramsRecommended(
        userId?: string,
        limit?: number | null,
        isAiring?: boolean | null,
        hasAired?: boolean | null,
        isSeries?: boolean | null,
        isMovie?: boolean | null,
        isNews?: boolean | null,
        isKids?: boolean | null,
        isSports?: boolean | null,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        genreIds?: string,
        fields?: string,
        enableUserData?: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Programs/Recommended',
            query: {
                'UserId': userId,
                'Limit': limit,
                'IsAiring': isAiring,
                'HasAired': hasAired,
                'IsSeries': isSeries,
                'IsMovie': isMovie,
                'IsNews': isNews,
                'IsKids': isKids,
                'IsSports': isSports,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'GenreIds': genreIds,
                'Fields': fields,
                'EnableUserData': enableUserData,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets live tv recordings
     * Requires authentication as user
     * @param channelId Optional filter by channel id.
     * @param userId Optional filter by user and attach user data.
     * @param groupId Optional filter by recording group.
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param status Optional filter by recording status.
     * @param isInProgress Optional filter by recordings that are in progress, or not.
     * @param seriesTimerId Optional filter by recordings belonging to a series timer
     * @param enableImages Optional, include image information in output
     * @param imageTypeLimit Optional, the max number of images to return, per image type
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param fields Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines
     * @param enableUserData Optional, include user data
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getLivetvRecordingsSeries(
        channelId?: string,
        userId?: string,
        groupId?: string,
        startIndex?: number | null,
        limit?: number | null,
        status?: 'New' | 'InProgress' | 'Completed' | 'Cancelled' | 'ConflictedOk' | 'ConflictedNotOk' | 'Error',
        isInProgress?: boolean | null,
        seriesTimerId?: string,
        enableImages?: boolean | null,
        imageTypeLimit?: number | null,
        enableImageTypes?: string,
        fields?: string,
        enableUserData?: boolean | null,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Recordings/Series',
            query: {
                'ChannelId': channelId,
                'UserId': userId,
                'GroupId': groupId,
                'StartIndex': startIndex,
                'Limit': limit,
                'Status': status,
                'IsInProgress': isInProgress,
                'SeriesTimerId': seriesTimerId,
                'EnableImages': enableImages,
                'ImageTypeLimit': imageTypeLimit,
                'EnableImageTypes': enableImageTypes,
                'Fields': fields,
                'EnableUserData': enableUserData,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a live tv recording
     * Requires authentication as user
     * @param id Recording Id
     * @param userId Optional attach user data.
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto object.
     * @throws ApiError
     */
    public getLivetvRecordingsById(
        id: string,
        userId?: string,
    ): CancelablePromise<BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Recordings/{Id}',
            path: {
                'Id': id,
            },
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
    /**
     * Deletes a live tv recording
     * Requires authentication as user
     * @param id Recording Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteLivetvRecordingsById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/LiveTv/Recordings/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a live tv timer
     * Requires authentication as user
     * @param id Timer Id
     * @returns LiveTv_TimerInfoDto Operation successful. Returning a TimerInfoDto object.
     * @throws ApiError
     */
    public getLivetvTimersById(
        id: string,
    ): CancelablePromise<LiveTv_TimerInfoDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Timers/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Cancels a live tv timer
     * Requires authentication as user
     * @param id Timer Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteLivetvTimersById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/LiveTv/Timers/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Updates a live tv timer
     * Requires authentication as user
     * @param id
     * @param requestBody TimerInfoDto:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLivetvTimersById(
        id: string,
        requestBody: LiveTv_TimerInfoDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/Timers/{Id}',
            path: {
                'Id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a live tv series timer
     * Requires authentication as user
     * @param id Timer Id
     * @returns LiveTv_TimerInfoDto Operation successful. Returning a TimerInfoDto object.
     * @throws ApiError
     */
    public getLivetvSeriestimersById(
        id: string,
    ): CancelablePromise<LiveTv_TimerInfoDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/SeriesTimers/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Cancels a live tv series timer
     * Requires authentication as user
     * @param id Timer Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteLivetvSeriestimersById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/LiveTv/SeriesTimers/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Updates a live tv series timer
     * Requires authentication as user
     * @param id
     * @param requestBody SeriesTimerInfoDto:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLivetvSeriestimersById(
        id: string,
        requestBody: LiveTv_SeriesTimerInfoDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/SeriesTimers/{Id}',
            path: {
                'Id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets default values for a new timer
     * Requires authentication as user
     * @param programId Optional, to attach default values based on a program.
     * @returns LiveTv_SeriesTimerInfoDto Operation successful. Returning a SeriesTimerInfoDto object.
     * @throws ApiError
     */
    public getLivetvTimersDefaults(
        programId?: string,
    ): CancelablePromise<LiveTv_SeriesTimerInfoDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Timers/Defaults',
            query: {
                'ProgramId': programId,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets live tv recording groups
     * Requires authentication as user
     * @param userId Optional filter by user and attach user data.
     * @returns QueryResult_BaseItemDto Operation successful. Returning a QueryResult<BaseItemDto> object.
     * @throws ApiError
     */
    public getLivetvRecordingsGroups(
        userId?: string,
    ): CancelablePromise<QueryResult_BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Recordings/Groups',
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
    /**
     * Gets listing provider
     * Requires authentication as user
     * @returns LiveTv_ListingProviderTypeInfo Operation successful. Returning a ListingProviderTypeInfo[] object.
     * @throws ApiError
     */
    public getLivetvListingprovidersAvailable(): CancelablePromise<Array<LiveTv_ListingProviderTypeInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/ListingProviders/Available',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a live tv channel
     * No authentication required
     * @param id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getLivetvLiverecordingsByIdStream(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/LiveRecordings/{Id}/stream',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a live tv channel
     * No authentication required
     * @param id
     * @param container
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getLivetvLivestreamfilesByIdByContainer(
        id: string,
        container: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/LiveStreamFiles/{Id}/stream.{Container}',
            path: {
                'Id': id,
                'Container': container,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets available lineups
     * Requires authentication as user
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getLivetvListingprovidersSchedulesdirectCountries(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/ListingProviders/SchedulesDirect/Countries',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets a recording group
     * Requires authentication as user
     * @param id Recording group Id
     * @returns BaseItemDto Operation successful. Returning a BaseItemDto object.
     * @throws ApiError
     */
    public getLivetvRecordingsGroupsById(
        id: string,
    ): CancelablePromise<BaseItemDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/LiveTv/Recordings/Groups/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Resets a tv tuner
     * Requires authentication as user
     * @param id Tuner Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postLivetvTunersByIdReset(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/LiveTv/Tuners/{Id}/Reset',
            path: {
                'Id': id,
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
