import {Component, Input, NgModule, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: './list.component.html',
    styles: [`.sebm-google-map-container { height: 600px; }`]
})
export class ListComponent implements OnInit {
  vessels: Object[] = [];
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(http: Http, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    http
    .get('vessels')
    .map(res => res.json())
    .subscribe(vessels => {
        this.vessels = vessels;
        console.log(vessels);
    }, erro => console.log(erro));
  }

  ngOnInit() {
    this.zoom = 2;
    this.latitude = 53.35124159999999;
    this.longitude = -6.260778899999991;
  }
}
