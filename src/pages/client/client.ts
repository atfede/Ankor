import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Globals} from "../../components/Globals";
import {Client} from "../../models/Client";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MetasComponent} from "../metas/metas";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {MetasService} from "../../services/metas.service";

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})

export class ClientPage {

  loggedUser: string;
  actualValue: string;
  lastValue: string;
  isIncrementing: boolean;
  percentage: string;
  clientName: string;
  metaValor: number = 0;
  lineClient: any;
  tiketMedioMensal: number = 0;
  mesAtual: number = 0;
  totalFaturado: number = 77531.24;
  extratoTotal: any = new Array<Client>();
  iter: number = 0;
  milestone: number = 0;
  metaEstablecida: number = 0;
  metaEstablecidaFlag: Boolean = false;
  myDataSets: any;
  m1: number;
  m2: number;
  m3: number;
  m4: number;
  m5: number;
  m6: number;
  selectedDateJul: any;
  selectedDateAgo: any;
  selectedDateSet: any;
  selectedDateOut: any;
  selectedDateNov: any;
  selectedDateDez: any;
  jul: any;
  ago: any;
  set: any;
  out: any;
  nov: any;
  dez: any;
  metas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
              private globals: Globals, private metasService: MetasService) {
    this.loggedUser = this.globals.loggedUser;
    this.extratoTotal = this.globals.clients;
    //TODO: get últimos 6 meses del año
    this.selectedDateJul = {month: "Julho", year: 2018};
    this.selectedDateAgo = {month: "Agosto", year: 2018};
    this.selectedDateSet = {month: "Setembro", year: 2018};
    this.selectedDateOut = {month: "Outubro", year: 2018};
    this.selectedDateNov = {month: "Novembro", year: 2018};
    this.selectedDateDez = {month: "Decembro", year: 2018};

    this.m1 = 0;
    this.m2 = 0;
    this.m3 = 0;
    this.m4 = 0;
    this.m5 = 0;
    this.m6 = 0;

    if (this.navParams.get('name') != undefined) {
      this.jul = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateJul);
      this.ago = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateAgo);
      this.set = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateSet);
      this.out = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateOut);
      this.nov = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateNov);
      this.dez = this.globals.getTopTenClientsByNameAndDate(this.navParams.get('name'), this.selectedDateDez);

      this.m1 = this.jul.length > 0 ? this.jul[0].TotalNFe : 0;
      this.m2 = this.ago.length > 0 ? this.ago[0].TotalNFe : 0;
      this.m3 = this.set.length > 0 ? this.set[0].TotalNFe : 0;
      this.m4 = this.out.length > 0 ? this.out[0].TotalNFe : 0;
      this.m5 = this.nov.length > 0 ? this.nov[0].TotalNFe : 0;
      this.m6 = this.dez.length > 0 ? this.dez[0].TotalNFe : 0;

      this.getTiketMedioMensaltiketMedioMensal(this.m1, this.m2, this.m3, this.m4, this.m5, this.m6);
      this.mesAtual = this.m6;
    }

    this.myDataSets = [{
      name: '', //prices
      points: [
        {x: 7, y: this.m1},
        {x: 8, y: this.m2},
        {x: 9, y: this.m3},
        {x: 10, y: this.m4},
        {x: 11, y: this.m5},
        {x: 12, y: this.m6}
      ]
    }];
  }

  chartStyles = {
    dataSetStyles: [
      {
        circle: {
          color: '#ffffff',
          radius: 6
        },
        labels: { // line values
          value: {
            color: '#ffffff',
            fontSize: 24
          },
          yAxis: {
            color: 'transparent', //left line
            fontSize: 14
          }
        },
        line: {
          color: '#c49846',
          width: 5
        }
      },
      {
        circle: {
          color: '#ffffff',
          radius: 6
        },
        labels: {
          value: {
            color: '#ffffff',
            fontSize: 14
          },
          yAxis: {
            color: '#ffffff',
            fontSize: 14
          }
        },
        line: {
          color: '#c49846',
          width: 5
        }
      }
    ],
    xAxis: {
      labels: {
        color: '#ffffff',
        fontSize: 18,
        angle: 0
      }
    },
    showXAxis: false,
    showYAxis: false
  };

  months = [
    '',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET'
  ];


  // [xLabelFunction]="formatXAxisValue.bind(this)" poner en html

  formatXAxisValue(value: number) {
    return `Mes ${value}`;
    /*this.iter++;
     return this.months[this.iter];*/
  }

  ionViewDidLoad() {
    this.presentLoadingDefault();
  }

  ionViewWillEnter() {
    this.clientName = this.navParams.get('name');
    this.lastValue = this.navParams.get('lastValue');
    this.isIncrementing = this.navParams.get('isIncrementing');
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  goBack() {
    this.navCtrl.setRoot('ClientsPage');
  }

  getPIS() {
    return 0.65 * this.totalFaturado / 100;
  }

  setAndDisplayMilestone(milestone) {
    this.metaEstablecida = milestone._value;
    this.metaEstablecidaFlag = true;
  }

  getTiketMedioMensaltiketMedioMensal(m1, m2, m3, m4, m5, m6) {
    let suma = m1 + m2 + m3 + m4 + m5 + m6;
    this.tiketMedioMensal = suma / 6;
  }

  addMeta(clientName, meta) {
    this.metasService.addMeta(clientName, meta._value).subscribe(meta => this.metas.push({clientName, meta}));
    this.metaEstablecida = meta._value;
    this.metaEstablecidaFlag = true;
  }

  updateMeta(user, clientName, meta) {
    this.metasService.updateMeta(user, clientName, meta._value).subscribe(meta => this.metas.push({user, clientName, meta}));
    this.metaEstablecida = meta._value;
    this.metaEstablecidaFlag = true;
  }
}
