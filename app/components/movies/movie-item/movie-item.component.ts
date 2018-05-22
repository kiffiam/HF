import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { Movie } from "../../../models/movie.type";

@Component({
    selector: "movie-item",
    templateUrl: "./movie-item.component.html"
})
export class MovieItemComponent implements OnInit {
    constructor() { }

    @Input() movie: Movie;

    ngOnInit() {
    }

}