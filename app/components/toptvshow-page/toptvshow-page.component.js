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
var tvshow_service_1 = require("../../services/tvshow.service");
var TopTvShowPageComponent = (function () {
    function TopTvShowPageComponent(TvShowService) {
        this.TvShowService = TvShowService;
    }
    TopTvShowPageComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    TopTvShowPageComponent.prototype.getResults = function () {
    };
    return TopTvShowPageComponent;
}());
TopTvShowPageComponent = __decorate([
    core_1.Component({
        selector: "toptvshow-page",
        templateUrl: "./toptvshow-page.component.html"
    }),
    __metadata("design:paramtypes", [tvshow_service_1.TvShowService])
], TopTvShowPageComponent);
exports.TopTvShowPageComponent = TopTvShowPageComponent;
//# sourceMappingURL=toptvshow-page.component.js.map