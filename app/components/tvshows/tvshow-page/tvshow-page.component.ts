import { Component } from "@angular/core";
import { TvShowService } from '../../../services/tvshow.service';
import { Observable } from "rxjs/Observable";
import { Tvshow, TvShowCredits } from "../../../models/tvshow.type";
import { SearchResult } from "../../../models/search-result.type";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "tvshow-page",
    templateUrl: "./tvshow-page.component.html"
})

export class TvShowPageComponent {
    constructor(private TvShowService: TvShowService,
        private route: ActivatedRoute) { }

    tvshow: Tvshow;
    tvShowCredits: TvShowCredits;
    
    ngOnInit() {
        this.getTvShow();
        this.getTvShowCredits();
    }

    getTvShow(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        let o = this.TvShowService.getTvShow(id);
        o.subscribe(m => this.tvshow = m);
    }

    getTvShowCredits():void{
        const id = +this.route.snapshot.paramMap.get('id');
        let o = this.TvShowService.getTvShowCredits(id);
        o.subscribe(m => this.tvShowCredits = m);
    }
}