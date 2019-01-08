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

export class DashboardPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController,
              public loadingCtrl: LoadingController, private afAuth: AngularFireAuth, private toast: ToastController,
              private afDatabase: AngularFireDatabase, private http: HttpClient
    , private globals: Globals
              /*, private _helper: HelperService*/) {

    //TODO: Get type of Profile from login (servicio o comercio)
    this.extratoTotal = this.globals.clients;
    this.setCompanyName(this.extratoTotal[this.globals.CURRENT_PAGE][0].Client.Name);

  }

  profileData: AngularFireObject<Profile>;
  barChart: any;
  lineChart: any;

  //private currentPage = GlobalVariable.CURRENT_PAGE;
  //private numberOfCompanies = GlobalVariable.NUMBER_OF_COMPANIES;

  //top 5 clients
  public clients: Array<Client> = [
    {
      Id: 1,
      Name: '',
      Surename: 'Infrati Informatic.',
      Increments: true,
      Amount: 3767203,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>()
    }, //901.421.100-78
    {
      Id: 3,
      Name: '',
      Surename: 'Hidroscience Consu.',
      Increments: true,
      Amount: 2066400,
      ClientType: 'servicio',
      extratos: new Array<ExtratoTotal>()
    }, //469.574.560-72
    {
      Id: 4,
      Name: '',
      Surename: 'Mkt Lopes Com De C.',
      Increments: true,
      Amount: 911203.35,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>()
    }, //22829604000188
    {
      Id: 6,
      Name: '',
      Surename: 'L A Lopes Com De C.',
      Increments: true,
      Amount: 832291.15,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>()
    }, //096.233.801-00
    {
      Id: 10,
      Name: '',
      Surename: 'Surgeon Com De Mat.',
      Increments: false,
      Amount: 206869.35,
      ClientType: 'comercio',
      extratos: new Array<ExtratoTotal>()
    } //096.212.221-17
  ];
  public topFiveClients: any = new Array<Client>();
  public extratoTotal: any = new Array<Client>();
  public companyName: string;
  public mesAnteriorEsteAnoBarHeight: string;
  public mesmoMesNoAnoAnteriorBarHeight: string;

  getTotalExtratosCurrentYear() {
    let total = 0;

    this.extratoTotal[this.globals.CURRENT_PAGE].forEach((el) => {
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

    this.extratoTotal[this.globals.CURRENT_PAGE].forEach((el) => {
      if (el.MesAnoEmit.split('/')[1] == year) { //'18'
        totalICMS += el.TotalICMS;
      }
    });

    return totalICMS;
  }

  getTotalExtratosCurrentMonth() {
    let totalCurrentMonth = 0;
    let currentMonth = new Date().getMonth();

    if (Constants.IsComercio) {
      //return this.extratoTotal[this.globals.CURRENT_PAGE].TotalNFe - Constants.ICMS - Constants.COMERCIO - Constants.ISSQN5;

      this.extratoTotal[this.globals.CURRENT_PAGE].forEach((el) => {
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

  getTotalPreviousMonth() {
    //return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe;
    let date = new Date();
    let previousMonth = date.getMonth();
    let previousMonthStr = "";

    if (previousMonth == 0) {
      previousMonthStr = '12';
    }

    if (Constants.IsComercio) {
      //return this.extratoTotal[this.globals.CURRENT_PAGE].TotalNFe - Constants.ICMS - Constants.COMERCIO - Constants.ISSQN5;
      let totalPreviousMonth = 0;

      this.extratoTotal[this.globals.CURRENT_PAGE].forEach((el) => {
        if (el.MesAnoEmit.split('/')[0] == previousMonthStr && el.MesAnoEmit.split('/')[1] == '18') {
          totalPreviousMonth += el.TotalICMS;

        } else {
          totalPreviousMonth += 0;
        }
      });

      return totalPreviousMonth;

    } else if (Constants.IsServicio) {
      //return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.SERVICIO - Constants.ISSQN5;
    }

  }

  getTotalPreviousMonthPreviousYear() {
    //return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe;
    let totalPreviousMonth = 0;
    let date = new Date();
    let previousMonth = date.getMonth();
    let previousMonthStr = "";

    if (previousMonth == 0) {
      previousMonthStr = '12';
    }

    if (Constants.IsComercio) {
      //return this.extratoTotal[this.globals.CURRENT_PAGE].TotalNFe - Constants.ICMS - Constants.COMERCIO - Constants.ISSQN5;

      this.extratoTotal[this.globals.CURRENT_PAGE].forEach((el) => {
        if (el.MesAnoEmit.split('/')[0] == previousMonthStr && el.MesAnoEmit.split('/')[1] == '17') {
          totalPreviousMonth += el.TotalICMS;

        } else {
          totalPreviousMonth += 0;
        }
      });

    } else if (Constants.IsServicio) {
      //return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe - Constants.ICMS - Constants.SERVICIO - Constants.ISSQN5;
    }

    return totalPreviousMonth;
  }

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

      console.log("key: " + key);
      console.log("bar: " + bar);

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
      this.setCompanyName(this.extratoTotal[this.globals.CURRENT_PAGE][0].Client.Name);
    }
    this.getmesAnteriorEsteAnoBarHeight();
    this.getmesmoMesNoAnoAnteriorBarHeight();

  }

  viewNextCompany() {
    if (this.globals.CURRENT_PAGE < this.globals.NUMBER_OF_COMPANIES) {
      this.globals.CURRENT_PAGE++;
      //alert(this.globals.CURRENT_PAGE);
      this.setCompanyName(this.extratoTotal[this.globals.CURRENT_PAGE][0].Client.Name);
    }
    this.getmesAnteriorEsteAnoBarHeight();
    this.getmesmoMesNoAnoAnteriorBarHeight();
  }

  setCompanyName(name) {
    this.companyName = name;
  }

  getmesAnteriorEsteAnoBarHeight() {
    // let currentMonthTotal = this.getTotalExtratosCurrentMonth();
    let totalPreviousMonthTotal = this.getTotalPreviousMonth();
    let totalPreviousMonthPreviousYear = this.getTotalPreviousMonthPreviousYear();

    let highest = totalPreviousMonthTotal > totalPreviousMonthPreviousYear ? totalPreviousMonthTotal : totalPreviousMonthPreviousYear; // 7025 == 100% 7005, 6005
    highest += 20; // 100%

    var res = ((totalPreviousMonthTotal * highest) / totalPreviousMonthPreviousYear);

    if (res != NaN) {
      if (res > 10000) {
        res = res / 1000;
      } else if (res > 1000) {
        res = res / 100;
      } else {
        res = res / 100;
      }
    }
    if (!isNaN(res) && res > 100) {
      res = 100;
    }

    this.mesAnteriorEsteAnoBarHeight = !isNaN(res) ? String(Math.round(res)) : String(0);
  }

  getmesmoMesNoAnoAnteriorBarHeight() {
    let totalPreviousMonthTotal = this.getTotalPreviousMonth();
    let totalPreviousMonthPreviousYear = this.getTotalPreviousMonthPreviousYear();

    let highest = totalPreviousMonthTotal > totalPreviousMonthPreviousYear ? totalPreviousMonthTotal : totalPreviousMonthPreviousYear; // 7025 == 100% 7005, 6005
    highest += 20; // 100%

    var res = ((totalPreviousMonthPreviousYear * highest) / totalPreviousMonthTotal);

    if (res != NaN) {
      if (res > 10000) {
        res = res / 1000;
      } else if (res > 1000) {
        res = res / 100;
      } else {
        res = res / 100;
      }
    }
    if (!isNaN(res) && res > 100) {
      res = 100;
    }

    this.mesmoMesNoAnoAnteriorBarHeight = !isNaN(res) ? String(Math.round(res)) : String(0);
  }


}
