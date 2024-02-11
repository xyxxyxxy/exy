/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageInfo } from '../models/ImageInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ImageServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * No authentication required
     * @param id Item Id
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param type Image Type
     * @param index Image Index
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getItemsByIdImagesByTypeByIndexByTagByFormatByMaxwidthByMaxheightByPercentplayedByUnplayedcount(
        id: string,
        maxWidth: number | null,
        maxHeight: number | null,
        tag: string,
        format: string,
        percentPlayed: number | null,
        unplayedCount: number | null,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        addPlayedIndicator?: boolean,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/Images/{Type}/{Index}/{Tag}/{Format}/{MaxWidth}/{MaxHeight}/{PercentPlayed}/{UnplayedCount}',
            path: {
                'Id': id,
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Tag': tag,
                'Format': format,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'Type': type,
                'Index': index,
            },
            query: {
                'Width': width,
                'Height': height,
                'Quality': quality,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'AddPlayedIndicator': addPlayedIndicator,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id Item Id
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param type Image Type
     * @param index Image Index
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headItemsByIdImagesByTypeByIndexByTagByFormatByMaxwidthByMaxheightByPercentplayedByUnplayedcount(
        id: string,
        maxWidth: number | null,
        maxHeight: number | null,
        tag: string,
        format: string,
        percentPlayed: number | null,
        unplayedCount: number | null,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        addPlayedIndicator?: boolean,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Items/{Id}/Images/{Type}/{Index}/{Tag}/{Format}/{MaxWidth}/{MaxHeight}/{PercentPlayed}/{UnplayedCount}',
            path: {
                'Id': id,
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Tag': tag,
                'Format': format,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'Type': type,
                'Index': index,
            },
            query: {
                'Width': width,
                'Height': height,
                'Quality': quality,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'AddPlayedIndicator': addPlayedIndicator,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Gets information about an item's images
     * Requires authentication as user
     * @param id Item Id
     * @returns ImageInfo Operation successful. Returning a List<ImageInfo> object.
     * @throws ApiError
     */
    public getItemsByIdImages(
        id: string,
    ): CancelablePromise<Array<ImageInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/Images',
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
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getArtistsByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Artists/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headArtistsByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Artists/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getGamegenresByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/GameGenres/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headGamegenresByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/GameGenres/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getGenresByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Genres/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headGenresByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Genres/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id Item Id
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getItemsByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id Item Id
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headItemsByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Items/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param id Item Id
     * @param type Image Type
     * @param requestBody Binary stream
     * @param index Image Index
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        requestBody: Blob,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'Index': index,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param id Item Id
     * @param type Image Type
     * @param index Image Index
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteItemsByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Items/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'Index': index,
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
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getMusicgenresByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/MusicGenres/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headMusicgenresByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/MusicGenres/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getPersonsByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Persons/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headPersonsByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Persons/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getStudiosByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Studios/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headStudiosByNameImagesByType(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Studios/{Name}/Images/{Type}',
            path: {
                'Name': name,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id User Id
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getUsersByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id User Id
     * @param type Image Type
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @param index Image Index
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headUsersByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Users/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
                'Index': index,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param id User Id
     * @param type Image Type
     * @param requestBody Binary stream
     * @param index Image Index
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        requestBody: Blob,
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'Index': index,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
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
     * @param id User Id
     * @param type Image Type
     * @param index Image Index
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteUsersByIdImagesByType(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{Id}/Images/{Type}',
            path: {
                'Id': id,
                'Type': type,
            },
            query: {
                'Index': index,
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
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getArtistsByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Artists/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headArtistsByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Artists/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getGamegenresByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/GameGenres/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headGamegenresByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/GameGenres/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getGenresByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Genres/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headGenresByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Genres/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id Item Id
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getItemsByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Items/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id Item Id
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headItemsByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Items/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param id Item Id
     * @param type Image Type
     * @param index Image Index
     * @param requestBody Binary stream
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as administrator
     * @param id Item Id
     * @param type Image Type
     * @param index Image Index
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteItemsByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Items/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
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
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getMusicgenresByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/MusicGenres/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headMusicgenresByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/MusicGenres/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getPersonsByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Persons/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headPersonsByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Persons/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getStudiosByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Studios/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param name Item name
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headStudiosByNameImagesByTypeByIndex(
        name: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Studios/{Name}/Images/{Type}/{Index}',
            path: {
                'Name': name,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id User Id
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getUsersByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Users/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * No authentication required
     * @param id User Id
     * @param type Image Type
     * @param index Image Index
     * @param maxWidth The maximum image width to return.
     * @param maxHeight The maximum image height to return.
     * @param width The fixed image width to return.
     * @param height The fixed image height to return.
     * @param quality Optional quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
     * @param tag Optional. Supply the cache tag from the item object to receive strong caching headers.
     * @param cropWhitespace Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
     * @param enableImageEnhancers Enable or disable image enhancers such as cover art.
     * @param format Determines the output foramt of the image - original,gif,jpg,png
     * @param addPlayedIndicator Optional. Add a played indicator
     * @param percentPlayed Optional percent to render for the percent played overlay
     * @param unplayedCount Optional unplayed count overlay to render
     * @param backgroundColor Optional. Apply a background color for transparent images.
     * @param foregroundLayer Optional. Apply a foreground layer on top of the image.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public headUsersByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        maxWidth?: number | null,
        maxHeight?: number | null,
        width?: number | null,
        height?: number | null,
        quality?: number | null,
        tag?: string,
        cropWhitespace?: boolean | null,
        enableImageEnhancers?: boolean,
        format?: string,
        addPlayedIndicator?: boolean,
        percentPlayed?: number | null,
        unplayedCount?: number | null,
        backgroundColor?: string,
        foregroundLayer?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/Users/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
            },
            query: {
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'Width': width,
                'Height': height,
                'Quality': quality,
                'Tag': tag,
                'CropWhitespace': cropWhitespace,
                'EnableImageEnhancers': enableImageEnhancers,
                'Format': format,
                'AddPlayedIndicator': addPlayedIndicator,
                'PercentPlayed': percentPlayed,
                'UnplayedCount': unplayedCount,
                'BackgroundColor': backgroundColor,
                'ForegroundLayer': foregroundLayer,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Requires authentication as user
     * @param id User Id
     * @param type Image Type
     * @param index Image Index
     * @param requestBody Binary stream
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postUsersByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        requestBody: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Users/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
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
     * @param id User Id
     * @param type Image Type
     * @param index Image Index
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteUsersByIdImagesByTypeByIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Users/{Id}/Images/{Type}/{Index}',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
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
     * Updates the index for an item image
     * Requires authentication as administrator
     * @param id Item Id
     * @param type Image Type
     * @param index Image Index
     * @param newIndex The new image index
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postItemsByIdImagesByTypeByIndexIndex(
        id: string,
        type: 'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail',
        index: number,
        newIndex: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Items/{Id}/Images/{Type}/{Index}/Index',
            path: {
                'Id': id,
                'Type': type,
                'Index': index,
            },
            query: {
                'NewIndex': newIndex,
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
