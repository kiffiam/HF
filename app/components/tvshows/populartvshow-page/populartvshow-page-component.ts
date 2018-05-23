import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../../models/movie.type";
import { SearchResult } from "../../../models/search-result.type";
import { TvShowService } from "../../../services/tvshow.service";
import { Tvshow } from "../../../models/tvshow.type";

@Component({
    selector: "populartvshow-page",
    templateUrl: "./populartvshow-page.component.html"
})
export class PopularTvShowPageComponent implements OnInit{

    constructor(private tvShowService: TvShowService) { }

    tvshows: Observable<SearchResult<Tvshow>>;


    ngOnInit() {
        this.getResults();
    }

    getResults() {
        this.tvshows = this.tvShowService.getPopularTvShows();
        //this.tvshows.subscribe(r => this.maxPages);
    }
}