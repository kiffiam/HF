import { Injectable } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Person } from "../models/person.type";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonService {
    url = 'https://api.themoviedb.org/3';
    apikey = '?api_key=5de0f16390c3aa37bfd7a6f05e6b3fe4'
    
    constructor(private http: HttpClient) {
    }

    getPerson(id:number): Observable<Person> {
        let url = this.url +"/person/" + id + this.apikey;
        return this.http.get<Person>(url);
    }
    

}