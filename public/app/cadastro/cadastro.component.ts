import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;

    constructor(http: Http, formBuilder: FormBuilder) {
        this.http = http;
        this.meuForm = formBuilder.group({
            titulo: [ '', Validators.compose([Validators.required, Validators.minLength(4)]) ],
            url: [ '', Validators.required ],
            descricao: [ '' ]
        });
    }

    cadastrar(event) {
        event.preventDefault();

        let head = new Headers();
        head.append('Content-type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: head})
        .subscribe(() => {
            this.foto = new FotoComponent();
        }, erro => console.log(erro));
    }
}
