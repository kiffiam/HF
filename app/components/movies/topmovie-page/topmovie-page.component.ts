import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../../models/movie.type";
import { SearchResult } from "../../../models/search-result.type";
import { MovieService } from "../../../services/movie.service";

@Component({
    selector: "topmovie-page",
    templateUrl: "./topmovie-page.component.html"
})
export class TopMoviePageComponent implements OnInit{
    
    constructor(private movieService: MovieService) { }

    movies: Observable<SearchResult<Movie>>;

    currentPage = 1;
    maxPages = 0;

    ngOnInit() {
        this.getResults();
    }
    

    getResults() {
        this.movies = this.movieService.getTopMovies();
        this.movies.subscribe(r => this.maxPages);
    }
}