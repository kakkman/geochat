import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { CreatePostPage } from '../create-post/create-post';
@Component({
  selector: 'page-local-feed',
  templateUrl: 'local-feed.html'
})
export class LocalFeedPage {

  constructor(public navCtrl: NavController) {

  }

  /*************************** navigation related methods ***************************/
  goToSettings()
  {
  	this.navCtrl.push(SettingsPage);
  }

  createNewPost()
  {
  	//possibly modal?
  	this.navCtrl.push(CreatePostPage);
  }
  
}
