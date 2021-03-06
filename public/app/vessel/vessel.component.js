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
var VesselComponent = (function () {
    function VesselComponent() {
        this.id = 0;
    }
    VesselComponent.prototype.fromJson = function (json) {
        var parsedJson = JSON.parse(json);
        this.id = parsedJson['id'];
        this.name = parsedJson['name'];
        this.width = parsedJson['width'];
        this.length = parsedJson['length'];
        this.draft = parsedJson['draft'];
        this.latitude = parsedJson['latitude'];
        this.longitude = parsedJson['longitude'];
        return this;
    };
    return VesselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VesselComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], VesselComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VesselComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VesselComponent.prototype, "length", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VesselComponent.prototype, "draft", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VesselComponent.prototype, "latitude", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VesselComponent.prototype, "longitude", void 0);
VesselComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'vessel',
        templateUrl: './vessel.component.html'
    })
], VesselComponent);
exports.VesselComponent = VesselComponent;
//# sourceMappingURL=vessel.component.js.map