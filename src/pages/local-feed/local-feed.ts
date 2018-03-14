import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { CreatePostPage } from '../create-post/create-post';
import * as firebase from 'firebase';
import * as GeoFire from 'geofire';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

@Component({
  selector: 'page-local-feed',
  templateUrl: 'local-feed.html'
})
export class LocalFeedPage {

public postsInUserLoc;
public posts = [];
public keys;

public userLat;
public userLong;

public geoQuery;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public geolocation: Geolocation) 
  {
  	this.getPosts(null);
  }

  /*************************** navigation ***************************/
  goToSettings()
  {
  	this.navCtrl.push(SettingsPage);
  }

  createNewPost()
  {
  	//possibly modal?
  	this.navCtrl.push(CreatePostPage);
  }

  /*************************** user related ***************************/


  /*************************** feed population ***************************/

  //this function is used in the constructor.
  getPosts(refresher)
  {
  	this.posts = [];
  	this.geolocation.getCurrentPosition().then((response) => {

			var userLat = response.coords.latitude;
			var userLong = response.coords.longitude;
			console.log(userLat);

	  	var firebaseRef = firebase.database().ref('/post_location');
	  	var postRef = firebase.database().ref('/posts');
	  	var geoFire = new GeoFire(firebaseRef);

	  	this.geoQuery = geoFire.query({
	  		center: [userLat, userLong],
	  		radius: 1000 //kilometers
			});

			this.geoQuery.on("key_entered", (key, location,distance)=> {

				console.log("key" + key +"\nLocation" + location + "\nDistance" +distance);
				postRef.child(key).once('value').then((snapshot) => { // here too!
      // ... and add it to the matches array
      	this.posts.push(snapshot.val());
      console.log(this.posts);
				});
			});

		}).catch((error)=>{
			console.log('Error getting location', error);

  		let alert = this.alertCtrl.create({
      	title: 'Geolocation services unavailable.',
      	subTitle: 'Unable to get your location. Please make sure location services are enabled.',
     	 	buttons: ['OK']
    	});
    	alert.present();
		});
		if(refresher != null)
	 	{
	 		refresher.complete();
	 	}
  }


  //this function is used with the infinite scrolling object on the list.
  loadMorePosts()
  {

  }

}
