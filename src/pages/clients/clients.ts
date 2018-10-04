import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';

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
    cid: string, lastValue: string, isIncrementing: boolean, percentage: string
  }>;

  months: Array<{ month: string, year: number, actMonth: boolean }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    var date = new Date();
    var monthIndex = date.getMonth();


    this.months = [];
    const meses = ['Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'];
    const year = date.getFullYear();
    var actualMonth = meses[monthIndex];
    console.log(actualMonth + ' month index ' + monthIndex);
    for (let p = 0; p < meses.length; p++) {
      this.months.push({
        month: meses[p],
        year: year,
        actMonth: actualMonth == meses[p]
      });
    }


    console.log('ionViewDidLoad ClientsPage');
    this.clients = [];
    this.clients.push({
      name: 'Manuel Curz',
      actualValue: 'R$ 127 mil',
      cid: '12312313',
      lastValue: '12/20/1956',
      isIncrementing: true,
      percentage: '22%'
    }, {
        name: 'Ulisses Cabl',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '32%'
      }, {
        name: 'Cristina Dua',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '60%'
      }, {
        name: 'Andrea Rosa',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '12%'
      }, {
        name: 'Juan Gomes',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '15%'
      }, {
        name: 'Jesus',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '53%'
      }, {
        name: 'Enrrique',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '12%'
      }, {
        name: 'Pedro',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '14%'
      }, {
        name: 'Juan',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '9%'
      }, {
        name: 'Nicolas',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '8%'
      }, {
        name: 'Fabian',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '11%'
      }, {
        name: 'Andres',
        actualValue: 'R$ 127 mil',
        cid: '12312313',
        lastValue: '12/20/1956',
        isIncrementing: true,
        percentage: '12%'
      }
    );

  }

  goToSpecificClient(client) {
    console.log("GO TO SPECIFIC CLIENT");
    this.navCtrl.setRoot('ClientPage', {
      cid: client.cid
      , name: client.name
      , actualValue: client.actualValue
      , lastValue: client.lastValue
      , isIncrementing: client.isIncrementing
      , percentage: client.percentage
    });
  }
  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

}
