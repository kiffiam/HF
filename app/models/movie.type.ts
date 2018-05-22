export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    //genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: any;
    release_date: string;
    revenue: number;
    runtime: number;
    //spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
