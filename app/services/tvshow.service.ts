import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Tvshow } from "../models/tvshow.type";
//import { Company } from "../models/company.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";

@Injectable()
export class TvShowService {
    private tvshows: Tvshow[];
    constructor() {
        this.load();
    }

    private load(){

    }
    
}