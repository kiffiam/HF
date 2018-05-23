"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var search_service_1 = require("../../../services/search.service");
var SearchMovieComponent = (function () {
    function SearchMovieComponent(searchService) {
        this.searchService = searchService;
        this.searchTerm = "";
        this.currentPage = 1;
        this.maxPages = 0;
    }
    SearchMovieComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    SearchMovieComponent.prototype.getResults = function () {
        /*this.multiSearchResults = this.searchService
        .getMultiSearchResult({ query: this.searchTerm, page: this.currentPage });*/
        var _this = this;
        this.searchResults = this.searchService.getMovieResult(this.searchTerm /*, this.currentPage*/);
        this.searchResults.subscribe(function (r) { return _this.maxPages; });
        //this.searchResults.subscribe(r => {this.maxPages = Math.ceil(r.allResults / 5);
        //this.currentPage = r.page;
    };
    return SearchMovieComponent;
}());
SearchMovieComponent = __decorate([
    core_1.Component({
        selector: "search-movie",
        templateUrl: "./search-movie.component.html"
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchMovieComponent);
exports.SearchMovieComponent = SearchMovieComponent;
//# sourceMappingURL=search-movie.component.js.map