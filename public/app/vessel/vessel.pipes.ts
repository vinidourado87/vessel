import { Pipe, PipeTransform } from '@angular/core';
import { VesselComponent } from './vessel.component';

@Pipe({
    name: 'filterByName'
})
export class FilterByName implements PipeTransform {

    transform(vessels: VesselComponent[], text: string) {
        text = text.toLowerCase();
        return vessels.filter(vessel => vessel.name.toLowerCase().includes(text));
    }
}
