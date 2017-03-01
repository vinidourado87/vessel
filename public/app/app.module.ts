import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { EditComponent }  from './edit/edit.component';
import { ListComponent }  from './list/list.component';
import { PanelModule }  from './panel/panel.module';
import { VesselModule }  from './vessel/vessel.module';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

@NgModule({
 imports:[ BrowserModule, HttpModule, PanelModule, VesselModule, routing, FormsModule,
    ReactiveFormsModule ],
 declarations: [ AppComponent, EditComponent, ListComponent ],
 bootstrap: [ AppComponent ]
})

export class AppModule {  }
