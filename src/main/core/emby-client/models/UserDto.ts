/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration_UserConfiguration } from './Configuration_UserConfiguration';
import type { Users_UserPolicy } from './Users_UserPolicy';
export type UserDto = {
    Name?: string;
    ServerId?: string;
    ServerName?: string;
    ConnectUserName?: string;
    ConnectLinkType?: UserDto.ConnectLinkType;
    Id?: string;
    PrimaryImageTag?: string;
    HasPassword?: boolean;
    HasConfiguredPassword?: boolean;
    HasConfiguredEasyPassword?: boolean;
    EnableAutoLogin?: boolean | null;
    LastLoginDate?: string | null;
    LastActivityDate?: string | null;
    Configuration?: Configuration_UserConfiguration;
    Policy?: Users_UserPolicy;
    PrimaryImageAspectRatio?: number | null;
};
export namespace UserDto {
    export enum ConnectLinkType {
        LINKED_USER = 'LinkedUser',
        GUEST = 'Guest',
    }
}

