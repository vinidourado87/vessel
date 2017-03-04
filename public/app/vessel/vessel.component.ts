import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vessel',
    templateUrl: './vessel.component.html' 
})
export class VesselComponent {

    @Input() id: number;
    @Input() name: string;
    @Input() width: number;
    @Input() length: number;
    @Input() draft: number;
    @Input() latitude: number;
    @Input() longitude: number;

    fromJson(json) {
        var parsedJson = JSON.parse(json);
        this.id = parsedJson['id'];
        this.name = parsedJson['name'];
        this.width = parsedJson['width'];
        this.length = parsedJson['length'];
        this.draft = parsedJson['draft'];
        this.latitude = parsedJson['latitude'];
        this.longitude = parsedJson['longitude'];
        return this;
    }
}
