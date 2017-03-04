import {Component, Input, NgModule, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: './list.component.html',
    styles: [`.sebm-google-map-container { height: 300px; }`]
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
    }, erro => console.log(erro));
  }

  ngOnInit() {
    //set google maps defaults (Dublin)
    this.zoom = 12;
    this.latitude = 53.35124159999999;
    this.longitude = -6.260778899999991;

    //set current position
    this.setVesselsPosition();
  }

  private setVesselsPosition() {
    /*if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }*/
  }
}
