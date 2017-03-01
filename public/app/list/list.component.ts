import {Component, Input} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: './list.component.html'
})

export class ListComponent{
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
