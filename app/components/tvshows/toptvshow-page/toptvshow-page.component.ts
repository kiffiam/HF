import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../../models/movie.type";
import { SearchResult } from "../../../models/search-result.type";
import { TvShowService } from "../../../services/tvshow.service";
import { Tvshow } from "../../../models/tvshow.type";

@Component({
    selector: "toptvshow-page",
    templateUrl: "./toptvshow-page.component.html"
})
export class TopTvShowPageComponent {
    constructor(private TvShowService: TvShowService) { }
    ngOnInit() {
        this.getResults();
}
        tvshows: Observable<SearchResult<Tvshow>>;

        getResults() {
            
    }
}