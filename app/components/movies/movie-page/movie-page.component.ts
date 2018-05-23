import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie, MovieCredits } from "../../../models/movie.type";
import { SearchResult } from "../../../models/search-result.type";
import { MovieService } from "../../../services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "movie-page",
    templateUrl: "./movie-page.component.html"
})
export class MoviePageComponent {
    constructor(private movieService: MovieService,
        private route: ActivatedRoute) { }

    movie: Movie;
    movieCredits: MovieCredits;

    ngOnInit() {
        this.getMovie();
        this.getMovieCredits();
    }

    getMovie(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        let o = this.movieService.getMovie(id);
        o.subscribe(m => this.movie = m);
    }

    getMovieCredits(): void{
        const id = +this.route.snapshot.paramMap.get('id');
        let o = this.movieService.getMovieCredits(id);
        o.subscribe(m => this.movieCredits = m);
    }


}