import { Component, Input } from '@angular/core';
import { VesselComponent } from '../vessel/vessel.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './edit.component.html' 
})
export class EditComponent {

    vessel: VesselComponent = new VesselComponent();
    http: Http;
    myForm: FormGroup;

    constructor(http: Http, formBuilder: FormBuilder) {
        this.http = http;
        this.myForm = formBuilder.group({
            name: [ '', Validators.compose([Validators.required, Validators.minLength(4)]) ]
        });
    }

    cadastrar(event) {
        event.preventDefault();

        let head = new Headers();
        head.append('Content-type', 'application/json');

        this.http.post('person', JSON.stringify(this.vessel), {headers: head})
        .subscribe(() => {
            this.vessel = new VesselComponent();
        }, erro => console.log(erro));
    }
}
