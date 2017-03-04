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
var forms_1 = require("@angular/forms");
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
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new forms_1.FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        /*this.mapsAPILoader.load().then(() => {
          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();
      
              //verify result
              if (place.geometry === undefined || place.geometry === null) {
                return;
              }
              
              //set latitude, longitude and zoom
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();
              this.zoom = 12;
            });
          });
        });*/
    };
    ListComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
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