/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Users_ForgotPasswordResult = {
    Action?: Users_ForgotPasswordResult.Action;
    PinFile?: string;
    PinExpirationDate?: string | null;
};
export namespace Users_ForgotPasswordResult {
    export enum Action {
        CONTACT_ADMIN = 'ContactAdmin',
        PIN_CODE = 'PinCode',
        IN_NETWORK_REQUIRED = 'InNetworkRequired',
    }
}

