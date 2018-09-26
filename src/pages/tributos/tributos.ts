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
  tributos: Array<{ abr: string, value: string, duedate: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TributosPage');


    this.tributos = [
      {
        abr: 'IRPJ',
        value: 'R$ 1.000,00',
        duedate: '11/11/2018'
      },
      {
        abr: 'CSLL',
        value: 'R$ 1.000,00',
        duedate: '12/11/2018'
      },
      {
        abr: 'Cofins',
        value: '',
        duedate: 'Pago'
      }
    ]

    
  }

}
