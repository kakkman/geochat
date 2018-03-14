import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { LocalFeedPage } from '../pages/local-feed/local-feed';
import { PostDetailPage } from '../pages/post-detail/post-detail';

import { PrivateMsgPage } from '../pages/private-msg/private-msg';
import { MsgDetailPage } from '../pages/msg-detail/msg-detail';

import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { SettingsPage } from '../pages/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    LocalFeedPage,
    PostDetailPage,
    PrivateMsgPage,
    MsgDetailPage,
    SignupPage,
    LoginPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LocalFeedPage,
    PostDetailPage,
    PrivateMsgPage,
    MsgDetailPage,
    SignupPage,
    LoginPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
