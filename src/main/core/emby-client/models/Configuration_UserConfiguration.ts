/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Configuration_UserConfiguration = {
    AudioLanguagePreference?: string;
    PlayDefaultAudioTrack?: boolean;
    SubtitleLanguagePreference?: string;
    DisplayMissingEpisodes?: boolean;
    GroupedFolders?: Array<string>;
    SubtitleMode?: Configuration_UserConfiguration.SubtitleMode;
    DisplayCollectionsView?: boolean;
    EnableLocalPassword?: boolean;
    OrderedViews?: Array<string>;
    LatestItemsExcludes?: Array<string>;
    MyMediaExcludes?: Array<string>;
    HidePlayedInLatest?: boolean;
    RememberAudioSelections?: boolean;
    RememberSubtitleSelections?: boolean;
    EnableNextEpisodeAutoPlay?: boolean;
};
export namespace Configuration_UserConfiguration {
    export enum SubtitleMode {
        DEFAULT = 'Default',
        ALWAYS = 'Always',
        ONLY_FORCED = 'OnlyForced',
        NONE = 'None',
        SMART = 'Smart',
    }
}

