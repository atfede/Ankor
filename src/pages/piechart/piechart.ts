import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-piechart',
  templateUrl: 'piechart.html',
})
export class PiechartPage {

  public clients: Array<Object> = [
    {id: 1, name: 'Manuel', surename: 'CRUZ', increments: true, amount: 'R$ 653'},
    {id: 2, name: 'Ulisses', surename: 'CABRAL', increments: true, amount: 'R$ 653'},
    {id: 3, name: 'Cristiana', surename: 'DUARTE', increments: true, amount: 'R$ 653'},
    {id: 4, name: 'Andréa', surename: 'ROSARIO', increments: false, amount: 'R$ 653'},
    {id: 5, name: 'Bartolomeu', surename: 'GOMES', increments: false, amount: 'R$ 653'}
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

  displayProgressBar() {

  }

}
