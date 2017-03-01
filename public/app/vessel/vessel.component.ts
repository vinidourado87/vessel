import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vessel',
    templateUrl: './vessel.component.html' 
})
export class VesselComponent {

    @Input() name: string;
    @Input() age: number = 15;

}
