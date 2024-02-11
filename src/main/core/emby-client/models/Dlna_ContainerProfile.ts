/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dlna_ProfileCondition } from './Dlna_ProfileCondition';
export type Dlna_ContainerProfile = {
    Type?: Dlna_ContainerProfile.Type;
    Conditions?: Array<Dlna_ProfileCondition>;
    Container?: string;
};
export namespace Dlna_ContainerProfile {
    export enum Type {
        AUDIO = 'Audio',
        VIDEO = 'Video',
        PHOTO = 'Photo',
    }
}

