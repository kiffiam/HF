import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Tvshow } from "../models/tvshow.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";

@Injectable()
export class TvShowService {

    constructor(/*private http: HttpClient*/) {
    }

    private tvshows: Tvshow[];

    getTvShows(): any {
        throw new Error("Method not implemented.");
    }

}