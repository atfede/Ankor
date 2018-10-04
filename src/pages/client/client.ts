import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})

export class ClientPage {

  @ViewChild('lineClientCanvas') lineClientCanvas;

  actualValue: string;
  lastValue: string;
  isIncrementing: boolean;
  percentage: string;
  clientName: string;
  lineClient: any;
  tiketMedioMensal: string;
  mesAtual: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }
  

  ionViewDidLoad() {
    this.presentLoadingDefault();
    console.log('ionViewDidLoad ClientPage');
    setTimeout(() => {
      this.renderClientChart();

      for (var id in Chart.instances) {
        Chart.instances[id].resize()
      }

    }, 3000);
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
    const meses = [
    'Outubro',
    'Setembro',
    'Agosto',
    'Julho',
    'Junho',
    'Maio',
    'Abril',
    'Março',
    'Fevereiro',
    'Janeiro',
    'Dezembro',
    'Novembro'
  ];
    

    this.lineClient = new Chart(this.lineClientCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: meses,
        datasets: [
          {
            strokeColor: "#FFFFFF",
            pointColor: "#FFFFFF",
            pointStrokeColor: "#FFFFFF",
            pointHighlightFill: "#FFFFFF",
            data: [11, 12, 52, 34, 11, 13, 17, 28, 22, 15]
          }
        ]
      },
      options: {
        plugins: {
          datalabels: {
             display: function(context) {
              return context.dataset.data[context.dataIndex] > 1;
             }
          }
        },
        bezierCurve: true,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              display: false
            },

          }],
          xAxes: [{
            color: '#73A5B3',
            gridLines: {

              drawBorder: false,
              display: false
            },

          }]

        }
      },

    });
  }


  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }


  goBack() {
    this.navCtrl.setRoot('ClientsPage');
  }


}
