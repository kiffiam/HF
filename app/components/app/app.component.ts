import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from "rxjs/rx";

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() {
        this.currentPageTitle = this.router.events
            .filter(e => e instanceof NavigationEnd)
            //strings here are the actual text that appear on the top of the sites
            .map((() => _.find(["Search", "TopMovies", "TopTvShows"], t => this.router.isActive('/' + t.toLowerCase(), false))).bind(this))
    }
    
    title = "Filmvilág";
    isNavbarCollapsed = true;
    currentPageTitle: Observable<string>;
}
