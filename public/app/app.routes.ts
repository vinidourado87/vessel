import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
    
    { path: '', component: ListComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'vessel', component: EditComponent},
    { path: '**', component: ListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
