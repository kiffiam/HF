import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ng2-bootstrap'
import { AppComponent } from "./components/app/app.component";

import { HttpModule } from '@angular/http';

import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { TvShowPageComponent } from './components/tvshow-page/tvshow-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

import { TopMoviePageComponent } from './components/topmovie-page/topmovie-page.component';
import { TopTvShowPageComponent } from './components/toptvshow-page/toptvshow-page.component';

import { TvShowService } from './services/tvshow.service';
import { MovieService } from './services/movie.service';
import { PersonService } from './services/person.service';
import { SearchService } from './services/search.service';

let routes: Route[] = [
  { path: "search", component: SearchPageComponent },
  { path: "topmovies", component: TopMoviePageComponent },
  { path: "toptvshows", component: TopTvShowPageComponent },
  
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    //HttpClientModule,
    HttpModule,
    CollapseModule.forRoot()],
  declarations: [
    AppComponent,
    TopMoviePageComponent,
    TopTvShowPageComponent,
    SearchPageComponent],
  exports: [],
  providers: [
    MovieService,
    TvShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
