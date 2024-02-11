/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Users_UserAction = {
    Id?: string;
    ServerId?: string;
    UserId?: string;
    ItemId?: string;
    Type?: Users_UserAction.Type;
    Date?: string;
    PositionTicks?: number | null;
};
export namespace Users_UserAction {
    export enum Type {
        PLAYED_ITEM = 'PlayedItem',
    }
}

