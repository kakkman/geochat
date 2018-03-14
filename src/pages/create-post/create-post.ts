import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

import * as firebase from 'firebase';
import * as GeoFire from 'geofire';

/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html',
})
export class CreatePostPage {

	public lat:number;
	public long:number;
	public enableButton: boolean = false;

	public content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public geolocation: Geolocation) {
  	//get users current position
  	this.geolocation.getCurrentPosition().then((response) => {

  		this.lat = response.coords.latitude;
  		this.long = response.coords.longitude;
  		console.log(this.lat);
  		console.log(this.long);
  		this.enableButton = true;


		}).catch((error)=>{
			console.log('Error getting location', error);

  		let alert = this.alertCtrl.create({
      	title: 'Geolocation services unavailable.',
      	subTitle: 'Unable to get your location. Please make sure location services are enabled.',
     	 	buttons: ['OK']
    	});

    	alert.present();
		});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

  createPost()
  {

	  const item = {  
	 		message: this.content,
	 		timestamp: Date.now() * -1
	 	}

	 	var itemID = firebase.database().ref('/posts').push(item);
	 	var geoFire = new GeoFire(firebase.database().ref("/post_location"));
		geoFire.set(itemID.key,[this.lat, this.long]);

  }

}
