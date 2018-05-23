export interface Tvshow {
    backdrop_path: string;
    //created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    //genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    name: string;
    //networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    //production_companies: ProductionCompany[];
    //seasons: Season[];
    status: string;
    type: string;
    vote_average: number;
vote_count: number;
}

export interface Cast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}

export interface TvShowCredits {
    id: number;
    cast: Cast[];
}