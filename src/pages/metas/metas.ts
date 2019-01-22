import {Component} from '@angular/core';
import {IonicPage} from "ionic-angular";
import {NavController, NavParams} from 'ionic-angular';
import {Globals} from "../../components/Globals";
import {Client} from "../../models/Client";
import {MetasService} from "../../services/metas.service";
import {Meta} from "../../models/Meta";

// import {ProgressBarComponent} from "../../components/progress-bar/progress-bar";

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
  metasCliente: any = new Array<Meta>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: Globals, private metasService: MetasService) {
    this.loadProgress = 46;
    this.extratoTotal = this.globals.clients[this.globals.loggedUserIndex];
    this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
    this.metasCliente = globals.metasCliente;
  }

  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

  ionViewWillEnter() {
    var date = new Date();
    var monthIndex = date.getMonth();
    this.months = [];
    const meses = [
      'Janeiro'
      /*,
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
      'Dezembro'*/
    ];

    const year = date.getFullYear();
    var actualMonth = meses[monthIndex]; //meses[monthIndex - 1]

    for (let p = 0; p < meses.length; p++) {
      //var m = meses[p] == "Janeiro" ? year : year - 1;

      this.months.push({
        month: meses[p],
        year: year, //TODO: remove - 1
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
      this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
    }
  }

  viewNextCompany() {
    if (this.globals.CURRENT_PAGE < this.globals.NUMBER_OF_COMPANIES) {
      this.globals.CURRENT_PAGE++;
      this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
    }
  }

  getLoadProgress(m) {
    let max = this.getMaxAmount(this.metasCliente);
    return ((m.Amount * 100) / max).toFixed(2);
  }

  getMaxAmount(metasCliente) {
    var max = 0;

    for (let data of metasCliente) {
      if (data.Amount > max) {
        max = data.Amount;
      }
    }
    return max;
  }
}
