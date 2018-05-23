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
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var app_component_1 = require("./components/app/app.component");
var paging_component_1 = require("./components/paging/paging.component");
var movie_page_component_1 = require("./components/movies/movie-page/movie-page.component");
var movie_item_component_1 = require("./components/movies/movie-item/movie-item.component");
var tvshow_page_component_1 = require("./components/tvshows/tvshow-page/tvshow-page.component");
var tvshow_item_component_1 = require("./components/tvshows/tvshow-item/tvshow-item.component");
var search_movie_component_1 = require("./components/search/search-movie/search-movie.component");
var search_tvshow_component_1 = require("./components/search/search-tvshow/search-tvshow.component");
var topmovie_page_component_1 = require("./components/movies/topmovie-page/topmovie-page.component");
var popularmovie_page_component_1 = require("./components/movies/popularmovie-page/popularmovie-page.component");
var toptvshow_page_component_1 = require("./components/tvshows/toptvshow-page/toptvshow-page.component");
var populartvshow_page_component_1 = require("./components/tvshows/populartvshow-page/populartvshow-page-component");
var person_page_component_1 = require("./components/person-page/person-page.component");
var tvshow_service_1 = require("./services/tvshow.service");
var movie_service_1 = require("./services/movie.service");
var person_service_1 = require("./services/person.service");
var search_service_1 = require("./services/search.service");
var routes = [
    { path: "searchmovie", component: search_movie_component_1.SearchMovieComponent },
    { path: "searchtvshow", component: search_tvshow_component_1.SearchTvShowComponent },
    { path: "topmovies", component: topmovie_page_component_1.TopMoviePageComponent },
    { path: "popularmovies", component: popularmovie_page_component_1.PopularMoviePageComponent },
    { path: "toptvshows", component: toptvshow_page_component_1.TopTvShowPageComponent },
    { path: "populartvshows", component: populartvshow_page_component_1.PopularTvShowPageComponent },
    { path: "movie/:id", component: movie_page_component_1.MoviePageComponent },
    { path: "tvshow/:id", component: tvshow_page_component_1.TvShowPageComponent },
    { path: "person/:id", component: person_page_component_1.PersonPageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule,
            http_1.HttpClientModule,
            common_1.CommonModule,
            ng2_bootstrap_1.CollapseModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            topmovie_page_component_1.TopMoviePageComponent,
            popularmovie_page_component_1.PopularMoviePageComponent,
            movie_page_component_1.MoviePageComponent,
            movie_item_component_1.MovieItemComponent,
            toptvshow_page_component_1.TopTvShowPageComponent,
            populartvshow_page_component_1.PopularTvShowPageComponent,
            tvshow_item_component_1.TvShowItemComponent,
            tvshow_page_component_1.TvShowPageComponent,
            paging_component_1.PagingComponent,
            search_movie_component_1.SearchMovieComponent,
            search_tvshow_component_1.SearchTvShowComponent,
            person_page_component_1.PersonPageComponent
        ],
        exports: [],
        providers: [
            movie_service_1.MovieService,
            tvshow_service_1.TvShowService,
            person_service_1.PersonService,
            search_service_1.SearchService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map