/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaEncoding_Codecs_Common_Types_BitRate } from './MediaEncoding_Codecs_Common_Types_BitRate';
import type { MediaEncoding_Codecs_Common_Types_ResolutionWithRate } from './MediaEncoding_Codecs_Common_Types_ResolutionWithRate';
export type MediaEncoding_Codecs_Common_Types_LevelInformation = {
    ShortName?: string;
    Description?: string;
    Ordinal?: number | null;
    MaxBitRate?: MediaEncoding_Codecs_Common_Types_BitRate;
    MaxBitRateDisplay?: string;
    Id?: string;
    ResolutionRates?: Array<MediaEncoding_Codecs_Common_Types_ResolutionWithRate>;
    ResolutionRateStrings?: Array<string>;
    ResolutionRatesDisplay?: string;
};

