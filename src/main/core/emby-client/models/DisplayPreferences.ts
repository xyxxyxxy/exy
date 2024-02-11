/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DisplayPreferences = {
    Id?: string;
    ViewType?: string;
    SortBy?: string;
    IndexBy?: string;
    RememberIndexing?: boolean;
    PrimaryImageHeight?: number;
    PrimaryImageWidth?: number;
    CustomPrefs?: Record<string, string>;
    ScrollDirection?: DisplayPreferences.ScrollDirection;
    ShowBackdrop?: boolean;
    RememberSorting?: boolean;
    SortOrder?: DisplayPreferences.SortOrder;
    ShowSidebar?: boolean;
    Client?: string;
};
export namespace DisplayPreferences {
    export enum ScrollDirection {
        HORIZONTAL = 'Horizontal',
        VERTICAL = 'Vertical',
    }
    export enum SortOrder {
        ASCENDING = 'Ascending',
        DESCENDING = 'Descending',
    }
}

