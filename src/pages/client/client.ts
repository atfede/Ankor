import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Globals} from "../../components/Globals";
import {Client} from "../../models/Client";

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})

export class ClientPage {

  actualValue: string;
  lastValue: string;
  isIncrementing: boolean;
  percentage: string;
  clientName: string;
  lineClient: any;
  tiketMedioMensal: string;
  mesAtual: string;
  totalFaturado: number = 77531.24;

  public extratoTotal: any = new Array<Client>();

  iter: number = 0;
  milestone: number = 0;
  metaEstablecida: number = 0;
  metaEstablecidaFlag: Boolean = false;

  myDataSets: any;

  p1: number;
  p2: number;
  p3: number;
  p4: number;
  p5: number;
  p6: number;
  selectedDateJul: any;
  selectedDateAgo: any;
  selectedDateSet: any;
  selectedDateOut: any;
  selectedDateNov: any;
  selectedDateDez: any;

  jul: any;
  ago: any;
  set: any;
  out: any;
  nov: any;
  dez: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private globals: Globals) {
    this.extratoTotal = this.globals.clients;
    this.selectedDateJul = {month: "Julho", year: 2018};
    this.selectedDateAgo = {month: "Agosto", year: 2018};
    this.selectedDateSet = {month: "Setembro", year: 2018};
    this.selectedDateOut = {month: "Outubro", year: 2018};
    this.selectedDateNov = {month: "Novembro", year: 2018};
    this.selectedDateDez = {month: "Decembro", year: 2018};

    this.p1 = 0;
    this.p2 = 0;
    this.p3 = 0;
    this.p4 = 0;
    this.p5 = 0;
    this.p6 = 0;

    if (this.navParams.get('name') != undefined) {
      this.jul = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateJul);
      this.ago = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateAgo);
      this.set = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateSet);
      this.out = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateOut);
      this.nov = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateNov);
      this.dez = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateDez);

      this.p1 = this.jul.length > 0 ? this.jul[0].TotalNFe : 0;
      this.p2 = this.ago.length > 0 ? this.ago[0].TotalNFe : 0;
      this.p3 = this.set.length > 0 ? this.set[0].TotalNFe : 0;
      this.p4 = this.out.length > 0 ? this.out[0].TotalNFe : 0;
      this.p5 = this.nov.length > 0 ? this.nov[0].TotalNFe : 0;
      this.p6 = this.dez.length > 0 ? this.dez[0].TotalNFe : 0;
    }
    this.myDataSets = [{
      name: '', //prices
      points: [
        {x: 7, y: this.p1},
        {x: 8, y: this.p2},
        {x: 9, y: this.p3},
        {x: 10, y: this.p4},
        {x: 11, y: this.p5},
        {x: 12, y: this.p6}
      ]
    }];
  }



  chartStyles = {
    dataSetStyles: [
      {
        circle: {
          color: '#ffffff',
          radius: 6
        },
        labels: { // line values
          value: {
            color: '#ffffff',
            fontSize: 24
          },
          yAxis: {
            color: 'transparent', //left line
            fontSize: 14
          }
        },
        line: {
          color: '#c49846',
          width: 5
        }
      },
      {
        circle: {
          color: '#ffffff',
          radius: 6
        },
        labels: {
          value: {
            color: '#ffffff',
            fontSize: 14
          },
          yAxis: {
            color: '#ffffff',
            fontSize: 14
          }
        },
        line: {
          color: '#c49846',
          width: 5
        }
      }
    ],
    xAxis: {
      labels: {
        color: '#ffffff',
        fontSize: 18,
        angle: 0
      }
    },
    showXAxis: false,
    showYAxis: false
  };

  months = [
    '',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET'
  ];


  // [xLabelFunction]="formatXAxisValue.bind(this)" poner en html

  formatXAxisValue(value: number) {
    return `Mes ${value}`;
    /*this.iter++;
     return this.months[this.iter];*/
  }

  ionViewDidLoad() {
    this.presentLoadingDefault();
  }

  ionViewWillEnter() {
    this.clientName = this.navParams.get('name');
    this.lastValue = this.navParams.get('lastValue');
    this.isIncrementing = this.navParams.get('isIncrementing');

    // Hard coded values
    this.tiketMedioMensal = 'R$ 37 mil'; //37628,59
    this.mesAtual = 'R$ 77 mil'; //77.531,24

  }

  renderClientChart() {

  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  goBack() {
    this.navCtrl.setRoot('ClientsPage');
  }

  getPIS() {
    return 0.65 * this.totalFaturado / 100;
  }

  displayMilestone(milestone) {
    this.metaEstablecida = milestone._value;
    this.metaEstablecidaFlag = true;
  }


}
