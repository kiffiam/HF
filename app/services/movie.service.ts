import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie, MovieCredits } from "../models/movie.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";


@Injectable()
export class MovieService {
    url = 'https://api.themoviedb.org/3';
    apikey = '?api_key=5de0f16390c3aa37bfd7a6f05e6b3fe4'

    constructor(private http: HttpClient) {
    }

    private movies: Movie[];

    getMovie(id: number): Observable<Movie> {
        let url = this.url + "/movie/" + id + this.apikey;
        return this.http.get<Movie>(url);
    }

    getTopMovies(): Observable<SearchResult<Movie>> {
        let url = this.url + "/movie/top_rated" + this.apikey;
        return this.http.get<SearchResult<Movie>>(url);
    }

    getMovieCredits(id: number): Observable<MovieCredits> {
        let url = this.url + "/movie/" + id + "/credits" + this.apikey;
        return this.http.get<MovieCredits>(url);
    }


}