/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientCapabilities } from '../models/ClientCapabilities';
import type { GeneralCommand } from '../models/GeneralCommand';
import type { NameIdPair } from '../models/NameIdPair';
import type { PlayRequest } from '../models/PlayRequest';
import type { PlaystateRequest } from '../models/PlaystateRequest';
import type { Session_SessionInfo } from '../models/Session_SessionInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SessionsServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of sessions
     * Requires authentication as user
     * @param controllableByUserId Optional. Filter by sessions that a given user is allowed to remote control.
     * @param deviceId Optional. Filter by device id.
     * @returns Session_SessionInfo Operation successful. Returning a SessionInfo[] object.
     * @throws ApiError
     */
    public getSessions(
        controllableByUserId?: string,
        deviceId?: string,
    ): CancelablePromise<Array<Session_SessionInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Sessions',
            query: {
                'ControllableByUserId': controllableByUserId,
                'DeviceId': deviceId,
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
     * Requires authentication as administrator
     * @returns NameIdPair Operation successful. Returning a NameIdPair[] object.
     * @throws ApiError
     */
    public getAuthProviders(): CancelablePromise<Array<NameIdPair>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Auth/Providers',
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
     * @param app App
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postAuthKeys(
        app: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Auth/Keys',
            query: {
                'App': app,
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
     * Requires authentication as administrator
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public getAuthKeys(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Auth/Keys',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Reports that a session has ended
     * Requires authentication as user
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsLogout(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/Logout',
            errors: {
                400: `Bad Request. Server cannot process request.`,
                401: `Unauthorized. Client needs to authenticate.`,
                403: `Forbidden. No permission for the reqested operation.`,
                404: `Resource not found or unavailable.`,
            },
        });
    }
    /**
     * Updates capabilities for a device
     * Requires authentication as user
     * @param id Session Id
     * @param playableMediaTypes A list of playable media types, comma delimited. Audio, Video, Book, Game, Photo.
     * @param supportedCommands A list of supported remote control commands, comma delimited
     * @param supportsMediaControl Determines whether media can be played remotely.
     * @param supportsSync Determines whether sync is supported.
     * @param supportsPersistentIdentifier Determines whether the device supports a unique identifier.
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsCapabilities(
        id: string,
        playableMediaTypes?: string,
        supportedCommands?: string,
        supportsMediaControl?: boolean,
        supportsSync?: boolean,
        supportsPersistentIdentifier?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/Capabilities',
            query: {
                'Id': id,
                'PlayableMediaTypes': playableMediaTypes,
                'SupportedCommands': supportedCommands,
                'SupportsMediaControl': supportsMediaControl,
                'SupportsSync': supportsSync,
                'SupportsPersistentIdentifier': supportsPersistentIdentifier,
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
     * Requires authentication as administrator
     * @param key Auth Key
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public deleteAuthKeysByKey(
        key: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Auth/Keys/{Key}',
            path: {
                'Key': key,
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
     * Instructs a session to browse to an item or view
     * Requires authentication as user
     * @param id Session Id
     * @param itemType The type of item to browse to.
     * @param itemId The Id of the item.
     * @param itemName The name of the item.
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsByIdViewing(
        id: string,
        itemType: string,
        itemId: string,
        itemName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/Viewing',
            path: {
                'Id': id,
            },
            query: {
                'ItemType': itemType,
                'ItemId': itemId,
                'ItemName': itemName,
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
     * Issues a command to a client to display a message to the user
     * Requires authentication as user
     * @param id Session Id
     * @param text The message text.
     * @param header The message header.
     * @param timeoutMs The message timeout. If omitted the user will have to confirm viewing the message.
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsByIdMessage(
        id: string,
        text: string,
        header: string,
        timeoutMs?: number | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/Message',
            path: {
                'Id': id,
            },
            query: {
                'Text': text,
                'Header': header,
                'TimeoutMs': timeoutMs,
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
     * Instructs a session to play an item
     * Requires authentication as user
     * @param id Session Id
     * @param itemIds The ids of the items to play, comma delimited
     * @param playCommand The type of play command to issue (PlayNow, PlayNext, PlayLast). Clients who have not yet implemented play next and play last may play now.
     * @param requestBody PlayRequest:
     * @param startPositionTicks The starting position of the first item.
     * @returns any Operation successful. Response content unknown.
     * @throws ApiError
     */
    public postSessionsByIdPlaying(
        id: string,
        itemIds: Array<number>,
        playCommand: 'PlayNow' | 'PlayNext' | 'PlayLast' | 'PlayInstantMix' | 'PlayShuffle',
        requestBody: PlayRequest,
        startPositionTicks?: number | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/Playing',
            path: {
                'Id': id,
            },
            query: {
                'ItemIds': itemIds,
                'StartPositionTicks': startPositionTicks,
                'PlayCommand': playCommand,
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
     * Issues a system command to a client
     * Requires authentication as user
     * @param id Session Id
     * @param requestBody GeneralCommand:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsByIdCommand(
        id: string,
        requestBody: GeneralCommand,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/Command',
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
     * Updates capabilities for a device
     * Requires authentication as user
     * @param id Session Id
     * @param requestBody ClientCapabilities:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsCapabilitiesFull(
        id: string,
        requestBody: ClientCapabilities,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/Capabilities/Full',
            query: {
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
     * Issues a playstate command to a client
     * Requires authentication as user
     * @param id Session Id
     * @param command
     * @param requestBody PlaystateRequest:
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsByIdPlayingByCommand(
        id: string,
        command: 'Stop' | 'Pause' | 'Unpause' | 'NextTrack' | 'PreviousTrack' | 'Seek' | 'Rewind' | 'FastForward' | 'PlayPause',
        requestBody: PlaystateRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/Playing/{Command}',
            path: {
                'Id': id,
                'Command': command,
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
     * Issues a system command to a client
     * Requires authentication as user
     * @param id Session Id
     * @param command The command to send.
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsByIdSystemByCommand(
        id: string,
        command: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/System/{Command}',
            path: {
                'Id': id,
                'Command': command,
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
     * Issues a system command to a client
     * Requires authentication as user
     * @param id Session Id
     * @param command The command to send.
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsByIdCommandByCommand(
        id: string,
        command: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/Command/{Command}',
            path: {
                'Id': id,
                'Command': command,
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
     * Adds an additional user to a session
     * Requires authentication as user
     * @param id Session Id
     * @param userId UserId Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public postSessionsByIdUsersByUserid(
        id: string,
        userId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Sessions/{Id}/Users/{UserId}',
            path: {
                'Id': id,
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
     * Removes an additional user from a session
     * Requires authentication as user
     * @param id Session Id
     * @param userId UserId Id
     * @returns any Operation successful. Empty response.
     * @throws ApiError
     */
    public deleteSessionsByIdUsersByUserid(
        id: string,
        userId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Sessions/{Id}/Users/{UserId}',
            path: {
                'Id': id,
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
