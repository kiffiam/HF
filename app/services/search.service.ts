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

    constructor(private http: HttpClient) {

    }

    getFightClub(): Observable<Movie> {
        let url = "https://api.themoviedb.org/3/movie/550";

        return this.http.get<Movie>(url);
    }

    getSearchResult(){
        
    }

}