import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../models/movie.type";
import { SearchResult } from "../../models/search-result.type";
import { MovieService } from "../../services/movie.service";

@Component({
    selector: "topmovie-page",
    templateUrl: "./topmovie-page.component.html"
})
export class TopMoviePageComponent {
    constructor(private movieService: MovieService) { }

   /* currentPage = 1;
    maxPages = 0;*/

    ngOnInit() {
        this.getResults();
    }
    movies: Observable<SearchResult<Movie>>;

    getResults() {
        /*this.movies = this.movieService.getTopMovies({ page: this.currentPage });
        //this.movies.subscribe(r => this.maxPages = r.total_pages);*/
    }
}
