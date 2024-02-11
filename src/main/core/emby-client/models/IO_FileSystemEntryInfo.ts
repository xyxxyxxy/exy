/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IO_FileSystemEntryInfo = {
    Name?: string;
    Path?: string;
    Type?: IO_FileSystemEntryInfo.Type;
};
export namespace IO_FileSystemEntryInfo {
    export enum Type {
        FILE = 'File',
        DIRECTORY = 'Directory',
        NETWORK_COMPUTER = 'NetworkComputer',
        NETWORK_SHARE = 'NetworkShare',
    }
}

