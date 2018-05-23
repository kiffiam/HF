import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ng2-bootstrap'
import { AppComponent } from "./components/app/app.component";

import { PagingComponent } from './components/paging/paging.component';

import { MoviePageComponent } from './components/movies/movie-page/movie-page.component';
import { MovieItemComponent } from './components/movies/movie-item/movie-item.component';

import { TvShowPageComponent } from './components/tvshows/tvshow-page/tvshow-page.component';
import { TvShowItemComponent } from './components/tvshows/tvshow-item/tvshow-item.component';

import { SearchMovieComponent } from './components/search/search-movie/search-movie.component';
import { SearchTvShowComponent } from './components/search/search-tvshow/search-tvshow.component';

import { TopMoviePageComponent } from './components/movies/topmovie-page/topmovie-page.component';
import { TopTvShowPageComponent } from './components/tvshows/toptvshow-page/toptvshow-page.component';

import { PersonPageComponent } from './components/person-page/person-page.component';

import { TvShowService } from './services/tvshow.service';
import { MovieService } from './services/movie.service';
import { PersonService } from './services/person.service';
import { SearchService } from './services/search.service';

let routes: Route[] = [
  { path: "searchmovie", component: SearchMovieComponent },
  { path: "searchtvshow", component: SearchTvShowComponent },
  { path: "topmovies", component: TopMoviePageComponent },
  { path: "toptvshows", component: TopTvShowPageComponent },
  { path: "movie/:id", component: MoviePageComponent },
  { path: "tvshow/:id", component: TvShowPageComponent },
  { path: "person/:id", component: PersonPageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    CommonModule,
    CollapseModule.forRoot()],
  declarations: [
    AppComponent,
    TopMoviePageComponent,
    MoviePageComponent,
    MovieItemComponent,
    TopTvShowPageComponent,
    TvShowItemComponent,
    TvShowPageComponent,
    PagingComponent,
    SearchMovieComponent,
    SearchTvShowComponent,
    PersonPageComponent],
  exports: [],
  providers: [
    MovieService,
    TvShowService,
    PersonService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }