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
            name: [ '', Validators.compose([Validators.required, Validators.minLength(4)]) ],
            width: [ '', Validators.compose([Validators.required]) ],
            length: [ '', Validators.compose([Validators.required]) ],
            draft: [ '', Validators.compose([Validators.required]) ],
            latitude: [ '', Validators.compose([Validators.required, Validators.minLength(4)]) ],
            longitude: [ '', Validators.compose([Validators.required, Validators.minLength(4)]) ]
        });
    }

    addVessel(event) {
        event.preventDefault();

        let head = new Headers();
        head.append('Content-type', 'application/json');

        var data = JSON.stringify({
            name: this.vessel.name,
            width: parseFloat(this.vessel.width.toString()),
            length: parseFloat(this.vessel.length.toString()),
            draft: parseFloat(this.vessel.draft.toString()),
            latitude: this.vessel.latitude,
            longitude: this.vessel.longitude
        });

        this.http.post('vessel', data, {headers: head})
        .subscribe(() => {
            this.vessel = new VesselComponent();
        }, erro => console.log(erro));
    }
}
