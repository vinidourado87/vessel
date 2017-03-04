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
var vessel_component_1 = require("../vessel/vessel.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("angular2-google-maps/core");
var EditComponent = (function () {
    function EditComponent(http, formBuilder, router, mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.vessel = new vessel_component_1.VesselComponent();
        this.http = http;
        this.myForm = formBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            width: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            length: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            draft: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            latitude: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            longitude: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.router = router;
    }
    EditComponent.prototype.addVessel = function (event) {
        var _this = this;
        event.preventDefault();
        var head = new http_1.Headers();
        head.append('Content-type', 'application/json');
        var data = JSON.stringify({
            name: this.vessel.name,
            width: parseFloat(this.vessel.width.toString()),
            length: parseFloat(this.vessel.length.toString()),
            draft: parseFloat(this.vessel.draft.toString()),
            latitude: this.vessel.latitude,
            longitude: this.vessel.longitude
        });
        this.http.post('vessel', data, { headers: head })
            .subscribe(function () {
            _this.vessel = new vessel_component_1.VesselComponent();
            _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    EditComponent.prototype.editVessel = function (id) {
        var head = new http_1.Headers();
        head.append('Content-type', 'application/json');
        this.http.get('vessel/' + id, { headers: head })
            .subscribe(function (vessels) {
            console.log(vessels);
        }, function (erro) { return console.log(erro); });
    };
    EditComponent.prototype.ngOnInit = function () {
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
    EditComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    return EditComponent;
}());
__decorate([
    core_1.ViewChild("search"),
    __metadata("design:type", core_1.ElementRef)
], EditComponent.prototype, "searchElementRef", void 0);
EditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './edit.component.html',
        styles: [".sebm-google-map-container { height: 300px; }"]
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder, router_1.Router,
        core_2.MapsAPILoader, core_1.NgZone])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map