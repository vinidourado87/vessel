"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var edit_component_1 = require("./edit/edit.component");
var list_component_1 = require("./list/list.component");
var appRoutes = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'vessel', component: edit_component_1.EditComponent },
    { path: 'vessel/edit/:id', component: edit_component_1.EditComponent },
    { path: '**', component: list_component_1.ListComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map