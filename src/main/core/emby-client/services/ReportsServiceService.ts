/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbyReports_Api_Model_ReportHeader } from '../models/EmbyReports_Api_Model_ReportHeader';
import type { EmbyReports_Api_Model_ReportResult } from '../models/EmbyReports_Api_Model_ReportResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReportsServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets activities entries
     * No authentication required
     * @param reportView The report view. Values (ReportData, ReportActivities)
     * @param displayType The report display type. Values (None, Screen, Export, ScreenExport)
     * @param hasQueryLimit Optional. If specified, results will include all records.
     * @param groupBy Optional. If specified, results will include grouped records.
     * @param reportColumns Optional. The columns to show.
     * @param startIndex Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param limit Optional. The maximum number of records to return
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @returns EmbyReports_Api_Model_ReportResult Operation successful. Returning a ReportResult object.
     * @throws ApiError
     */
    public getReportsActivities(
        reportView: string,
        displayType: string,
        hasQueryLimit?: boolean,
        groupBy?: string,
        reportColumns?: string,
        startIndex?: number | null,
        limit?: number | null,
        includeItemTypes?: string,
    ): CancelablePromise<EmbyReports_Api_Model_ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Reports/Activities',
            query: {
                'ReportView': reportView,
                'DisplayType': displayType,
                'HasQueryLimit': hasQueryLimit,
                'GroupBy': groupBy,
                'ReportColumns': reportColumns,
                'StartIndex': startIndex,
                'Limit': limit,
                'IncludeItemTypes': includeItemTypes,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets reports headers based on library items
     * No authentication required
     * @param reportView The report view. Values (ReportData, ReportActivities)
     * @param displayType The report display type. Values (None, Screen, Export, ScreenExport)
     * @param includeItemTypes Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
     * @param reportColumns Optional. The columns to show.
     * @returns EmbyReports_Api_Model_ReportHeader Operation successful. Returning a List<ReportHeader> object.
     * @throws ApiError
     */
    public getReportsHeaders(
        reportView: string,
        displayType: string,
        includeItemTypes?: string,
        reportColumns?: string,
    ): CancelablePromise<Array<EmbyReports_Api_Model_ReportHeader>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Reports/Headers',
            query: {
                'ReportView': reportView,
                'DisplayType': displayType,
                'IncludeItemTypes': includeItemTypes,
                'ReportColumns': reportColumns,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets reports based on library items
     * No authentication required
     * @param reportView The report view. Values (ReportData, ReportActivities)
     * @param displayType The report display type. Values (None, Screen, Export, ScreenExport)
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
     * @param userId User Id
     * @param minOfficialRating Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
     * @param isLocked Optional filter by items that are locked.
     * @param isPlaceHolder Optional filter by items that are placeholders
     * @param hasOfficialRating Optional filter by items that have official ratings
     * @param collapseBoxSetItems Whether or not to hide items behind their boxsets.
     * @param is3D Optional filter by items that are 3D, or not.
     * @param seriesStatus Optional filter by Series Status. Allows multiple, comma delimeted.
     * @param nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
     * @param nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
     * @param nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
     * @param hasQueryLimit Optional. If specified, results will include all records.
     * @param groupBy Optional. If specified, results will include grouped records.
     * @param reportColumns Optional. The columns to show.
     * @returns EmbyReports_Api_Model_ReportResult Operation successful. Returning a ReportResult object.
     * @throws ApiError
     */
    public getReportsItems(
        reportView: string,
        displayType: string,
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
        userId?: string,
        minOfficialRating?: string,
        isLocked?: boolean | null,
        isPlaceHolder?: boolean | null,
        hasOfficialRating?: boolean | null,
        collapseBoxSetItems?: boolean | null,
        is3D?: boolean | null,
        seriesStatus?: string,
        nameStartsWithOrGreater?: string,
        nameStartsWith?: string,
        nameLessThan?: string,
        hasQueryLimit?: boolean,
        groupBy?: string,
        reportColumns?: string,
    ): CancelablePromise<EmbyReports_Api_Model_ReportResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Reports/Items',
            query: {
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
                'UserId': userId,
                'MinOfficialRating': minOfficialRating,
                'IsLocked': isLocked,
                'IsPlaceHolder': isPlaceHolder,
                'HasOfficialRating': hasOfficialRating,
                'CollapseBoxSetItems': collapseBoxSetItems,
                'Is3D': is3D,
                'SeriesStatus': seriesStatus,
                'NameStartsWithOrGreater': nameStartsWithOrGreater,
                'NameStartsWith': nameStartsWith,
                'NameLessThan': nameLessThan,
                'ReportView': reportView,
                'DisplayType': displayType,
                'HasQueryLimit': hasQueryLimit,
                'GroupBy': groupBy,
                'ReportColumns': reportColumns,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Downloads report
     * No authentication required
     * @param reportView The report view. Values (ReportData, ReportActivities)
     * @param displayType The report display type. Values (None, Screen, Export, ScreenExport)
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
     * @param userId User Id
     * @param minOfficialRating Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
     * @param isLocked Optional filter by items that are locked.
     * @param isPlaceHolder Optional filter by items that are placeholders
     * @param hasOfficialRating Optional filter by items that have official ratings
     * @param collapseBoxSetItems Whether or not to hide items behind their boxsets.
     * @param is3D Optional filter by items that are 3D, or not.
     * @param seriesStatus Optional filter by Series Status. Allows multiple, comma delimeted.
     * @param nameStartsWithOrGreater Optional filter by items whose name is sorted equally or greater than a given input string.
     * @param nameStartsWith Optional filter by items whose name is sorted equally than a given input string.
     * @param nameLessThan Optional filter by items whose name is equally or lesser than a given input string.
     * @param hasQueryLimit Optional. If specified, results will include all records.
     * @param groupBy Optional. If specified, results will include grouped records.
     * @param reportColumns Optional. The columns to show.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getReportsItemsDownload(
        reportView: string,
        displayType: string,
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
        userId?: string,
        minOfficialRating?: string,
        isLocked?: boolean | null,
        isPlaceHolder?: boolean | null,
        hasOfficialRating?: boolean | null,
        collapseBoxSetItems?: boolean | null,
        is3D?: boolean | null,
        seriesStatus?: string,
        nameStartsWithOrGreater?: string,
        nameStartsWith?: string,
        nameLessThan?: string,
        hasQueryLimit?: boolean,
        groupBy?: string,
        reportColumns?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Reports/Items/Download',
            query: {
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
                'UserId': userId,
                'MinOfficialRating': minOfficialRating,
                'IsLocked': isLocked,
                'IsPlaceHolder': isPlaceHolder,
                'HasOfficialRating': hasOfficialRating,
                'CollapseBoxSetItems': collapseBoxSetItems,
                'Is3D': is3D,
                'SeriesStatus': seriesStatus,
                'NameStartsWithOrGreater': nameStartsWithOrGreater,
                'NameStartsWith': nameStartsWith,
                'NameLessThan': nameLessThan,
                'ReportView': reportView,
                'DisplayType': displayType,
                'HasQueryLimit': hasQueryLimit,
                'GroupBy': groupBy,
                'ReportColumns': reportColumns,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
