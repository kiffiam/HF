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
var router_1 = require("@angular/router");
var TvShowPageComponent = (function () {
    function TvShowPageComponent(TvShowService, route) {
        this.TvShowService = TvShowService;
        this.route = route;
    }
    TvShowPageComponent.prototype.ngOnInit = function () {
        this.getTvShow();
    };
    TvShowPageComponent.prototype.getTvShow = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        var o = this.TvShowService.getTvShow(id);
        o.subscribe(function (m) { return _this.tvshow = m; });
    };
    return TvShowPageComponent;
}());
TvShowPageComponent = __decorate([
    core_1.Component({
        selector: "tvshow-page",
        templateUrl: "./tvshow-page.component.html"
    }),
    __metadata("design:paramtypes", [tvshow_service_1.TvShowService,
        router_1.ActivatedRoute])
], TvShowPageComponent);
exports.TvShowPageComponent = TvShowPageComponent;
//# sourceMappingURL=tvshow-page.component.js.map