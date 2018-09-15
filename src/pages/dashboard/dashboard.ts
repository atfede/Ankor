import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

import { Chart } from 'chart.js';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})



export class DashboardPage {


  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;


  barChart: any;
  lineChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public loadingCtrl : LoadingController) {

    this.presentLoadingDefault();
    
    setTimeout(() => {
      this.renderCenterComponents();
      this.renderBottomComponents();
      for (var id in Chart.instances) {
        Chart.instances[id].resize()
      }
      
    }, 3000);

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
  
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    loading.present();
  }
  
  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      // this.nasv.push(Page2);
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }




  //Charts rendering -------
  renderCenterComponents() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Ago 2018", "Set 2017"],
        datasets: [{
          label: '# of Votes',
          data: [4000, 7000],
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

      annotation: {
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 5600,
          borderColor: 'rgb(196,152,70)',
          borderWidth: 4,
          label: {
            enabled: true,
            content: 'Test label'
          }
        }]
      }

    });
  }


  renderBottomComponents() {
    var actualmonth = 'Setembro 2018';
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'horizontalBar',
      data: {
        labels: ["Manuel CRUZ", "Ulisses CABRAL", "Cristiana DUARTE", "Andréa ROSÁRIO", "Bartolomeu GOMES"],
        datasets: [{
          label: 'Top 5 Clientes \n' + actualmonth,
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [

            'rgb(0,39,61)',
            'rgb(0,39,61)',
            'rgb(0,39,61)',
            'rgb(0,39,61)',
            'rgb(0,39,61)',

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
      }

    });

  }

}
