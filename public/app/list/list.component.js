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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ListComponent = (function () {
    function ListComponent(http) {
        var _this = this;
        this.vessels = [];
        http
            .get('vessels')
            .map(function (res) { return res.json(); })
            .subscribe(function (vessels) {
            _this.vessels = vessels;
            console.log(_this.vessels);
        }, function (erro) { return console.log(erro); });
    }
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list',
            templateUrl: './list.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map