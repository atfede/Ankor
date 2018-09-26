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

  lineClient: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl : LoadingController) {
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

  renderClientChart() {

    this.lineClient = new Chart(this.lineClientCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["ABR", "MAI", "JUN", "JUL", "AGO", "SET"],
        datasets: [{
          label: '# of Votes',
          data: [652, 3562 ,4000, 7000],
          backgroundColor: [
            'rgb(125, 175, 188)',
            'rgb(125, 175, 188)'

          ],

          borderWidth: 1
        }]
      }, 
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
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




}
