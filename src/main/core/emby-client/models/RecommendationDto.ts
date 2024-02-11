/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseItemDto } from './BaseItemDto';
export type RecommendationDto = {
    Items?: Array<BaseItemDto>;
    RecommendationType?: RecommendationDto.RecommendationType;
    BaselineItemName?: string;
    CategoryId?: number;
};
export namespace RecommendationDto {
    export enum RecommendationType {
        SIMILAR_TO_RECENTLY_PLAYED = 'SimilarToRecentlyPlayed',
        SIMILAR_TO_LIKED_ITEM = 'SimilarToLikedItem',
        HAS_DIRECTOR_FROM_RECENTLY_PLAYED = 'HasDirectorFromRecentlyPlayed',
        HAS_ACTOR_FROM_RECENTLY_PLAYED = 'HasActorFromRecentlyPlayed',
        HAS_LIKED_DIRECTOR = 'HasLikedDirector',
        HAS_LIKED_ACTOR = 'HasLikedActor',
    }
}

