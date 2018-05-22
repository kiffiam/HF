import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Tvshow } from "../models/tvshow.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";

@Injectable()
export class SearchService {
    
    constructor() {
        this.load();
    }

    private load(){

    }
    
}