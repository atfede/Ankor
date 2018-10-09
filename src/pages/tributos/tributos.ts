import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  tributos: Array<{ abr: string, value: string, duedate: string , paid : boolean}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TributosPage');


    this.tributos = [
      {
        abr: 'IRPJ',
        value: 'R$ 1.000,00',
        duedate: '11/11/2018',
        paid: false
      },
      {
        abr: 'CSLL',
        value: 'R$ 1.000,00',
        duedate: '12/11/2018',
        paid: false
      },
      {
        abr: 'Cofins',
        value: 'R$ 3.000,00',
        duedate: 'Pago',
        paid: true
      },
      {
        abr: 'IPI',
        value: 'R$ 1.000,00',
        duedate: '17/11/2018',
        paid: false
      }
    ]

    
  }


  goToDash(){
    this.navCtrl.setRoot('DashboardPage', {}, {animate: true, direction: 'backward'});
  }

}
