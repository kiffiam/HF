import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { SearchResult } from "../../models/search-result.type";
import { SearchService } from "../../services/search.service";

@Component({
    selector: "search-page",
    templateUrl: "./search-page.component.html"
})
export class SearchPageComponent {
    constructor(private searchService: SearchService) { }

    ngOnInit() {
        this.getResults();
    }

    searchTerm = "";
    //multiSearchResults: Observable<SearchResult<MultiSearchResult>>;

    getResults() {
        /*this.multiSearchResults = this.searchService
            .getMultiSearchResult({ query: this.searchTerm, page: this.currentPage });*/

    }

}