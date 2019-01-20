import {Component} from '@angular/core';
import {IonicPage} from "ionic-angular";
import {NavController, NavParams} from 'ionic-angular';
import {Globals} from "../../components/Globals";
import {Client} from "../../models/Client";

// import {ProgressBarComponent} from "../../components/progress-bar/progress-bar";

/**
 * Generated class for the MetasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'metas',
  templateUrl: 'metas.html'
})
export class MetasComponent {

  text: string;
  months: Array<{ month: string, year: number, actMonth: boolean }>;
  loadProgress: number;
  companyName: string;
  extratoTotal: any = new Array<Client>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: Globals) {
    this.loadProgress = 46;
    this.extratoTotal = this.globals.clients;
    this.setCompanyName(this.extratoTotal[this.globals.CURRENT_PAGE][0].Client.Name);
  }

  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

  ionViewWillEnter() {
    var date = new Date();
    var monthIndex = date.getMonth();
    this.months = [];
    const meses = [
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
      'Janeiro'];

    const year = date.getFullYear();
    var actualMonth = meses[monthIndex]; //meses[monthIndex - 1]

    for (let p = 0; p < meses.length; p++) {
      this.months.push({
        month: meses[p],
        year: year - 1, //TODO: remove - 1
        actMonth: actualMonth == meses[p]
      });
    }
  }

  setCompanyName(name) {
    this.companyName = name;
  }

  viewPreviousCompany() {
    if (this.globals.CURRENT_PAGE > 0) {
      this.globals.CURRENT_PAGE--;
      this.setCompanyName(this.extratoTotal[this.globals.CURRENT_PAGE][0].Client.Name);
    }
  }

  viewNextCompany() {
    if (this.globals.CURRENT_PAGE < this.globals.NUMBER_OF_COMPANIES) {
      this.globals.CURRENT_PAGE++;
      this.setCompanyName(this.extratoTotal[this.globals.CURRENT_PAGE][0].Client.Name);
    }
  }
}
