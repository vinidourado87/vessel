import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vessel',
    templateUrl: './vessel.component.html' 
})
export class VesselComponent {

    @Input() name: string;
    @Input() width: number = 0;
    @Input() length: number = 0;
    @Input() draft: number = 0;
    @Input() latitude: string;
    @Input() longitude: string;

}
