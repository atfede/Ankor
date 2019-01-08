import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, DateTime} from 'ionic-angular';
import {Client} from "../../models/Client";
import {clientPct} from "../../models/clientPct";
import {Globals} from "../../components/Globals";
import {l} from "@angular/core/src/render3";
import {ExtratoTotal} from "../../models/ExtratoTotal";

/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: Globals) {
    this.top10Clients = this.globals.top10ClientesSumaPorMes;
    this.selectedDate = {month: "Janeiro", year: 2018};
  }

  public isSearchBarOpened = false;
  filteredTopTenClients: any = new Array<ExtratoTotal>();
  searchTerm: string = '';

  top10Clients: any = [];
  selectedDate: any;

  months: Array<{ month: string, year: number, actMonth: boolean }>;

  public clientsOctubreTopTen: Array<clientPct> = [];
  // public percentageRandom: Array<number> = [];

  public clientsOctubre: Array<clientPct> = [
    {
      Id: 1,
      Name: 'DANIELLE',
      Surename: 'CUNHA VARELA',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 16
    }, //901.421.100-78
    {
      Id: 2,
      Name: 'DIEGO',
      Surename: 'SALIBA DIAS',
      Increments: false,
      Amount: 687.95,
      ClientType: 'comercio',
      Percentage: 14
    }, //910.302.260-91
    {
      Id: 3,
      Name: 'FATIMA',
      Surename: 'APARECIDA FAGUN.',
      Increments: true,
      Amount: 2345.76,
      ClientType: 'servicio',
      Percentage: 13
    }, //469.574.560-72
    {
      Id: 4,
      Name: '',
      Surename: 'MAXIMA LOGISTICA E DIST.',
      Increments: true,
      Amount: 3695.74,
      ClientType: 'comercio',
      Percentage: 17
    }, //22829604000188
    {
      Id: 5,
      Name: 'ALEXANDRO',
      Surename: 'FLORES MACHADO',
      Increments: false,
      Amount: 920.20,
      ClientType: 'comercio',
      Percentage: 14
    }, //781.478.320-87
    {
      Id: 6,
      Name: 'PABLO',
      Surename: 'PAEZ RODRIGUEZ',
      Increments: true,
      Amount: 2353.14,
      ClientType: 'comercio',
      Percentage: 8
    }, //096.233.801-00
    {
      Id: 7,
      Name: 'MIRIAM CAMPOS',
      Surename: 'MARQUES WIERZBICKI',
      Increments: false,
      Amount: 938.9,
      ClientType: 'comercio',
      Percentage: 6
    }, //988.776.740-91
    {
      Id: 8,
      Name: 'RAMON',
      Surename: 'COSTA DE JESUS',
      Increments: false,
      Amount: 2200.54,
      ClientType: 'servicio',
      Percentage: 13
    }, //171.392.297-59
    {
      Id: 9,
      Name: 'EUCLEIA',
      Surename: 'FARIAS COELHO',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 12
    }, //312.924.508-19
    {
      Id: 10,
      Name: 'DEBORAH',
      Surename: 'PEREZ CABRERA',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'comercio',
      Percentage: 10
    } //096.212.221-17
  ];

  ionViewDidLoad() {
    //this.getClientsOctubreTopTen();
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
      // cid: client.cid
      name: client.Client.Name
      , actualValue: client.TotalNFe
      // , lastValue: client.lastValue
      , isIncrementing: client.Client.Increments
      // , percentage: client.percentage
    });
  }

  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

  getClientsOctubreTopTen() {

    var topTenClients = this.clientsOctubre.sort(function (a, b) {
      return a.Amount - b.Amount;
    }).reverse();

    this.clientsOctubreTopTen = topTenClients.slice(0, 10);
  }

  getTopTenClients2() {

    var topTenClients = this.clientsOctubre.sort(function (a, b) {
      return a.Amount - b.Amount;
    }).reverse();

    return topTenClients.slice(0, 10);
  }

  onSearch(event) {
    //console.log("looking for.." + event.target.value);
    this.getTopTenClients(event);
  }

  onChange($event) {
    // console.log($event);
    this.selectedDate = {month: this.getMonthNumberStr($event.month), year: String($event.year).substring(2)};
    this.filteredTopTenClients = this.getTopTenClients($event);
  }

  getTopTenClients(event) {
    let month = this.getMonthNumberStr(event.month);
    let year = String(event.year).substring(2);
    let ret = [];

    this.top10Clients.forEach((el) => {
      if (el.MesAnoEmit.split('/')[0] == month && el.MesAnoEmit.split('/')[1] == year) { //get current year
        ret.push(el);
      }
    });

    //TODO: FILTER ONLY 10 CLIENTS
    console.log(ret);
    return ret.sort((a, b) => parseFloat(a.TotalNFe) - parseFloat(b.TotalNFe)).reverse();
  }

  getMonthNumberStr(monthStr) {
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

}

