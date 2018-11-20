import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ExtratoTotal} from "../../models/ExtratoTotal";
import {Client} from "../../models/Client";

@IonicPage()
@Component({
  selector: 'page-piechart',
  templateUrl: 'piechart.html',
})
export class PiechartPage {

  public clients: Array<Client> = [
/*    {id: 1, name: 'Manuel', surename: 'CRUZ', increments: true, amount: 'R$ 653'},
    {id: 2, name: 'Ulisses', surename: 'CABRAL', increments: true, amount: 'R$ 653'},
    {id: 3, name: 'Cristiana', surename: 'DUARTE', increments: true, amount: 'R$ 653'},
    {id: 4, name: 'Andréa', surename: 'ROSARIO', increments: false, amount: 'R$ 653'},
    {id: 5, name: 'Bartolomeu', surename: 'GOMES', increments: false, amount: 'R$ 653'}*/
    {Id: 7, Name: '', Surename: '901.421.100', Increments: true, Amount: 2319.72},
    {Id: 8, Name: '', Surename: '312.924.508', Increments: true, Amount: 2298.84},
    {Id: 9, Name: '', Surename: '096.212.221', Increments: true, Amount: 2301.42},
    {Id: 10, Name: '', Surename: '22829604000', Increments: true, Amount: 4704.37},
    {Id: 11, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
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
      total += el.TotalNFe;
    });

    return total;
  }

  getImpostosPrevistos() {
    let total = 0;
    this.extratoTotal.forEach((el) => {
      total += el.TotalICMS;
    });

    return total.toFixed(2);
  }

  getAproveitamento() {
    return 76;
  }

  getCurrentMonth() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    return monthNames[d.getMonth()].toLowerCase().substring(0, 3);
  }

  getTotalExtratosCurrentMonth() {
    return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe;
  }

  public extratoTotal: Array<ExtratoTotal> = [
    {
      MesAnoEmit: '01/18',
      QtdNFes: 2981,
      TotalNFe: 832291.15,
      TotalBCICMS: 90087.37,
      TotalICMS: 16043.77,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 2491,
      TotalNFe: 856246.71,
      TotalBCICMS: 123742.47,
      TotalICMS: 20693.05,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 2518,
      TotalNFe: 792493.48,
      TotalBCICMS: 67115.83,
      TotalICMS: 11661.46,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 2799,
      TotalNFe: 895225.54,
      TotalBCICMS: 104131.86,
      TotalICMS: 18081.53,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 2955,
      TotalNFe: 914352.61,
      TotalBCICMS: 84758.46,
      TotalICMS: 15140.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 2295,
      TotalNFe: 637008.75,
      TotalBCICMS: 65401.03,
      TotalICMS: 11450.67,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 22,
      TotalNFe: 37027.03,
      TotalBCICMS: 25571.71,
      TotalICMS: 3093.95,
      TotalBCICMSST: 13044.22,
      TotalICMSST: 2573.96
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 29,
      TotalNFe: 16808.42,
      TotalBCICMS: 12069.00,
      TotalICMS: 1824.01,
      TotalBCICMSST: 0,
      TotalICMSST: 0
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 61,
      TotalNFe: 22415.50,
      TotalBCICMS: 12560.69,
      TotalICMS: 2223.81,
      TotalBCICMSST: 0,
      TotalICMSST: 0
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 187,
      TotalNFe: 60086.59,
      TotalBCICMS: 13737.85,
      TotalICMS: 2185.59,
      TotalBCICMSST: 0,
      TotalICMSST: 0
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

}
