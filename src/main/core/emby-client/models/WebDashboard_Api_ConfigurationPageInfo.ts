/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WebDashboard_Api_ConfigurationPageInfo = {
    Name?: string;
    EnableInMainMenu?: boolean;
    MenuSection?: string;
    MenuIcon?: string;
    DisplayName?: string;
    ConfigurationPageType?: WebDashboard_Api_ConfigurationPageInfo.ConfigurationPageType;
    PluginId?: string;
};
export namespace WebDashboard_Api_ConfigurationPageInfo {
    export enum ConfigurationPageType {
        PLUGIN_CONFIGURATION = 'PluginConfiguration',
        NONE = 'None',
    }
}

