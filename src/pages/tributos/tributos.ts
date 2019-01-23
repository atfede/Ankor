import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Client} from "../../models/Client";
import {Globals} from "../../components/Globals";
import {Constants} from "../../models/Constants";

@IonicPage()
@Component({
  selector: 'page-tributos',
  templateUrl: 'tributos.html',
})

export class TributosPage {
  tributos: Array<{ nombre: string, value: string, duedate: string, paid: boolean }>; //TODO: poner value: string a value: number
  companyName: string;
  extratoTotal: any = new Array<Client>();


  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: Globals) {
    this.extratoTotal = this.globals.clients[this.globals.loggedUserIndex];
    this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
  }

  ionViewDidLoad() {

    this.tributos = [
      {
        nombre: 'IRPJ',
        // value: this.getIrpj(),
        value: '9.575,50',
        duedate: '30/01/2019',
        paid: false
      },
      {
        nombre: 'CSLL',
        // value: this.getCsll(),
        value: '8.617,95',
        duedate: '30/01/2019',
        paid: false
      },
      {
        nombre: 'Cofins',
        // value: this.getCofins(),
        value: '23.938,75',
        duedate: '25/01/2019', // 'PAGO'
        paid: false
      },
      {
        nombre: 'PIS',
        // value: this.getPis(),
        value: '5.186,73',
        duedate: '25/01/2019',
        paid: false
      }
    ];
  }

  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

  setCompanyName(name) {
    this.companyName = name;

    this.companyName = "MKT";
  }

  viewPreviousCompany() {
    if (this.globals.CURRENT_PAGE > 0) {
      this.globals.CURRENT_PAGE--;
      //this.extratoTotal[];
      //alert(this.globals.CURRENT_PAGE);
      this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
      this.setTributos();
    }
  }

  viewNextCompany() {
    if (this.globals.CURRENT_PAGE < this.globals.NUMBER_OF_COMPANIES) {
      this.globals.CURRENT_PAGE++;
      //alert(this.globals.CURRENT_PAGE);
      this.setCompanyName(this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE][0].Client.Name);
      this.setTributos();
    }
  }

  getTotalExtratosCurrentMonth() {
    let totalCurrentMonth = 0;
    let currentMonth = new Date().getMonth();

    if (Constants.IsComercio) {
      //return this.extratoTotal[this.globals.CURRENT_PAGE].TotalNFe - Constants.ICMS - Constants.COMERCIO - Constants.ISSQN5;

      this.extratoTotal[this.globals.loggedUser][this.globals.CURRENT_PAGE].forEach((el) => {
        if (el.MesAnoEmit.split('/')[0] == '01' && el.MesAnoEmit.split('/')[1] == '19') {
          totalCurrentMonth += el.TotalICMS;

        } else {
          totalCurrentMonth = 0;
        }
      });

    } else if (Constants.IsServicio) {
      //return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.SERVICIO - Constants.ISSQN5;
    }

    return totalCurrentMonth;
  }

  setTributos() {
    this.tributos = [
      {
        nombre: 'IRPJ',
        // value: this.getIrpj(),
        value: '9.575,50',
        duedate: '30/01/2019',
        paid: false
      },
      {
        nombre: 'CSLL',
        // value: this.getCsll(),
        value: '8.617,95',
        duedate: '30/01/2019',
        paid: false
      },
      {
        nombre: 'Cofins',
        // value: this.getCofins(),
        value: '23.938,75',
        duedate: '25/01/2019', // 'PAGO'
        paid: false
      },
      {
        nombre: 'PIS',
        // value: this.getPis(),
        value: '5.186,73',
        duedate: '25/01/2019',
        paid: false
      }
    ];
  }

  getIrpj() {
    return this.getTotalExtratosCurrentMonth() * 1.2;
  }

  getCsll() {
    return this.getTotalExtratosCurrentMonth() * 1.08;
  }

  getCofins() {
    return this.getTotalExtratosCurrentMonth() * 3;
  }

  getPis() {
    return this.getTotalExtratosCurrentMonth() * 0.65;
  }

}
