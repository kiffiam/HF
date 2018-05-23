import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { SearchResult } from "../../../models/search-result.type";
import { SearchService } from "../../../services/search.service";
import { Movie } from "../../../models/movie.type";

@Component({
    selector: "search-movie",
    templateUrl: "./search-movie.component.html"
})
export class SearchMovieComponent {
    constructor(private searchService: SearchService) { }

    ngOnInit() {
        this.getResults();
    }

    searchTerm: string = "";
    currentPage = 1;
    maxPages = 0;
    searchResults: Observable<SearchResult<Movie>>;

    getResults() {
        /*this.multiSearchResults = this.searchService
        .getMultiSearchResult({ query: this.searchTerm, page: this.currentPage });*/

        this.searchResults = this.searchService.getMovieResult( this.searchTerm/*, this.currentPage*/ );
        this.searchResults.subscribe(r => this.maxPages);

        //this.searchResults.subscribe(r => {this.maxPages = Math.ceil(r.allResults / 5);
        //this.currentPage = r.page;
    }

}

