export interface FilterMovie {
    key: keysMovie,
    value: string | undefined;
}
export interface FilterSerie{
    key: keysSerie,
    value: string | undefined;
}
// For use withProvider, you need use withProvider and with watchRegion
export type keysMovie = 
    '&with_cast=' |
    '&with_companies='|
    '&with_genres='|
    '&sort_by='|
    '&with_watch_providers='|
    '&watch_region=';

export type keysSerie = 
    '&with_companies='|
    '&with_genres='|
    '&sort_by='|
    '&with_watch_providers='|
    '&watch_region=';

export enum sortBy{
    popularityAsc = 'popularity.asc',
    popularityDesc = 'popularity.desc',
    originalTitleAsc = 'original_title.asc',
    originalTitleDesc = 'original_title.desc',
    revenueAsc = 'revenue.asc',
    revenueDesc = 'revenue.desc',
    primaryReleaseAsc = 'primary_release.asc',
    primaryReleaseDesc = 'primary_release.desc',
    titleAsc = 'title.asc',
    titleDesc = 'title.desc',
    voteAverageAsc = 'vote_average.asc',
    voteAverageDesc = 'vote_average.desc',
    voteCountAsc = 'vote_count.asc',
    voteCountDesc = 'vote_count.desc'
}
export type media =
    'movies'|
    'series'|
    'providers'|
    'casts';
