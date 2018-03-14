import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

	public userLatitude:number;
	public userLongitude:number;
  constructor(public geolocation: Geolocation) {
    console.log('Hello LocationProvider Provider');
    const subscription = this.geolocation.watchPosition().subscribe(position => {
    	this.userLatitude = position.coord.latitude;
    	this.userLongitude = position.coord.longitude;
	});
  }

}
