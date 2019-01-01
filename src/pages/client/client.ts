import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

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

  iter: number = 0;
  milestone: number = 0;
  metaEstablecida: number = 0;
  metaEstablecidaFlag: Boolean = false;

  myDataSets = [{
    name: '', //prices
    points: [
      {x: 6, y: 5174.53}, //junho 2018
      {x: 7, y: 8320.66}, //julio 2018
      {x: 8, y: 7200.42}, //agosto 2018
      {x: 9, y: 635.67}, //sept 2018
      {x: 10, y: 4947.73},
      {x: 11, y: 11349.58}
    ]
  }];

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
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
