import {Component} from '@angular/core'; //, ViewChild
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

  iter: number = 0;

  myDataSets = [{
    name: 'likes',
    points: [
      {x: 10, y: 100},
      {x: 20, y: 200},
      {x: 30, y: 300},
      {x: 40, y: 400},
      {x: 20, y: 500},
      {x: 20, y: 600}
    ]
  }];

  chartStyles = {
    circle: {
      color: '#ffffff',
      radius: 4
    },
    xAxis: {
      labels: {
        color: '#ffffff',
        fontSize: 18,
        angle: 0
      }, line: {
        color: '#c49846',
        width: 5
      }
    }
  };

  chartColors: any[] = [
    {
      backgroundColor: ["#c49846", "#c49846"]
    }];

  months = [
    '',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET'
  ];

  formatXAxisValue(value: number) {
    return `Month ${value}`;
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
    this.tiketMedioMensal = 'R$ 480 mil';
    this.mesAtual = 'R$ 563 mil';

  }

  establishMilestone() {
    console.log('Clicked');
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


}
