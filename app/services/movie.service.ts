import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
//import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from "../models/movie.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";


@Injectable()
export class MovieService {
    baseUrl = "https://api.themoviedb.org/3";

    constructor(private http: HttpClient) {
    }

<<<<<<< HEAD
    getMovies(category: string, options?: { page?: number }): Observable<SearchResult<Movie>> {
        let url = this.baseUrl + "/movie/" + category;
=======

    private movies: Movie[];
>>>>>>> parent of 333eaa7... sarfosmielot elbaszom

        let params = new HttpParams();
        params = (options && options.page) ? params.append('page', '' + options.page) : params;

        return this.http.get<SearchResult<Movie>>(url, { params: params });
    }

<<<<<<< HEAD
=======
    /*getMovie(id: number): Observable<Movie> {
        let url = this.baseUrl + "/movie/" + id;
>>>>>>> parent of 333eaa7... sarfosmielot elbaszom

    getMovie(id: number): Observable<Movie> {
        let url = this.baseUrl + "/movie/" + id;

<<<<<<< HEAD
        return this.http.get<Movie>(url);
    }

    /*getMovieCredits(id: number): Observable<MovieCredits> {
        let url = this.baseUrl + "/movie/" + id + "/credits";
=======
>>>>>>> parent of 333eaa7... sarfosmielot elbaszom

        return this.http.get<MovieCredits>(url);
    }*/
}