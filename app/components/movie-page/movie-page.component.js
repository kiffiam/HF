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
<<<<<<< HEAD:app/components/movie-page/movie-page.component.js
<<<<<<< HEAD:app/components/movies/movie-page/movie-page.component.js
var router_1 = require("@angular/router");
var movie_service_1 = require("../../../services/movie.service");
=======
var movie_service_1 = require("../../services/movie.service");
>>>>>>> parent of 333eaa7... sarfosmielot elbaszom:app/components/movie-page/movie-page.component.js
=======
var movie_service_1 = require("../../services/movie.service");
>>>>>>> parent of 333eaa7... sarfosmielot elbaszom:app/components/movie-page/movie-page.component.js
var MoviePageComponent = (function () {
    function MoviePageComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    //movieCredits: MovieCredits;
    MoviePageComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        //this.getMovie(id);
        //this.getMovieCredits(id);
    };
    return MoviePageComponent;
}());
MoviePageComponent = __decorate([
    core_1.Component({
        selector: "movie-page",
        templateUrl: "./movie-page.component.html"
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.ActivatedRoute])
], MoviePageComponent);
exports.MoviePageComponent = MoviePageComponent;
//# sourceMappingURL=movie-page.component.js.map