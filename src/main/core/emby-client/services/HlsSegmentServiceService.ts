/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HlsSegmentServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Requires authentication as user
     * @param deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param playSessionId The play session id
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public deleteVideosActiveencodings(
        deviceId: string,
        playSessionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Videos/ActiveEncodings',
            query: {
                'DeviceId': deviceId,
                'PlaySessionId': playSessionId,
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
     * @param playlistId
     * @param segmentId SegmentId
     * @param segmentContainer SegmentContainer
     * @param id Item Id
     * @param container Container
     * @param deviceProfileId Optional. The dlna device profile id to utilize.
     * @param deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param audioCodec Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
     * @param enableAutoStreamCopy Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
     * @param audioSampleRate Optional. Specify a specific audio sample rate, e.g. 44100
     * @param audioBitRate Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
     * @param audioChannels Optional. Specify a specific number of audio channels to encode to, e.g. 2
     * @param maxAudioChannels Optional. Specify a maximum number of audio channels to encode to, e.g. 2
     * @param _static Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false
     * @param profile Optional. Specify a specific h264 profile, e.g. main, baseline, high.
     * @param level Optional. Specify a level for the h264 profile, e.g. 3, 3.1.
     * @param framerate Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
     * @param maxFramerate Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
     * @param copyTimestamps Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
     * @param startTimeTicks Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms
     * @param width Optional. The fixed horizontal resolution of the encoded video.
     * @param height Optional. The fixed vertical resolution of the encoded video.
     * @param maxWidth Optional. The maximum horizontal resolution of the encoded video.
     * @param maxHeight Optional. The maximum vertical resolution of the encoded video.
     * @param videoBitRate Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
     * @param subtitleStreamIndex Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
     * @param subtitleMethod Optional. Specify the subtitle delivery method.
     * @param maxRefFrames Optional.
     * @param maxVideoBitDepth Optional.
     * @param videoCodec Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h264, mpeg4, theora, vpx, wmv.
     * @param audioStreamIndex Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
     * @param videoStreamIndex Optional. The index of the video stream to use. If omitted the first video stream will be used.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getVideosByIdHlsByPlaylistidBySegmentidBySegmentcontainer(
        playlistId: string,
        segmentId: string,
        segmentContainer: string,
        id: string,
        container: string,
        deviceProfileId?: string,
        deviceId?: string,
        audioCodec?: string,
        enableAutoStreamCopy?: boolean,
        audioSampleRate?: number | null,
        audioBitRate?: number | null,
        audioChannels?: number | null,
        maxAudioChannels?: number | null,
        _static?: boolean,
        profile?: string,
        level?: string,
        framerate?: number | null,
        maxFramerate?: number | null,
        copyTimestamps?: boolean,
        startTimeTicks?: number | null,
        width?: number | null,
        height?: number | null,
        maxWidth?: number | null,
        maxHeight?: number | null,
        videoBitRate?: number | null,
        subtitleStreamIndex?: number | null,
        subtitleMethod?: 'Encode' | 'Embed' | 'External' | 'Hls',
        maxRefFrames?: number | null,
        maxVideoBitDepth?: number | null,
        videoCodec?: string,
        audioStreamIndex?: number | null,
        videoStreamIndex?: number | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Videos/{Id}/hls/{PlaylistId}/{SegmentId}.{SegmentContainer}',
            path: {
                'PlaylistId': playlistId,
                'SegmentId': segmentId,
                'SegmentContainer': segmentContainer,
                'Id': id,
            },
            query: {
                'DeviceProfileId': deviceProfileId,
                'DeviceId': deviceId,
                'Container': container,
                'AudioCodec': audioCodec,
                'EnableAutoStreamCopy': enableAutoStreamCopy,
                'AudioSampleRate': audioSampleRate,
                'AudioBitRate': audioBitRate,
                'AudioChannels': audioChannels,
                'MaxAudioChannels': maxAudioChannels,
                'Static': _static,
                'Profile': profile,
                'Level': level,
                'Framerate': framerate,
                'MaxFramerate': maxFramerate,
                'CopyTimestamps': copyTimestamps,
                'StartTimeTicks': startTimeTicks,
                'Width': width,
                'Height': height,
                'MaxWidth': maxWidth,
                'MaxHeight': maxHeight,
                'VideoBitRate': videoBitRate,
                'SubtitleStreamIndex': subtitleStreamIndex,
                'SubtitleMethod': subtitleMethod,
                'MaxRefFrames': maxRefFrames,
                'MaxVideoBitDepth': maxVideoBitDepth,
                'VideoCodec': videoCodec,
                'AudioStreamIndex': audioStreamIndex,
                'VideoStreamIndex': videoStreamIndex,
            },
            errors: {
                400: `Bad Request. Server cannot process request.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
}
