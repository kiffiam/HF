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
var TvShowService = (function () {
    function TvShowService(http) {
        this.http = http;
        this.url = 'https://api.themoviedb.org/3';
        this.apikey = '?api_key=5de0f16390c3aa37bfd7a6f05e6b3fe4';
    }
    TvShowService.prototype.getTvShows = function () {
        throw new Error("Method not implemented.");
    };
    /*getTvShow(:id){

    }*/
    TvShowService.prototype.getTopTvShows = function () {
        var url = this.url + "/tv/top_rated" + this.apikey;
        return this.http.get(url);
    };
    return TvShowService;
}());
TvShowService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], TvShowService);
exports.TvShowService = TvShowService;
//# sourceMappingURL=tvshow.service.js.map