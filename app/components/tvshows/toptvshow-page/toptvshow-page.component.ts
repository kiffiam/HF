import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../../models/movie.type";
import { SearchResult } from "../../../models/search-result.type";
import { TvShowService } from "../../../services/tvshow.service";
import { Tvshow } from "../../../models/tvshow.type";

@Component({
    selector: "toptvshow-page",
    templateUrl: "./toptvshow-page.component.html"
})
export class TopTvShowPageComponent implements OnInit{

    constructor(private tvShowService: TvShowService) { }

    tvshows: Observable<SearchResult<Tvshow>>;
    
    currentPage = 1;
    maxPages = 0;


    ngOnInit() {
        this.getResults();
    }

    getResults() {
        this.tvshows = this.tvShowService.getTopTvShows();
        this.tvshows.subscribe(r => this.maxPages);
    }
}