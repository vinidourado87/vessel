var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/underscore/underscore.d.ts" />
/// <reference path="./models/Person.ts" />
var angular2_1 = require('angular2/angular2');
var PersonList = (function () {
    function PersonList(http) {
        this.peopleList = [];
        this.http = http;
        this.getAllPeople();
    }
    PersonList.prototype.getAllPeople = function () {
        var _this = this;
        this.peopleList = [];
        this.http.get('/persons').toRx().map(function (res) { return res.json(); }).subscribe(function (people) {
            _.each(people, function (person) {
                _this.peopleList.push(person.name);
            });
        });
    };
    ;
    PersonList.prototype.addPerson = function (personName) {
        var parameters = JSON.stringify({ name: personName, age: 15 });
        var requestOptions = new angular2_1.RequestOptions();
        var header = new angular2_1.Headers();
        header.append('Content-Type', 'application/json');
        requestOptions.headers = header;
        this.http.post('/person', parameters, requestOptions);
        this.getAllPeople();
    };
    PersonList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addPerson($event.target.value);
            $event.target.value = null;
        }
    };
    PersonList = __decorate([
        angular2_1.Component({
            selector: 'person-list',
            viewBindings: [angular2_1.httpInjectables]
        }),
        angular2_1.View({
            template: "\n    <ul>\n      <li *ng-for=\"#person of peopleList\">\n        {{ person }}\n      </li>\n    </ul>\n    <input #persontext (keyup)=\"doneTyping($event)\">\n    <button (click)=\"addPerson(persontext.value)\">Add Person</button>\n    <p *ng-if=\"peopleList.length > 3\">You have many friends!</p>\n    ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [angular2_1.Http])
    ], PersonList);
    return PersonList;
})();
angular2_1.bootstrap(PersonList);
//# sourceMappingURL=personList.js.map