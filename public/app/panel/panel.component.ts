import { Component, Input, OnInit} from '@angular/core'
import { Http, Headers, Response } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { VesselComponent } from '../vessel/vessel.component';

@Component({
    moduleId: module.id,
    selector: 'panel',
    templateUrl: './panel.component.html'
})

export class PanelComponent implements OnInit {

    @Input() title: string;
    @Input() id: string;
    http: Http;
    myForm: FormGroup;
    router : Router;

    constructor(http: Http, formBuilder: FormBuilder, router : Router) {
        this.http = http;
        this.myForm = formBuilder.group({
            id: [ '', Validators.compose([Validators.required]) ]
        });
        this.router = router;
    }

    ngOnInit() {
        this.title = this.title.length > 10 ? this.title.substr(0, 10) + "..." : this.title;
    }

    deleteVessel(event) {
        event.preventDefault();

        let head = new Headers();
        head.append('Content-type', 'application/json');

        this.http.delete('vessel/' + this.id, {headers: head})
        .subscribe(() => {
            this.router.navigate(['/index.html']);
        }, erro => console.log(erro));
    }

    findVessel(idParam) {
        this.router.navigate(['/vessel/edit', idParam]);
    }
}
