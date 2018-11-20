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
              private afDatabase: AngularFireDatabase
              /*, private _helper: HelperService*/
  ) {

  }

  profileData: AngularFireObject<Profile>;
  barChart: any;
  lineChart: any;

  public clients: Array<Client> = [
    /*{Id: 1, Name: 'Manuel', Surename: 'CRUZ', Increments: true, Amount: 70000},
    {Id: 2, Name: 'Ulisses', Surename: 'CABRAL', Increments: true, Amount: 65000},
    {Id: 3, Name: 'Cristiana', Surename: 'DUARTE', Increments: true, Amount: 60000},
    {Id: 4, Name: 'Andréa', Surename: 'ROSARIO', Increments: false, Amount: 80000},
    {Id: 5, Name: 'Nestor', Surename: 'GOMES', Increments: false, Amount: 85000},
    {Id: 6, Name: 'Álvar', Surename: 'LOPEZ', Increments: true, Amount: 90000},*/
    {Id: 7, Name: '', Surename: '901.421.100', Increments: true, Amount: 2319.72},
    {Id: 8, Name: '', Surename: '312.924.508', Increments: true, Amount: 2298.84},
    {Id: 9, Name: '', Surename: '096.212.221', Increments: true, Amount: 2301.42},
    {Id: 10, Name: '', Surename: '22829604000', Increments: true, Amount: 4704.37},
    {Id: 11, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49}
  ];

  public topFiveClients: Array<Client> = [];

  /*public extratos: Array<Object> = [
    {
      DtEmit: '01/11/18',
      DtEntSai: '01/11/18',
      IEEmit: '096/3655825',
      UFEmit: 'RS',
      CNPJEmit: '24.127.085/0001-31',
      IEDestRemet: '',
      UFDestRemet: 'RS',
      CNPJDestRemet: '809.391.630-04',
      Mod: '55',
      Serie: '1',
      Numero: '55556',
      TotalNFe: 958.66,
      TotalBCICMS: 189.36,
      TotalICMS: 34.08,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      ICMSFCP: 0.00,
      ICMSInterestadualUFDestino: 0.00,
      ICMSInterestadualUFRem: 0.00,
      Sit: 'N',
      ES: 'S'
    },
    {
      DtEmit: '01/11/18',
      DtEntSai: '01/11/18',
      IEEmit: '096/3655825',
      UFEmit: 'RS',
      CNPJEmit: '24.127.085/0001-31',
      IEDestRemet: '',
      UFDestRemet: 'RS',
      CNPJDestRemet: '588.802.830-49',
      Mod: '55',
      Serie: '1',
      Numero: '55557',
      TotalNFe: '194,85',
      TotalBCICMS: '0,00',
      TotalICMS: '0,00',
      TotalBCICMSST: '0,00',
      TotalICMSST: '0,00',
      ICMSFCP: '0,00',
      ICMSInterestadualUFDestino: '0,00',
      ICMSInterestadualUFRem: '0,00',
      Sit: 'N',
      ES: 'S'
    },
    {
      DtEmit: '01/11/18',
      DtEntSai: '01/11/18',
      IEEmit: '096/3655825',
      UFEmit: 'RS',
      CNPJEmit: '24.127.085/0001-31',
      IEDestRemet: '',
      UFDestRemet: 'RS',
      CNPJDestRemet: '004.919.210-80',
      Mod: '55',
      Serie: '1',
      Numero: '55558',
      TotalNFe: 64.95,
      TotalBCICMS: 0.00,
      TotalICMS: 34.08,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      ICMSFCP: 0.00,
      ICMSInterestadualUFDestino: 0.00,
      ICMSInterestadualUFRem: 0.00,
      Sit: 'N',
      ES: 'S'
    },
    {
      DtEmit: '01/11/18',
      DtEntSai: '01/11/18',
      IEEmit: '096/3655825',
      UFEmit: 'RS',
      CNPJEmit: '24.127.085/0001-31',
      IEDestRemet: '',
      UFDestRemet: 'RS',
      CNPJDestRemet: '809.391.630-04',
      Mod: '55',
      Serie: '1',
      Numero: '55556',
      TotalNFe: 958.66,
      TotalBCICMS: 189.36,
      TotalICMS: 34.08,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      ICMSFCP: 0.00,
      ICMSInterestadualUFDestino: 0.00,
      ICMSInterestadualUFRem: 0.00,
      Sit: 'N',
      ES: 'S'
    },
    {
      DtEmit: '01/11/18',
      DtEntSai: '01/11/18',
      IEEmit: '096/3655825',
      UFEmit: 'RS',
      CNPJEmit: '24.127.085/0001-31',
      IEDestRemet: '',
      UFDestRemet: 'RS',
      CNPJDestRemet: '809.391.630-04',
      Mod: '55',
      Serie: '1',
      Numero: '55556',
      TotalNFe: '958,66',
      TotalBCICMS: '189,36',
      TotalICMS: '34,08',
      TotalBCICMSST: '0,00',
      TotalICMSST: '0,00',
      ICMSFCP: '0,00',
      ICMSInterestadualUFDestino: '0,00',
      ICMSInterestadualUFRem: '0,00',
      Sit: 'N',
      ES: 'S'
    },
    {
      DtEmit: '01/11/18',
      DtEntSai: '01/11/18',
      IEEmit: '096/3655825',
      UFEmit: 'RS',
      CNPJEmit: '24.127.085/0001-31',
      IEDestRemet: '',
      UFDestRemet: 'RS',
      CNPJDestRemet: '809.391.630-04',
      Mod: '55',
      Serie: '1',
      Numero: '55556',
      TotalNFe: '958,66',
      TotalBCICMS: '189,36',
      TotalICMS: '34,08',
      TotalBCICMSST: '0,00',
      TotalICMSST: '0,00',
      ICMSFCP: '0,00',
      ICMSInterestadualUFDestino: '0,00',
      ICMSInterestadualUFRem: '0,00',
      Sit: 'N',
      ES: 'S'
    },
    {
      DtEmit: '01/11/18',
      DtEntSai: '01/11/18',
      IEEmit: '096/3655825',
      UFEmit: 'RS',
      CNPJEmit: '24.127.085/0001-31',
      IEDestRemet: '',
      UFDestRemet: 'RS',
      CNPJDestRemet: '809.391.630-04',
      Mod: '55',
      Serie: '1',
      Numero: '55556',
      TotalNFe: '958,66',
      TotalBCICMS: '189,36',
      TotalICMS: '34,08',
      TotalBCICMSST: '0,00',
      TotalICMSST: '0,00',
      ICMSFCP: '0,00',
      ICMSInterestadualUFDestino: '0,00',
      ICMSInterestadualUFRem: '0,00',
      Sit: 'N',
      ES: 'S'
    },

  ];*/

  getTotalExtratosCurrentYear() {
    let total = 0;
    this.extratoTotal.forEach((el) => {
      total += el.TotalNFe;
    });

    return total;
  }

  getTotalExtratosCurrentMonth() {
    return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe;
  }

  getTotalPreviousMonth() {
    return this.extratoTotal[this.extratoTotal.length - 1].TotalNFe;
  }

  getImpostosPrevistos() {
    let total = 0;
    this.extratoTotal.forEach((el) => {
      total += el.TotalICMS;
    });

    return total.toFixed(2);
  }

  public extratoTotal: Array<ExtratoTotal> = [
    {
      MesAnoEmit: '01/18',
      QtdNFes: 2981,
      TotalNFe: 832291.15,
      TotalBCICMS: 90087.37,
      TotalICMS: 16043.77,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 2491,
      TotalNFe: 856246.71,
      TotalBCICMS: 123742.47,
      TotalICMS: 20693.05,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 2518,
      TotalNFe: 792493.48,
      TotalBCICMS: 67115.83,
      TotalICMS: 11661.46,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 2799,
      TotalNFe: 895225.54,
      TotalBCICMS: 104131.86,
      TotalICMS: 18081.53,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 2955,
      TotalNFe: 914352.61,
      TotalBCICMS: 84758.46,
      TotalICMS: 15140.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 2295,
      TotalNFe: 637008.75,
      TotalBCICMS: 65401.03,
      TotalICMS: 11450.67,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 22,
      TotalNFe: 37027.03,
      TotalBCICMS: 25571.71,
      TotalICMS: 3093.95,
      TotalBCICMSST: 13044.22,
      TotalICMSST: 2573.96
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 29,
      TotalNFe: 16808.42,
      TotalBCICMS: 12069.00,
      TotalICMS: 1824.01,
      TotalBCICMSST: 0,
      TotalICMSST: 0
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 61,
      TotalNFe: 22415.50,
      TotalBCICMS: 12560.69,
      TotalICMS: 2223.81,
      TotalBCICMSST: 0,
      TotalICMSST: 0
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 187,
      TotalNFe: 60086.59,
      TotalBCICMS: 13737.85,
      TotalICMS: 2185.59,
      TotalBCICMSST: 0,
      TotalICMSST: 0
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

  //Charts rendering -------
  /*  renderCenterComponents() {

      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: ["Ago 2018", "Set 2017"],
          datasets: [{
            label: '',
            data: [6800, 7000],
            backgroundColor: [
              'rgb(125, 175, 188)',
              'rgb(125, 175, 188)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          curvature: 1, //x
          scales: {
            yAxes: [{
              barPercentage: 0.2,
              display: false,
              gridLines: {
                drawBorder: false,
                display: false
              }
            }],
            xAxes: [{
              barPercentage: 0.2,
              color: '#73A5B3',
              gridLines: {
                drawBorder: false,
                display: false
              }
            }]
          }
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 5600,
            borderColor: 'rgb(196,152,70)',
            borderWidth: 4,
            label: {
              enabled: true,
              content: 'Test label'
            }
          }]
        }
      });
    }*/

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

    var top5Clientes = this.clients.sort(function (a, b) {
      return a.Amount - b.Amount;
    }).reverse();

    this.topFiveClients = top5Clientes.slice(0, 5);

    //return top5Clientes.slice(0, 5);
  }

  /* renderBottomComponents() {
   var actualmonth = 'Setembro 2018';
   this.lineChart = new Chart(this.lineCanvas.nativeElement, {

   type: 'horizontalBar',
   data: {
   labels: ["Manuel CRUZ", "Ulisses CABRAL", "Cristiana DUARTE", "Andréa ROSÁRIO", "Bartolomeu GOMES"],
   datasets: [{
   label: 'Top 5 Clientes \n' + actualmonth,
   data: [12, 19, 3, 5, 2, 3],
   backgroundColor: [
   'rgb(0,39,61)',
   'rgb(0,39,61)',
   'rgb(0,39,61)',
   'rgb(0,39,61)',
   'rgb(0,39,61)',
   ],
   borderWidth: 1
   }]
   },
   options: {
   responsive: true,
   maintainAspectRatio: true,
   scales: {
   yAxes: [{
   ticks: {
   beginAtZero: true
   }
   }]
   }
   }

   });

   }*/

  getPreviousMonthName() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const d = new Date();
    return monthNames[d.getMonth() - 1]; //.substring(0, 3 , .toUpperCase()
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

}
