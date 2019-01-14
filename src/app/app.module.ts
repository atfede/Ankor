import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
// import {MetasComponent} from '../pages/metas/metas';

// import { DashboardPage } from '../pages/dashboardmes/dashboardmes';

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

import {NgxLineChartModule} from 'ngx-line-chart';
import {HttpClientModule} from '@angular/common/http';
// import {ProgressBarComponent} from '../components/progress-bar/progress-bar';
import {SharedModule} from '../components/shared-progress-bar-module/sharedmodules.module';
import {DresinteticoComponent} from "../pages/dresintetico/dresintetico";
import {DresinteticoComponentModule} from '../pages/dresintetico/dresintetico.module';

import {Globals} from '../components/Globals';
import {MetasService} from "../services/metas.service";

@NgModule({
    declarations: [
        MyApp
        , HomePage
        , ListPage
        // , MetasService
        // , MetasComponent
        // , DashboardPage
        // , LoginPage,
        // , RegisterPage,
        // , DresinteticoComponentModule
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        NgxLineChartModule,
        SharedModule,
        DresinteticoComponentModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage
        // DashboardPage
        // RegisterPage,
        // LoginPage,

    ],
    providers: [
        StatusBar
        , SplashScreen
        , {provide: ErrorHandler, useClass: IonicErrorHandler}
        , Globals
        , MetasService

    ]
})
export class AppModule {
}
