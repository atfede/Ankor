import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ExtratoTotal} from "../../models/ExtratoTotal";
import {Client} from "../../models/Client";
import {Constants} from '../../models/Constants';
import {Globals} from "../../components/Globals";
import {ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {Meta} from "../../models/Meta";

@IonicPage()
@Component({
  selector: 'page-piechart',
  templateUrl: 'piechart.html',
})
export class PiechartPage {

  //top 5 clients
  public clients: Array<Client> = [
    {
      Id: 1,
      Name: '',
      Surename: 'Infrati Informatic.',
      Increments: true,
      Amount: 3767203,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>(),
      metas : new Array<Meta>()
    }, //901.421.100-78
    {
      Id: 3,
      Name: '',
      Surename: 'Hidroscience Consu.',
      Increments: true,
      Amount: 2066400,
      ClientType: 'servicio',
      extratos: new Array<ExtratoTotal>(),
      metas : new Array<Meta>()
    }, //469.574.560-72
    {
      Id: 4,
      Name: '',
      Surename: 'Mkt Lopes Com De C.',
      Increments: true,
      Amount: 911203.35,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>(),
      metas : new Array<Meta>()
    }, //22829604000188
    {
      Id: 6,
      Name: '',
      Surename: 'L A Lopes Com De C.',
      Increments: true,
      Amount: 832291.15,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>(),
      metas : new Array<Meta>()
    }, //096.233.801-00
    {
      Id: 10,
      Name: '',
      Surename: 'Surgeon Com De Mat.',
      Increments: false,
      Amount: 206869.35,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>(),
      metas : new Array<Meta>()
    } //096.212.221-17
  ];
  public topFiveClients: Array<Client> = [];
  public extratoTotal: any = new Array<Client>();
  public companyName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: Globals, private cdref: ChangeDetectorRef) {
    this.extratoTotal = this.globals.clients[this.globals.loggedUserIndex];
    this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
  }

  ngOnInit() {
    this.getTopFiveClients();
  }

  ionViewDidLoad() {

  }

  displayMonthlyChart() {
    this.navCtrl.setRoot('DashboardPage', {}, {animate: true, direction: 'backward'});
  }

  getTotalExtratosCurrentYear() {
    let total = 0;

    this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE].forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == '18') { //get current year
        total += el.TotalNFe;
      }
    });

    //TODO: check Constants
    if (Constants.IsComercio) {
      return total;
    } else if (Constants.IsServicio) {
      return total;
    }
    return null;
  }

  getTotalExtratosLastYear() {
    let total = 0;

    this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE].forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == '17') { //get current year
        total += el.TotalNFe;
      }
    });

    //TODO: check Constants
    if (Constants.IsComercio) {
      return total;
    } else if (Constants.IsServicio) {
      return total;
    }
    return null;
  }

  getTotalExtratosCurrentMonth() {
    if (Constants.IsComercio) {
      return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.COMERCIO - Constants.ISSQN5;
    } else if (Constants.IsServicio) {
      return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.SERVICIO - Constants.ISSQN5;
    }
  }

  getImpostosPrevistos(year) {
    let totalICMS = 0;

    //total ICMS
    this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE].forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == year) { //'18'
        totalICMS += el.TotalICMS;
      }
    });

    return totalICMS;
  }

  getAproveitamento() {
    var past = this.getTotalExtratosLastYear(); //2017;
    var curr = this.getTotalExtratosCurrentYear(); //2018

    return (((past - curr) / curr) * 100) * (-1);
  }

  getCurrentMonth() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    return monthNames[d.getMonth()].toLowerCase().substring(0, 3);
  }

  getLastMonthName() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    const m = d.getMonth();

    if (m == 0) {
      return monthNames[monthNames.length - 1].toLowerCase().substring(0, 3);
    } else {
      return monthNames[m - 1].toLowerCase().substring(0, 3);
    }
  }

  getLastYear() {

    //validar si es opción: mismo año u opción mes anterior a mes corriente
    var currentTime = new Date();
    return currentTime.getFullYear() - 1;
  }

  getCurrentYear() {

    //validar si es opción: mismo año u opción mes anterior a mes corriente
    var currentTime = new Date();
    return currentTime.getFullYear();
  }

  getPreviousMonthName() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    const m = d.getMonth();
    if (m == 0) {
      return monthNames[monthNames.length - 1]; //.substring(0, 3 , .toUpperCase()
    } else {
      return monthNames[m - 1]; //.substring(0, 3 , .toUpperCase()
    }
  }

  getCurrentMonthName() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    return monthNames[d.getMonth()]; //.substring(0, 3) ,.toUpperCase()
  }

  getProximoPagamentoDays() {
    return this.daysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
  }

  getProximoPagamentoMonth() {
    var currentTime = new Date();
    return currentTime.getMonth() + 1;
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  getTotalExtratosPreviousYearUntilMonth() {
    let total = 0;
    let currentMonth = new Date().getMonth();

    this.extratoTotal[this.globals.CURRENT_PAGE].forEach((el) => {
      if (currentMonth == 0) {
        currentMonth = 12;
      }

      if (parseInt(el.MesAnoEmit.split('/')[0]) == currentMonth && el.MesAnoEmit.split('/')[1] == '17') { //get current year
        total += el.TotalNFe;
      }
    });
    return total;
  }

  getTopFiveClients() {
    var top5Clients = this.clients.sort(function (a, b) {
      return a.Amount - b.Amount;
    }).reverse();

    this.topFiveClients = top5Clients.slice(0, 5);
  }

  viewPreviousCompany() {
    if (this.globals.CURRENT_PAGE > 0) {
      this.globals.CURRENT_PAGE--;
      //this.extratoTotal[];
      //alert(this.globals.CURRENT_PAGE);
      this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
    }
  }

  viewNextCompany() {
    if (this.globals.CURRENT_PAGE < this.globals.NUMBER_OF_COMPANIES) {
      this.globals.CURRENT_PAGE++;
      //alert(this.globals.CURRENT_PAGE);
      this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
    }
  }

  setCompanyName(name) {
    this.companyName = name;
  }
}
