import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Observable } from "rxjs/Observable";
import { Movie } from "../../models/movie.type";
import { SearchResult } from "../../models/search-result.type";
import { MovieService } from "../../services/movie.service";

@Component({
    selector: "movie-page",
    templateUrl: "./movie-page.component.html"
})
export class MoviePageComponent implements OnInit {
    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute) { }

    movie: Movie;
    //movieCredits: MovieCredits;

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getMovie(id);
        //this.getMovieCredits(id);
    }

    getMovie(id: number): void {
        let o = this.movieService.getMovie(id);
        o.subscribe(m => this.movie = m);
    }

    /*getMovieCredits(id: number): void {
        let o = this.movieService.getMovieCredits(id);
        o.subscribe(mc => this.movieCredits = mc);
    }*/

}
