import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
// import { DashboardPage } from '../pages/dashboardmes/dashboardmes';
// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{ title: string, component: any, icon: string }>;
  bottomMenu: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Dashboard', component: 'DashboardPage', icon: 'assets/imgs/dashboard-icon.png'},
      {title: 'Clientes', component: 'ClientsPage', icon: 'assets/imgs/clientes-icon.png'},
      {title: 'Impostos', component: 'TributosPage', icon: 'assets/imgs/impostos-icon.png'},
      {title: 'DRE Sintetica', component: 'DresinteticoComponent', icon: 'assets/imgs/logout-icon.png'},
      {title: 'Simuladores', component: 'DashboardPage', icon: 'assets/imgs/simuladores-icon.png'},
      {title: 'Declaracao de Faturamento', component: 'DashboardPage', icon: 'assets/imgs/declaracaodefaturamento.png'},
      {title: 'Balancete', component: 'DashboardPage', icon: 'assets/imgs/balancete-icon.png'},
      {title: 'Metas', component: 'MetasComponent', icon: 'assets/imgs/metas-icon.png'}
    ];

    this.bottomMenu = [
      {title: 'Configuracoes', component: 'DashboardPage', icon: 'assets/imgs/configuracoes-icon.png'},
      {title: 'Logout', component: 'LoginPage', icon: 'assets/imgs/logout-icon.png'}
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
