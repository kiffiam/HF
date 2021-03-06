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
var movie_service_1 = require("../../../services/movie.service");
var TopMoviePageComponent = (function () {
    function TopMoviePageComponent(movieService) {
        this.movieService = movieService;
        this.currentPage = 1;
        this.maxPages = 0;
    }
    TopMoviePageComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    TopMoviePageComponent.prototype.getResults = function () {
        var _this = this;
        this.movies = this.movieService.getTopMovies();
        this.movies.subscribe(function (r) { return _this.maxPages; });
    };
    return TopMoviePageComponent;
}());
TopMoviePageComponent = __decorate([
    core_1.Component({
        selector: "topmovie-page",
        templateUrl: "./topmovie-page.component.html"
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], TopMoviePageComponent);
exports.TopMoviePageComponent = TopMoviePageComponent;
//# sourceMappingURL=topmovie-page.component.js.map