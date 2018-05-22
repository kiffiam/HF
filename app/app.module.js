"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
//import {HttpClientModule} from '@angular/common/http';
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var app_component_1 = require("./components/app/app.component");
var search_page_component_1 = require("./components/search-page/search-page.component");
var topmovie_page_component_1 = require("./components/movies/topmovie-page/topmovie-page.component");
var toptvshow_page_component_1 = require("./components/tvshows/toptvshow-page/toptvshow-page.component");
var tvshow_service_1 = require("./services/tvshow.service");
var movie_service_1 = require("./services/movie.service");
var routes = [
    { path: "search", component: search_page_component_1.SearchPageComponent },
    { path: "topmovies", component: topmovie_page_component_1.TopMoviePageComponent },
    { path: "toptvshows", component: toptvshow_page_component_1.TopTvShowPageComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule,
            //HttpClientModule,
            //HttpModule,
            ng2_bootstrap_1.CollapseModule.forRoot()],
        declarations: [
            app_component_1.AppComponent,
            topmovie_page_component_1.TopMoviePageComponent,
            toptvshow_page_component_1.TopTvShowPageComponent,
            search_page_component_1.SearchPageComponent
        ],
        exports: [],
        providers: [
            movie_service_1.MovieService,
            tvshow_service_1.TvShowService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map