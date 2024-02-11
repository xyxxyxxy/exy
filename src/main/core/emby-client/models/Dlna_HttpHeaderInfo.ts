/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Dlna_HttpHeaderInfo = {
    Name?: string;
    Value?: string;
    Match?: Dlna_HttpHeaderInfo.Match;
};
export namespace Dlna_HttpHeaderInfo {
    export enum Match {
        EQUALS = 'Equals',
        REGEX = 'Regex',
        SUBSTRING = 'Substring',
    }
}

