"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var person_service_1 = require("../../services/person.service");
var router_1 = require("@angular/router");
var PersonPageComponent = (function () {
    function PersonPageComponent(personService, route) {
        this.personService = personService;
        this.route = route;
    }
    PersonPageComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    PersonPageComponent.prototype.getPerson = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        var o = this.personService.getPerson(id);
        o.subscribe(function (m) { return _this.person = m; });
    };
    return PersonPageComponent;
}());
PersonPageComponent = __decorate([
    core_1.Component({
        selector: "person-page",
        templateUrl: "./person-page.component.html"
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        router_1.ActivatedRoute])
], PersonPageComponent);
exports.PersonPageComponent = PersonPageComponent;
//# sourceMappingURL=person-page.component.js.map