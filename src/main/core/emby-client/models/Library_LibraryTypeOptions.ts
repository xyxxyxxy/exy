/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration_ImageOption } from './Configuration_ImageOption';
import type { Library_LibraryOptionInfo } from './Library_LibraryOptionInfo';
export type Library_LibraryTypeOptions = {
    Type?: string;
    MetadataFetchers?: Array<Library_LibraryOptionInfo>;
    ImageFetchers?: Array<Library_LibraryOptionInfo>;
    SupportedImageTypes?: Array<'Primary' | 'Art' | 'Backdrop' | 'Banner' | 'Logo' | 'Thumb' | 'Disc' | 'Box' | 'Screenshot' | 'Menu' | 'Chapter' | 'BoxRear' | 'Thumbnail'>;
    DefaultImageOptions?: Array<Configuration_ImageOption>;
};

