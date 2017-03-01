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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var edit_component_1 = require('./edit/edit.component');
var list_component_1 = require('./list/list.component');
var panel_module_1 = require('./panel/panel.module');
var vessel_module_1 = require('./vessel/vessel.module');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var forms_1 = require('@angular/forms');
require('rxjs/add/operator/map');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, panel_module_1.PanelModule, vessel_module_1.VesselModule, app_routes_1.routing, forms_1.FormsModule,
                forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, edit_component_1.EditComponent, list_component_1.ListComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map