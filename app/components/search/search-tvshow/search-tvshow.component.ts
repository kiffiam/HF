import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { SearchResult } from "../../../models/search-result.type";
import { SearchService } from "../../../services/search.service";
import { Movie } from "../../../models/movie.type";
import { Tvshow } from "../../../models/tvshow.type";

@Component({
    selector: "search-tvshow",
    templateUrl: "./search-tvshow.component.html"
})
export class SearchTvShowComponent {
    constructor(private searchService: SearchService) { }

    ngOnInit() {
        this.getResults();
    }

    searchTerm: string = "";
    currentPage = 1;
    maxPages = 0;
    searchResults: Observable<SearchResult<Tvshow>>;

    getResults() {
        /*this.multiSearchResults = this.searchService
        .getMultiSearchResult({ query: this.searchTerm, page: this.currentPage });*/

        this.searchResults = this.searchService.getTvshowResult( this.searchTerm/*, this.currentPage*/ );
        this.searchResults.subscribe(r => this.maxPages);

        //this.searchResults.subscribe(r => {this.maxPages = Math.ceil(r.allResults / 5);
        //this.currentPage = r.page;
    }

}

