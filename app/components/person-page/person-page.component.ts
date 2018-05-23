import { Component } from "@angular/core";
import {Person } from '../../models/person.type';
import { PersonService } from "../../services/person.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "person-page",
    templateUrl: "./person-page.component.html"
})
export class PersonPageComponent {
    constructor(private personService: PersonService,
        private route: ActivatedRoute){}

    person: Person;

    ngOnInit() {
        this.getPerson();
    }

    getPerson():void{
        const id = +this.route.snapshot.paramMap.get('id');
        let o = this.personService.getPerson(id);
        o.subscribe(m => this.person = m);
    }
}