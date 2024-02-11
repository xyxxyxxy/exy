/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BaseItemPerson = {
    Name?: string;
    Id?: string;
    Role?: string;
    Type?: BaseItemPerson.Type;
    PrimaryImageTag?: string;
};
export namespace BaseItemPerson {
    export enum Type {
        ACTOR = 'Actor',
        DIRECTOR = 'Director',
        WRITER = 'Writer',
        PRODUCER = 'Producer',
        GUEST_STAR = 'GuestStar',
        COMPOSER = 'Composer',
        CONDUCTOR = 'Conductor',
        LYRICIST = 'Lyricist',
    }
}

