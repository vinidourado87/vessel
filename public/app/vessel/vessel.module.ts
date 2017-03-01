import { NgModule } from '@angular/core';
import { VesselComponent } from './vessel.component';
import { FilterByName } from './vessel.pipes';

@NgModule({
    declarations: [ VesselComponent, FilterByName ],
    exports: [ VesselComponent, FilterByName ]
})
export class VesselModule{ }
