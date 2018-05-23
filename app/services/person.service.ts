import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Person } from "../models/person.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";

@Injectable()
export class PersonService {
    
    

    private persons: Person[];
    constructor() {

    }

    getPerson(): any {
            throw new Error("Method not implemented.");
    }
    

}