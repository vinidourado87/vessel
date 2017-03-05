import { Component, Input, NgModule, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VesselComponent } from '../vessel/vessel.component';
import { Http, Headers, Response } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './edit.component.html',
    styles: [`.sebm-google-map-container { height: 300px; }`]
})
export class EditComponent {

  vessel: VesselComponent = new VesselComponent();
  http: Http;
  myForm: FormGroup;
  router : Router;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(http: Http, formBuilder: FormBuilder, router : Router, 
    private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {

    this.http = http;
    this.myForm = formBuilder.group({
      id: [],
      name: [ '', Validators.compose([Validators.required, Validators.minLength(4)]) ],
      width: [ '', Validators.compose([Validators.required]) ],
      length: [ '', Validators.compose([Validators.required]) ],
      draft: [ '', Validators.compose([Validators.required]) ]
    });
    this.router = router;
  }

  addVessel(event) {
    event.preventDefault();

    let head = new Headers();
    head.append('Content-type', 'application/json');

    var data = JSON.stringify({
        name: this.vessel.name,
        width: parseFloat(this.vessel.width.toString()),
        length: parseFloat(this.vessel.length.toString()),
        draft: parseFloat(this.vessel.draft.toString()),
        latitude: parseFloat(this.latitude.toString()),
        longitude: parseFloat(this.longitude.toString())
    });

    this.http.post('vessel', data, {headers: head})
    .subscribe(() => {
        this.vessel = new VesselComponent();
        this.router.navigate(['']);
    }, erro => console.log(erro));
  }

  ngOnInit() {
    this.zoom = 10;
    this.searchControl = new FormControl();
    
    this.setCurrentPosition();
    
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          if (place.geometry === undefined || place.geometry === null) {
              return;
          }
  
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    var idParam = this.router.parseUrl(this.router.url).queryParams["id"];
    if (idParam) {
      this.loadVessel(idParam);
    }
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 10;
      });
    }
  }

  private loadVessel(idParam){
    let head = new Headers();
    head.append('Content-type', 'application/json');

    this.http.get('vessel/' + idParam, {headers: head})
    .map((res: Response) => res.text())
    .subscribe((vessel: Object) => {
      this.vessel = new VesselComponent().fromJson(vessel);
    }, erro => console.log(erro));
  }
}
