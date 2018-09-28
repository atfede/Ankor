import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { DashboardPage } from '../pages/dashboard/dashboard';
// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: 'DashboardPage',icon:'podium'},
      { title: 'Clientes', component: 'ClientsPage',icon:'contacts'},
      { title: 'Impostos', component: 'TributosPage',icon:'logo-usd'},
      { title: 'DRE Sintetica', component: 'TributosPage',icon:'paper'},
      { title: 'Simuladores', component: 'TributosPage',icon:'calculator'},
      { title: 'Declaracao de Faturamento', component: 'TributosPage',icon:'briefcase'},
      { title: 'Balancete', component: 'TributosPage',icon:'trending-up'},
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
