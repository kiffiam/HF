import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Tvshow } from "../models/tvshow.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TvShowService {
    url = 'https://api.themoviedb.org/3';
    apikey = '?api_key=5de0f16390c3aa37bfd7a6f05e6b3fe4'

    constructor(private http: HttpClient) {
    }

    private tvshows: Tvshow[];

    getTvShows(): any {
        throw new Error("Method not implemented.");
    }

    /*getTvShow(:id){

    }*/

    getTopTvShows(): Observable<SearchResult<Tvshow>> {
        let url = this.url +"/tv/top_rated" + this.apikey;
        return this.http.get<SearchResult<Tvshow>>(url);
    }

}