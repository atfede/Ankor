import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, LoadingController, ModalController, IonicPage, ToastController} from 'ionic-angular';
import {ImageResizer, ImageResizerOptions} from '@ionic-native/image-resizer';
// import {Chart} from 'chart.js';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {ThrowStmt} from '@angular/compiler';
import {Profile} from '../../models/Profile';
import {UserData} from '../../models/UserData';
import {ExtratoTotal} from "../../models/ExtratoTotal";
import {Client} from "../../models/Client";
import {TipoCliente} from "../../models/TipoCliente";
import {Constants} from "../../models/Constants";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Globals} from "../../components/Globals";
// import {HelperService} from './services/helper.service';

declare var jquery: any;
declare var $: any;

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})

//  @IonicPage()
export class DashboardPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController,
              public loadingCtrl: LoadingController, private afAuth: AngularFireAuth, private toast: ToastController,
              private afDatabase: AngularFireDatabase, private http: HttpClient
    , private globals: Globals
              /*, private _helper: HelperService*/) {

    //TODO: Get type of Profile from login (servicio o comercio)


  }

  profileData: AngularFireObject<Profile>;
  barChart: any;
  lineChart: any;

  //private currentPage = GlobalVariable.CURRENT_PAGE;
  //private numberOfCompanies = GlobalVariable.NUMBER_OF_COMPANIES;

  public clients: Array<Client> = [
    {Id: 1, Name: 'DANIELLE', Surename: 'CUNHA VARELA', Increments: true, Amount: 2319.72, ClientType: 'comercio', extratos: new Array<ExtratoTotal>()}, //901.421.100-78
    {Id: 3, Name: 'FATIMA', Surename: 'APARECIDA FAGUN.', Increments: true, Amount: 2345.76, ClientType: 'servicio', extratos: new Array<ExtratoTotal>()}, //469.574.560-72
    {Id: 4, Name: '', Surename: 'MAXIMA LOGISTICA E DIST.', Increments: true, Amount: 3695.74, ClientType: 'comercio', extratos: new Array<ExtratoTotal>()}, //22829604000188
    {Id: 6, Name: 'PABLO', Surename: 'PAEZ RODRIGUEZ', Increments: true, Amount: 2353.14, ClientType: 'comercio', extratos: new Array<ExtratoTotal>()}, //096.233.801-00
    {Id: 10, Name: 'DEBORAH', Surename: 'PEREZ CABRERA', Increments: false, Amount: 2301.42, ClientType: 'comercio', extratos: new Array<ExtratoTotal>()} //096.212.221-17
  ];

  public topFiveClients: Array<Client> = [];

  getTotalExtratosCurrentYear() {
    let total = 0;

    this.extratoTotal.forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == '18') { //get current year
        total += el.TotalNFe;
      }
    });

    //TODO: check Constants
    if (Constants.IsComercio) {
      return total;
    } else if (Constants.IsServicio) {
      return total;
    }
    return null;
  }

  getImpostosPrevistos(year) {
    let totalICMS = 0;
    let totalICMSST = 0;

    //total ICMS
    this.extratoTotal.forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == year) { //'18'
        totalICMS += el.TotalICMS;
      }
    });

    /*
        this.extratoTotal.forEach((el) => {
          if (el.MesAnoEmit.split('/')[1] == year) { //'18'
            totalICMSST += el.TotalICMSST;
          }
        });
    */

    // return totalICMS + totalICMSST;
    return totalICMS;
  }


  getTotalExtratosCurrentMonth() {
    if (Constants.IsComercio) {
      return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.COMERCIO - Constants.ISSQN5;
    } else if (Constants.IsServicio) {
      return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.SERVICIO - Constants.ISSQN5;
    }
  }

  getTotalPreviousMonth() {
    return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe;
  }

  public extratoTotal: Array<ExtratoTotal> = [
    {
      MesAnoEmit: '01/17',
      QtdNFes: 9.00,
      TotalNFe: 4440.50,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/17',
      QtdNFes: 0.00,
      TotalNFe: 0.00,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/17',
      QtdNFes: 7.00,
      TotalNFe: 7883.20,
      TotalBCICMS: 48.50,
      TotalICMS: 8.73,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/17',
      QtdNFes: 1533,
      TotalNFe: 447218.65,
      TotalBCICMS: 18254.50,
      TotalICMS: 3285.81,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/17',
      QtdNFes: 6602,
      TotalNFe: 2102023.40,
      TotalBCICMS: 96317.00,
      TotalICMS: 17337.06,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/17',
      QtdNFes: 4926,
      TotalNFe: 1627491.75,
      TotalBCICMS: 91288.50,
      TotalICMS: 16431.93,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/17',
      QtdNFes: 5406,
      TotalNFe: 1589075.50,
      TotalBCICMS: 93744.50,
      TotalICMS: 168074.01,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/17',
      QtdNFes: 4893,
      TotalNFe: 1618932.95,
      TotalBCICMS: 131641.00,
      TotalICMS: 236095.38,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/17',
      QtdNFes: 3600,
      TotalNFe: 1156374.65,
      TotalBCICMS: 103584.00,
      TotalICMS: 19185.12,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/17',
      QtdNFes: 3787,
      TotalNFe: 1250434.60,
      TotalBCICMS: 130000.00,
      TotalICMS: 23400.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/17',
      QtdNFes: 3740,
      TotalNFe: 1101795.58,
      TotalBCICMS: 99873.76,
      TotalICMS: 17966.76,
      TotalBCICMSST: 298.71,
      TotalICMSST: 47.95,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/17',
      QtdNFes: 4446,
      TotalNFe: 1229158.74,
      TotalBCICMS: 104850.68,
      TotalICMS: 18754.05,
      TotalBCICMSST: 1261.86,
      TotalICMSST: 211.33,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 2981,
      TotalNFe: 832291.15,
      TotalBCICMS: 90087.37,
      TotalICMS: 16043.77,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 2491,
      TotalNFe: 856246.71,
      TotalBCICMS: 123742.47,
      TotalICMS: 20693.05,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 2518,
      TotalNFe: 792493.48,
      TotalBCICMS: 67115.83,
      TotalICMS: 11661.46,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 2799,
      TotalNFe: 895225.54,
      TotalBCICMS: 104131.86,
      TotalICMS: 18081.53,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 2955,
      TotalNFe: 914352.61,
      TotalBCICMS: 84758.46,
      TotalICMS: 15140.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 2295,
      TotalNFe: 637008.75,
      TotalBCICMS: 65401.03,
      TotalICMS: 11450.67,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 22,
      TotalNFe: 37027.03,
      TotalBCICMS: 25571.71,
      TotalICMS: 3093.95,
      TotalBCICMSST: 13044.22,
      TotalICMSST: 2573.96,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 29,
      TotalNFe: 16808.42,
      TotalBCICMS: 12069.00,
      TotalICMS: 1824.01,
      TotalBCICMSST: 0,
      TotalICMSST: 0,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 61,
      TotalNFe: 22415.50,
      TotalBCICMS: 12560.69,
      TotalICMS: 2223.81,
      TotalBCICMSST: 0,
      TotalICMSST: 0,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 187,
      TotalNFe: 60086.59,
      TotalBCICMS: 13737.85,
      TotalICMS: 2185.59,
      TotalBCICMSST: 0,
      TotalICMSST: 0,
      Client: new Client(1, '', '', true, 1, '', new Array<ExtratoTotal>()),
      Clients: new Array<Client>()
    }
  ];

  ngOnInit() {
    this.getTopFiveClients();
    this.displayBarChart();
  }

  ionViewDidLoad() {
    // this.presentLoadingDefault();

    /* setTimeout(() => {
       this.renderCenterComponents();
       this.renderBottomComponents();

       for (var id in Chart.instances) {
         Chart.instances[id].resize()
       }
     }, 3000);*/
  }

  ionViewWillEnter() {
    this.afAuth.authState.subscribe(data => {
      console.log(data);
      if (data && data.uid && data.email) {
        if (this.navParams.get('justLogged')) {
          this.toast.create({
            message: `Bem-vindo , ${data.email}`,
            duration: 3000
          }).present();
        }
        this.profileData = this.afDatabase.object(`profile/${data.uid}`);
      } else {
        this.navCtrl.push('ProfilePage');
      }
    });
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

    /* setTimeout(() => {
       // this.nasv.push(Page2);
     }, 1000);*/

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  setWidthAmount(amount) {
    let widthPct = amount * 200 / 1000;

    let styles = {
      'width': "'" + widthPct + "'"
      /* 'background-color': this.user.isExpired ? 'red' : 'transparent',
       'font-weight': this.isImportant ? 'bold' : 'normal'*/
    };
    return styles;
  }

  displayBarChart() {
    $("#bars li .bar").each(function (key, bar) {
      var percentage = $(this).data('percentage');

      $(this).animate({
        'height': percentage + '%'
      }, 1000);
    });
  }

  displayYearChart() {
    this.navCtrl.setRoot('PiechartPage', {}, {animate: true, direction: 'forward'});
  }

  getTopFiveClients() {

    var top5Clients = this.clients.sort(function (a, b) {
      return a.Amount - b.Amount;
    }).reverse();

    this.topFiveClients = top5Clients.slice(0, 5);
  }

  getPreviousMonthName() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    const m = d.getMonth();

    if (m == 0) {
      return monthNames[monthNames.length - 1];
    } else {
      return monthNames[m - 1];
    }
  }

  getCurrentMonthName() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    return monthNames[d.getMonth()]; //.substring(0, 3) ,.toUpperCase()
  }

  getLastYear() {
    //validar si es opción: mismo año u opción mes anterior a mes corriente
    var currentTime = new Date();
    return currentTime.getFullYear() - 1;
  }

  getCurrentYear() {
    //validar si es opción: mismo año u opción mes anterior a mes corriente
    var currentTime = new Date();
    return currentTime.getFullYear();
  }

  getProximoPagamentoDays() {
    return this.daysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
  }

  getProximoPagamentoMonth() {
    var currentTime = new Date();
    return currentTime.getMonth() + 1;
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

// July
  //daysInMonth(7,2009); // 31

  public iter: number = 0;

  getNfe() {//Observable<any>{
    if (this.iter == 0) {

      return JSON.stringify(this.http.get<UserData>('http://www.suitedb.com/atfede/connectionNfe.php'));

      //Ajax Request
      /*var form = new FormData();
      form.append("pIe_CNPJ", "1");
      form.append("pIeRS_CNPJ", "0963695916");
      form.append("pDtPeriodoInicio", "20181001");
      form.append("pDtPeriodoFim", "20181031");
      form.append("pNfeNormal", "true");
      form.append("pNfeCancelada", "false");
      form.append("pNfe_CFOP", "1");
      form.append("pCFOP", "0");
      form.append("pTipoDoc", "2");
      form.append("pProprio_Terceiro", "1");
      form.append("pPaginaAtual", "1");
      form.append("pModeloNFe", "true");
      form.append("pModeloNFCe", "false");

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://www.sefaz.rs.gov.br/ServicosNFE/NFE-ICS-EXT_Do.aspx",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/xml, text/xml, *!/!*; q=0.01",
          "Cookie": "__utmz=195556014.1539617505.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=195556014.2063226952.1539617505.1542725034.1542734378.27; __utmc=195556014; AffinitySefaz=5db14c88d5ff2afd64c946285ab5d8eaebda34d62903451c85fbc84a385d0bf6; ticketSessionProviderSS=6d80717334a747769d821aa50d059fbf; __utmt=1; ASP.NET_SessionId=3n4l0y45zccjcd55eeed1455; ticketSS=d0339e1b52244a57892ef99ca9f848fb; __utmb=195556014.6.10.1542734378",
          "Host": "www.sefaz.rs.gov.br",
          "Origin": "https://www.sefaz.rs.gov.br",
          "Referer": "https://www.sefaz.rs.gov.br/Receita/PainelContribuinte.aspx?ie=0963655825",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
          "x-dtpc": "542858887_238h12",
          "X-Requested-With": "XMLHttpRequest",
          "Connection": "keep-alive",
          "Accept-Language": "es-419,es;q=0.9",
          "cache-control": "no-cache",
          "Postman-Token": "480b75b9-f400-434b-8c49-ac081017da49"

          ,
          // "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Allow-Credentials": "true"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
      }

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }*/

    }

    this.iter++;
  }

  viewPreviousCompany() {
    if (this.globals.CURRENT_PAGE > 0) {
      this.globals.CURRENT_PAGE--;
      //this.extratoTotal[];
      //alert(this.globals.CURRENT_PAGE);
    }
  }

  viewNextCompany() {
    if (this.globals.CURRENT_PAGE < this.globals.NUMBER_OF_COMPANIES) {
      this.globals.CURRENT_PAGE++;
      //alert(this.globals.CURRENT_PAGE);

    }
  }


}
