import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})

export class ClientsPage {
  clients: Array<{
    name: string, actualValue: string,
    cid: string, lastValue: string, isIncrementing: boolean
  }>;

  months: Array<{ month: string, year: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.months = [];
    const meses = ['Outubro',
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
    const year = '2018';

    for (let p = 0; p < meses.length; p++){
      this.months.push({
        month : meses[p],
        year: year

      });
    }


    console.log('ionViewDidLoad ClientsPage');
    this.clients = [];
    this.clients.push({
      name: 'agus',
      actualValue: 'R$ 127 mil',
      cid: '12312313',
      lastValue: '12/20/1956',
      isIncrementing: true
    }
    );

  }

}
