import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
//import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from "../models/movie.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";


@Injectable()
export class MovieService {
    baseUrl = "https://api.themoviedb.org/3";

    constructor(/*private http: HttpClient*/) {
    }


    private movies: Movie[];

    getMovies(): any {
        throw new Error("Method not implemented.");
    }

    /*getMovie(id: number): Observable<Movie> {
        let url = this.baseUrl + "/movie/" + id;

        return this.http.get<Movie>(url);
    }*/


}