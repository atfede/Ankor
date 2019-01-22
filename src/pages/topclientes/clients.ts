import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, DateTime} from 'ionic-angular';
import {Client} from "../../models/Client";
import {clientPct} from "../../models/clientPct";
import {Globals} from "../../components/Globals";
import {l} from "@angular/core/src/render3";
import {ExtratoTotal} from "../../models/ExtratoTotal";
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})

export class ClientsPage {
  clients: Array<{
    name: string, actualValue: string,
    cid: string, lastValue: string, isIncrementing: boolean, percentage: string
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: Globals, private alertCtrl: AlertController) {
    this.top10Clients = this.globals.top10ClientesSumaPorMes;
    // this.selectedDate = {month: "Janeiro", year: 2018};
    this.selectedDate = {month: this.getMonthNumberByMonthName("Janeiro"), year: String(2018).substring(2)};
  }

  isSearchBarOpened = false;
  filteredTopTenClients: any = new Array<ExtratoTotal>();
  searchTerm: string = '';
  top10Clients: any = [];
  selectedDate: any;
  months: Array<{ month: string, year: number, actMonth: boolean }>;

  ionViewDidLoad() {
    this.filteredTopTenClients = this.getTopTenClients({month: "Janeiro", year: "2018"});
  }

  getRandomPercentage(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  ionViewWillEnter() {
    var date = new Date();
    var monthIndex = date.getMonth();

    this.months = [];
    const meses = [
      'Janeiro',
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
      'Dezembro'];

    const year = date.getFullYear() - 1; //sacar -1
    var actualMonth = meses[monthIndex]; //meses[monthIndex - 1]

    for (let p = 0; p < meses.length; p++) {
      this.months.push({
        month: meses[p],
        year: year,
        actMonth: actualMonth == meses[p]
      });
    }

  }

  viewClient(client) {
    this.navCtrl.setRoot('ClientPage', {
      name: client.Client.Name
      , actualValue: client.TotalNFe
      , isIncrementing: client.Client.Increments
    });
  }

  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

  /*  getClientsOctubreTopTen() {

      var topTenClients = this.clientsOctubre.sort(function (a, b) {
        return a.Amount - b.Amount;
      }).reverse();

      this.clientsOctubreTopTen = topTenClients.slice(0, 10);
    }*/

  onSearch(event) {
    this.getTopTenClients(event);
  }

  onChange($event) {
    this.selectedDate = {month: this.getMonthNumberByMonthName($event.month), year: String($event.year).substring(2)};
    this.filteredTopTenClients = this.getTopTenClients($event);
  }

  getTopTenClients(event) {
    let month = this.getMonthNumberByMonthName(event.month);
    let year = String(event.year).substring(2);
    let ret = [];

    this.top10Clients.forEach((el) => {
      if (el.MesAnoEmit.split('/')[0] == month && el.MesAnoEmit.split('/')[1] == year) { //get current year
        ret.push(el);
      }
    });

    //TODO: FILTER ONLY 10 CLIENTS
    return ret.sort((a, b) => parseFloat(a.TotalNFe) - parseFloat(b.TotalNFe)).reverse();
  }

  getMonthNumberByMonthName(monthStr) {
    var month = "";
    switch (monthStr) {

      case "Janeiro":
        month = '01';
        break;
      case "Fevereiro":
        month = '02';
        break;
      case "Março":
        month = '03';
        break;
      case "Abril":
        month = '04';
        break;
      case "Maio":
        month = '05';
        break;
      case "Junho":
        month = '06';
        break;
      case "Julho":
        month = '07';
        break;
      case "Agosto":
        month = '08';
        break;
      case "Setembro":
        month = '09';
        break;
      case "Outubro":
        month = '10';
        break;
      case "Novembro":
        month = '11';
        break;
      case "Dezembro":
        month = '12';
        break;
    }
    return month;
  }

  filterClients() {
    this.filteredTopTenClients = this.top10Clients.filter((item) => {
      return item.Client.Name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
        && item.MesAnoEmit.split('/')[0] == this.selectedDate.month && item.MesAnoEmit.split('/')[1] == this.selectedDate.year
    }).sort((a, b) => parseFloat(a.TotalNFe) - parseFloat(b.TotalNFe)).reverse();
  }

  displayClientesEmAlerta() {
    let alert = this.alertCtrl.create({
      title: 'Clientes em alerta',
      subTitle: '', //10% of battery remaining
      message: '<span style="color: #c49846"> 1.</span> <span style="font-size: 13px;">Surgeon Com De Mat Cirurgico</span> <br/>' +
        'Caiu 5 posicoes nos últimos 30 días <p/>' +
        ' <span style="color: #c49846"> 2.</span> <span style="font-size: 13px;">Icafe Do Sul Com Varej De V.</span> <br/>' +
        'Caiu 10 posicoes nos últimos 3 meses e faturou R$ 6280.88 abaixo de sua média<p/>' +
        ' <span style="color: #c49846"> 3.</span> <span style="font-size: 13px;">Valen Bar E Rest Ltda Epp</span><br/>' +
        'Caiu 9 posicoes nos últimos 30 días <br/>',
      buttons: ['Ok']
    });
    alert.present();
  }

}

