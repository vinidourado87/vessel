import {Component, Input} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent{
    vessels: Object[] = [];

    constructor(http: Http) {
        http
        .get('persons')
        .map(res => res.json())
        .subscribe(vessels => {
            this.vessels = vessels;
            console.log(this.vessels);
        }, erro => console.log(erro));
    }
}
