import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Client} from "../../models/Client";

/**
 * Generated class for the TributosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tributos',
  templateUrl: 'tributos.html',
})


export class TributosPage {
  tributos: Array<{ abr: string, value: string, duedate: string, paid: boolean }>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TributosPage');

    this.tributos = [
      {
        abr: 'IRPJ',
        value: 'R$ 930,37',
        duedate: '30/11/2018',
        paid: false
      },
      {
        abr: 'CSLL',
        value: 'R$ 837,34',
        duedate: '30/11/2018',
        paid: false
      },
      {
        abr: 'Cofins',
        value: 'R$ 2.325,94',
        duedate: '25/11/2018', // 'PAGO'
        paid: false
      },
      {
        abr: 'PIS',
        value: 'R$ 503,95',
        duedate: '25/11/2018',
        paid: false
      }
    ];

  }

  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

}
