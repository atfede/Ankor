import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ExtratoTotal} from "../../models/ExtratoTotal";
import {Client} from "../../models/Client";
import {Constants} from '../../models/Constants';

@IonicPage()
@Component({
  selector: 'page-piechart',
  templateUrl: 'piechart.html',
})
export class PiechartPage {

  public clients: Array<Client> = [
    {Id: 1, Name: 'DANIELLE', Surename: 'CUNHA VARELA', Increments: true, Amount: 2319.72, ClientType: 'comercio'}, //901.421.100-78
    {Id: 3, Name: 'FATIMA', Surename: 'APARECIDA FAGUN.', Increments: true, Amount: 2345.76, ClientType: 'servicio'}, //469.574.560-72
    {Id: 4, Name: '', Surename: 'MAXIMA LOGISTICA E DIST.', Increments: true, Amount: 3695.74, ClientType: 'comercio'}, //22829604000188
    {Id: 6, Name: 'PABLO', Surename: 'PAEZ RODRIGUEZ', Increments: true, Amount: 2353.14, ClientType: 'comercio'}, //096.233.801-00
    {Id: 10, Name: 'DEBORAH J.', Surename: 'PEREZ CABRERA', Increments: false, Amount: 2301.42, ClientType: 'comercio'} //096.212.221-17
  ];

  public topFiveClients: Array<Client> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.getTopFiveClients();
    //this.displayProgressBar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiechartPage');
  }

  displayMonthlyChart() {
    this.navCtrl.setRoot('DashboardPage', {}, {animate: true, direction: 'backward'});
  }

  getTotalExtratosCurrentYear() {
    let total = 0;

    this.extratoTotal.forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == '18') { //get current year
        total += el.TotalNFe;
      }
    });

    //TODO: check Constants
    if (Constants.IsComercio) {
      return total;
    }
    else if (Constants.IsServicio) {
      return total;
    }
    return null;
  }

  getTotalExtratosLastYear() {
    let total = 0;

    this.extratoTotal.forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == '17') { //get current year
        total += el.TotalNFe;
      }
    });

    //TODO: check Constants
    if (Constants.IsComercio) {
      return total;
    }
    else if (Constants.IsServicio) {
      return total;
    }
    return null;
  }

  getTotalExtratosCurrentMonth() {
    if (Constants.IsComercio) {
      return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.COMERCIO - Constants.ISSQN5;
    }
    else if (Constants.IsServicio) {
      return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.SERVICIO - Constants.ISSQN5;
    }
  }

  getImpostosPrevistos(year) {
    let totalICMS = 0;
    let totalICMSST = 0;

    //total ICMS
    this.extratoTotal.forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == year) { //'18'
        totalICMS += el.TotalICMS;
      }
    });

    /*
        this.extratoTotal.forEach((el) => {
          if (el.MesAnoEmit.split('/')[1] == year) { //'18'
            totalICMSST += el.TotalICMSST;
          }
        });
    */

    // return totalICMS + totalICMSST;
    return totalICMS;
  }

  getAproveitamento() {
    return 51;
    //return this.getTotalExtratosCurrentYear() + this.getTotalExtratosPreviousYearUntilMonth();
  }

  getCurrentMonth() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    return monthNames[d.getMonth()].toLowerCase().substring(0, 3);
  }

  getLastMonth() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    return monthNames[d.getMonth() - 1].toLowerCase().substring(0, 3);
  }

  public extratoTotal: Array<ExtratoTotal> = [
    {
      MesAnoEmit: '01/17',
      QtdNFes: 9.00,
      TotalNFe: 4440.50,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '02/17',
      QtdNFes: 0.00,
      TotalNFe: 0.00,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '03/17',
      QtdNFes: 7.00,
      TotalNFe: 7883.20,
      TotalBCICMS: 48.50,
      TotalICMS: 8.73,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '04/17',
      QtdNFes: 1533,
      TotalNFe: 447218.65,
      TotalBCICMS: 18254.50,
      TotalICMS: 3285.81,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '05/17',
      QtdNFes: 6602,
      TotalNFe: 2102023.40,
      TotalBCICMS: 96317.00,
      TotalICMS: 17337.06,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '06/17',
      QtdNFes: 4926,
      TotalNFe: 1627491.75,
      TotalBCICMS: 91288.50,
      TotalICMS: 16431.93,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '07/17',
      QtdNFes: 5406,
      TotalNFe: 1589075.50,
      TotalBCICMS: 93744.50,
      TotalICMS: 168074.01,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '08/17',
      QtdNFes: 4893,
      TotalNFe: 1618932.95,
      TotalBCICMS: 131641.00,
      TotalICMS: 236095.38,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '09/17',
      QtdNFes: 3600,
      TotalNFe: 1156374.65,
      TotalBCICMS: 103584.00,
      TotalICMS: 19185.12,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '10/17',
      QtdNFes: 3787,
      TotalNFe: 1250434.60,
      TotalBCICMS: 130000.00,
      TotalICMS: 23400.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '11/17',
      QtdNFes: 3740,
      TotalNFe: 1101795.58,
      TotalBCICMS: 99873.76,
      TotalICMS: 17966.76,
      TotalBCICMSST: 298.71,
      TotalICMSST: 47.95,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '12/17',
      QtdNFes: 4446,
      TotalNFe: 1229158.74,
      TotalBCICMS: 104850.68,
      TotalICMS: 18754.05,
      TotalBCICMSST: 1261.86,
      TotalICMSST: 211.33,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 2981,
      TotalNFe: 832291.15,
      TotalBCICMS: 90087.37,
      TotalICMS: 16043.77,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 2491,
      TotalNFe: 856246.71,
      TotalBCICMS: 123742.47,
      TotalICMS: 20693.05,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 2518,
      TotalNFe: 792493.48,
      TotalBCICMS: 67115.83,
      TotalICMS: 11661.46,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 2799,
      TotalNFe: 895225.54,
      TotalBCICMS: 104131.86,
      TotalICMS: 18081.53,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 2955,
      TotalNFe: 914352.61,
      TotalBCICMS: 84758.46,
      TotalICMS: 15140.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 2295,
      TotalNFe: 637008.75,
      TotalBCICMS: 65401.03,
      TotalICMS: 11450.67,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 22,
      TotalNFe: 37027.03,
      TotalBCICMS: 25571.71,
      TotalICMS: 3093.95,
      TotalBCICMSST: 13044.22,
      TotalICMSST: 2573.96,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 29,
      TotalNFe: 16808.42,
      TotalBCICMS: 12069.00,
      TotalICMS: 1824.01,
      TotalBCICMSST: 0,
      TotalICMSST: 0,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 61,
      TotalNFe: 22415.50,
      TotalBCICMS: 12560.69,
      TotalICMS: 2223.81,
      TotalBCICMSST: 0,
      TotalICMSST: 0,
      Client: new Client(1, '', '', true, 1, '')
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 187,
      TotalNFe: 60086.59,
      TotalBCICMS: 13737.85,
      TotalICMS: 2185.59,
      TotalBCICMSST: 0,
      TotalICMSST: 0,
      Client: new Client(1, '', '', true, 1, '')
    }
  ];

  displayProgressBar() {
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
    return monthNames[d.getMonth() - 1]; //.substring(0, 3 , .toUpperCase()
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
    let currentMonth = new Date().getMonth() + 1;

    this.extratoTotal.forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == '17' && parseInt(el.MesAnoEmit.split('/')[0]) < currentMonth) { //get current year
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
}
