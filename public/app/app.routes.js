"use strict";
var router_1 = require('@angular/router');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var edit_component_1 = require('./edit/edit.component');
var list_component_1 = require('./list/list.component');
var appRoutes = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'vessel', component: edit_component_1.EditComponent },
    { path: '**', component: list_component_1.ListComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map