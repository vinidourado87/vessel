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
var router_1 = require("@angular/router");
var PanelComponent = (function () {
    function PanelComponent(http, formBuilder, router) {
        this.http = http;
        this.myForm = formBuilder.group({
            id: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.router = router;
    }
    PanelComponent.prototype.ngOnInit = function () {
        this.title = this.title.length > 10 ? this.title.substr(0, 10) + "..." : this.title;
    };
    PanelComponent.prototype.deleteVessel = function (event) {
        var _this = this;
        event.preventDefault();
        var head = new http_1.Headers();
        head.append('Content-type', 'application/json');
        this.http.delete('vessel/' + this.id, { headers: head })
            .subscribe(function () {
            _this.router.navigate(['/index.html']);
        }, function (erro) { return console.log(erro); });
    };
    PanelComponent.prototype.findVessel = function (idParam) {
        this.router.navigate(['/vessel/edit/' + idParam]);
    };
    return PanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PanelComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PanelComponent.prototype, "id", void 0);
PanelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'panel',
        templateUrl: './panel.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder, router_1.Router])
], PanelComponent);
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map