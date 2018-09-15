import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

import { Chart } from 'chart.js';

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html'
})



export class StatisticsPage {


  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;


  barChart: any;
  lineChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(() => {
      this.renderCenterComponents();
      this.renderBottomComponents();
      for (var id in Chart.instances) {
        Chart.instances[id].resize()
      }
    }, 3000);

  }

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
      }

    });
  }


  renderBottomComponents() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'horizontalBar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgb(125, 175, 188)',
            'rgb(125, 175, 188)',
            'rgb(125, 175, 188)',
            'rgb(125, 175, 188)',
            'rgb(125, 175, 188)',

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
