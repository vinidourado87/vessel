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
var http_1 = require("@angular/http");
var core_2 = require("angular2-google-maps/core");
var ListComponent = (function () {
    function ListComponent(http, mapsAPILoader, ngZone) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.vessels = [];
        http
            .get('vessels')
            .map(function (res) { return res.json(); })
            .subscribe(function (vessels) {
            _this.vessels = vessels;
        }, function (erro) { return console.log(erro); });
    }
    ListComponent.prototype.ngOnInit = function () {
        //set google maps defaults (Dublin)
        this.zoom = 12;
        this.latitude = 53.35124159999999;
        this.longitude = -6.260778899999991;
        //set current position
        this.setVesselsPosition();
    };
    ListComponent.prototype.setVesselsPosition = function () {
        /*if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 12;
          });
        }*/
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("search"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "searchElementRef", void 0);
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'list',
        templateUrl: './list.component.html',
        styles: [".sebm-google-map-container { height: 300px; }"]
    }),
    __metadata("design:paramtypes", [http_1.Http, core_2.MapsAPILoader, core_1.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map