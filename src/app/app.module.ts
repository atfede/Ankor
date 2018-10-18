import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
// import { DashboardPage } from '../pages/dashboard/dashboard';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import { Chart } from 'chart.js';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFireDatabase} from 'angularfire2/database';

import {FIREBASE_CONFIG} from './app.firebase.config';
// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';

import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {NgxLineChartModule} from 'ngx-line-chart';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
    // DashboardPage
    // LoginPage,
    // RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RoundProgressModule,
    NgxLineChartModule,
    HttpClientModule

  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
    // DashboardPage
    // RegisterPage,
    // LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
