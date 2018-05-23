import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ng2-bootstrap'
import { AppComponent } from "./components/app/app.component";
//import { HttpModule } from '@angular/http';

import {PagingComponent} from './components/paging/paging.component';

import { MoviePageComponent } from './components/movies/movie-page/movie-page.component';
import { MovieItemComponent } from './components/movies/movie-item/movie-item.component';

import { TvShowPageComponent } from './components/tvshows/tvshow-page/tvshow-page.component';
import { TvShowItemComponent } from './components/tvshows/tvshow-item/tvshow-item.component';

import { SearchPageComponent } from './components/search-page/search-page.component';

import { TopMoviePageComponent } from './components/movies/topmovie-page/topmovie-page.component';
import { TopTvShowPageComponent } from './components/tvshows/toptvshow-page/toptvshow-page.component';

import { TvShowService } from './services/tvshow.service';
import { MovieService } from './services/movie.service';
import { PersonService } from './services/person.service';
import { SearchService } from './services/search.service';

let routes: Route[] = [
  { path: "search", component: SearchPageComponent },
  { path: "topmovies", component: TopMoviePageComponent },
  { path: "toptvshows", component: TopTvShowPageComponent },
  { path: "movie/:id", component: MoviePageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    CommonModule,
    //HttpModule,
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
    SearchPageComponent],
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