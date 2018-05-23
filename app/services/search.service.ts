import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Tvshow } from "../models/tvshow.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";
import { Movie } from "../models/movie.type";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {
    url = "https://api.themoviedb.org/3";
    apikey = '?api_key=5de0f16390c3aa37bfd7a6f05e6b3fe4'

    constructor(private http: HttpClient) {

    }

    getFightClub(): Observable<Movie> {
        let url = "https://api.themoviedb.org/3/movie/550";

        return this.http.get<Movie>(url);
    }

    getMovieResult(query: string/*, page: number */): Observable<SearchResult<Movie>> {
        let url = this.url +"/search/movie" + this.apikey + "&query=" + query;
        return this.http.get<SearchResult<Movie>>(url);
    }

    getTvshowResult(query: string/*, page: number */): Observable<SearchResult<Tvshow>> {
        let url = this.url +"/search/tv" + this.apikey + "&query=" + query;
        return this.http.get<SearchResult<Tvshow>>(url);
    }

}