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
var http_1 = require("@angular/common/http");
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.url = 'https://api.themoviedb.org/3';
        this.apikey = '?api_key=5de0f16390c3aa37bfd7a6f05e6b3fe4';
    }
    MovieService.prototype.getMovie = function (id) {
        var url = this.url + "/movie/" + id + this.apikey;
        return this.http.get(url);
    };
    MovieService.prototype.getTopMovies = function () {
        var url = this.url + "/movie/top_rated" + this.apikey;
        return this.http.get(url);
    };
    MovieService.prototype.getPopularMovies = function () {
        var url = this.url + "/movie/popular" + this.apikey;
        return this.http.get(url);
    };
    MovieService.prototype.getMovieCredits = function (id) {
        var url = this.url + "/movie/" + id + "/credits" + this.apikey;
        return this.http.get(url);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map