import { Component } from "@angular/core";
import {TvShowService} from '../../../services/tvshow.service';
import { Observable } from "rxjs/Observable";
import { Tvshow } from "../../../models/tvshow.type";
import { SearchResult } from "../../../models/search-result.type";

@Component({
    selector: "tvshow-page",
    templateUrl: "./tvshow-page.component.html"
})

export class TvShowPageComponent {
    constructor(private TvShowService: TvShowService) { }
    ngOnInit() {
        this.getResults();
}
        tvshow: Observable<SearchResult<Tvshow>>;

        getResults() {
            
    }
}