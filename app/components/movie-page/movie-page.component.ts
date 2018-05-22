import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../models/movie.type";
import { SearchResult } from "../../models/search-result.type";
import { MovieService } from "../../services/movie.service";

@Component({
    selector: "movie-page",
    templateUrl: "./movie-page.component.html"
})
export class MoviePageComponent {
    constructor(private movieService: MovieService) { }
        ngOnInit() {
        this.getMovies();
        }
         getMovies() {
         this.movies = this.movieService.getMovies();
         }
        selectedMovie: Movie;
        movies: Observable<SearchResult<Movie>>;
}
