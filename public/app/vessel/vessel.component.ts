import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vessel',
    templateUrl: './vessel.component.html' 
})
export class VesselComponent {

    @Input() name: string;
    @Input() width: number;
    @Input() length: number;
    @Input() draft: number;
    @Input() latitude: string;
    @Input() longitude: string;

}
