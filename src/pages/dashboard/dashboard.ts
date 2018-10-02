import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, LoadingController, ModalController, IonicPage, ToastController} from 'ionic-angular';
import {ImageResizer, ImageResizerOptions} from '@ionic-native/image-resizer';
import {Chart} from 'chart.js';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {ThrowStmt} from '@angular/compiler';
import {Profile} from '../../models/Profile'

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

  profileData: AngularFireObject<Profile>;

  barChart: any;
  lineChart: any;

  public clients: Array<Object> = [
    {id: 1, name: 'Manuel', surename: 'CRUZ', increments: true, amount: 'R$ 653'},
    {id: 2, name: 'Ulisses', surename: 'CABRAL', increments: true, amount: 'R$ 653'},
    {id: 3, name: 'Cristiana', surename: 'DUARTE', increments: true, amount: 'R$ 653'},
    {id: 4, name: 'Andréa', surename: 'ROSARIO', increments: false, amount: 'R$ 653'},
    {id: 5, name: 'Bartolomeu', surename: 'GOMES', increments: false, amount: 'R$ 653'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController,
              public loadingCtrl: LoadingController, private afAuth: AngularFireAuth, private toast: ToastController,
              private afDatabase: AngularFireDatabase) {

  }

  ngOnInit() {
    this.displayBarChart();
  }

  ionViewDidLoad() {
    this.presentLoadingDefault();

    setTimeout(() => {
      //this.renderCenterComponents();
      //this.renderBottomComponents();
      for (var id in Chart.instances) {
        Chart.instances[id].resize()
      }
    }, 3000);
  }

  ionViewWillEnter() {

    this.afAuth.authState.subscribe(data => {
      console.log(data);
      if (data && data.uid && data.email) {

        this.toast.create({
          message: `Bem-vindo , ${data.email}`,
          duration: 3000
        }).present();

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

    setTimeout(() => {
      // this.nasv.push(Page2);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  //Charts rendering -------
  renderCenterComponents() {

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

}
