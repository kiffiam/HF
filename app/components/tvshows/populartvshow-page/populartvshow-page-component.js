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
var tvshow_service_1 = require("../../../services/tvshow.service");
var PopularTvShowPageComponent = (function () {
    function PopularTvShowPageComponent(tvShowService) {
        this.tvShowService = tvShowService;
    }
    PopularTvShowPageComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    PopularTvShowPageComponent.prototype.getResults = function () {
        this.tvshows = this.tvShowService.getPopularTvShows();
        //this.tvshows.subscribe(r => this.maxPages);
    };
    return PopularTvShowPageComponent;
}());
PopularTvShowPageComponent = __decorate([
    core_1.Component({
        selector: "populartvshow-page",
        templateUrl: "./populartvshow-page.component.html"
    }),
    __metadata("design:paramtypes", [tvshow_service_1.TvShowService])
], PopularTvShowPageComponent);
exports.PopularTvShowPageComponent = PopularTvShowPageComponent;
//# sourceMappingURL=populartvshow-page-component.js.map