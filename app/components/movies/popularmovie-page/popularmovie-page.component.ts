import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../../models/movie.type";
import { SearchResult } from "../../../models/search-result.type";
import { MovieService } from "../../../services/movie.service";

@Component({
    selector: "popularmovie-page",
    templateUrl: "./popularmovie-page.component.html"
})
export class PopularMoviePageComponent implements OnInit{
    
    constructor(private movieService: MovieService) { }

    movies: Observable<SearchResult<Movie>>;

    ngOnInit() {
        this.getResults();
    }
    

    getResults() {
        this.movies = this.movieService.getPopularMovies();
        //this.movies.subscribe(r => this.maxPages);
    }
}