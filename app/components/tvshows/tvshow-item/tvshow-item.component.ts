import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { Tvshow } from "../../../models/tvshow.type";

@Component({
    selector: "tvshow-item",
    templateUrl: "./tvshow-item.component.html"
})
export class TvShowItemComponent implements OnInit {
    constructor() { }

    @Input() tvshow: Tvshow;

    ngOnInit() {
    }

}