import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';
import { ListagemComponent } from './listagem/listagem.component';

const appRoutes: Routes = [
    
    { path: '', component: ListagemComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'vessel', component: EditComponent},
    { path: '**', component: ListagemComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
