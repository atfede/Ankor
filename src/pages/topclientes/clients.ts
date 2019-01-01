import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, DateTime} from 'ionic-angular';
import {Client} from "../../models/Client";
import {clientPct} from "../../models/clientPct";

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

  public isSearchBarOpened = false;
  searchTerm: string = '';
  filteredTopTenClients: Array<clientPct> = [];

  months: Array<{ month: string, year: number, actMonth: boolean }>;

  public clientsOctubreTopTen: Array<clientPct> = [];
  // public percentageRandom: Array<number> = [];

  public clientsJulio: Array<clientPct> = [
    {
      Id: 1,
      Name: '',
      Surename: '901.421.100',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 2,
      Name: '',
      Surename: '312.924.508',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 3,
      Name: '',
      Surename: '096.212.221',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'servicio',
      Percentage: 0
    },
    {
      Id: 4,
      Name: '',
      Surename: '22829604000',
      Increments: true,
      Amount: 4704.37,
      ClientType: 'comercio',
      Percentage: 0
    },
    {Id: 5, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49, ClientType: 'comercio', Percentage: 0},
    {
      Id: 6,
      Name: '',
      Surename: '901.421.100',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 7,
      Name: '',
      Surename: '312.924.508',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 8,
      Name: '',
      Surename: '096.212.221',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'servicio',
      Percentage: 0
    },
    {
      Id: 9,
      Name: '',
      Surename: '22829604000',
      Increments: true,
      Amount: 4704.37,
      ClientType: 'comercio',
      Percentage: 0
    },
    {Id: 10, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49, ClientType: 'comercio', Percentage: 0}
  ];

  public clientsAgosto: Array<clientPct> = [
    {
      Id: 1,
      Name: '',
      Surename: '901.421.100',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 2,
      Name: '',
      Surename: '312.924.508',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 3,
      Name: '',
      Surename: '096.212.221',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'servicio',
      Percentage: 0
    },
    {
      Id: 4,
      Name: '',
      Surename: '22829604000',
      Increments: true,
      Amount: 4704.37,
      ClientType: 'comercio',
      Percentage: 0
    },
    {Id: 5, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49, ClientType: 'comercio', Percentage: 0},
    {
      Id: 6,
      Name: '',
      Surename: '901.421.100',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 7,
      Name: '',
      Surename: '312.924.508',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 8,
      Name: '',
      Surename: '096.212.221',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'servicio',
      Percentage: 0
    },
    {
      Id: 9,
      Name: '',
      Surename: '22829604000',
      Increments: true,
      Amount: 4704.37,
      ClientType: 'comercio',
      Percentage: 0
    },
    {Id: 10, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49, ClientType: 'comercio', Percentage: 0}
  ];

  public clientsSetiembre: Array<clientPct> = [
    {
      Id: 1,
      Name: '',
      Surename: '901.421.100',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 2,
      Name: '',
      Surename: '312.924.508',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 3,
      Name: '',
      Surename: '096.212.221',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'servicio',
      Percentage: 0
    },
    {
      Id: 4,
      Name: '',
      Surename: '22829604000',
      Increments: true,
      Amount: 4704.37,
      ClientType: 'comercio',
      Percentage: 0
    },
    {Id: 5, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49, ClientType: 'comercio', Percentage: 0},
    {
      Id: 6,
      Name: '',
      Surename: '901.421.100',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 7,
      Name: '',
      Surename: '312.924.508',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 0
    },
    {
      Id: 8,
      Name: '',
      Surename: '096.212.221',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'servicio',
      Percentage: 0
    },
    {
      Id: 9,
      Name: '',
      Surename: '22829604000',
      Increments: true,
      Amount: 4704.37,
      ClientType: 'comercio',
      Percentage: 0
    },
    {Id: 10, Name: '', Surename: '887.440.600', Increments: true, Amount: 719.49, ClientType: 'comercio', Percentage: 0}
  ];

  public clientsOctubre: Array<clientPct> = [
    {
      Id: 1,
      Name: 'DANIELLE',
      Surename: 'CUNHA VARELA',
      Increments: true,
      Amount: 2319.72,
      ClientType: 'comercio',
      Percentage: 16
    }, //901.421.100-78
    {
      Id: 2,
      Name: 'DIEGO',
      Surename: 'SALIBA DIAS',
      Increments: false,
      Amount: 687.95,
      ClientType: 'comercio',
      Percentage: 14
    }, //910.302.260-91
    {
      Id: 3,
      Name: 'FATIMA',
      Surename: 'APARECIDA FAGUN.',
      Increments: true,
      Amount: 2345.76,
      ClientType: 'servicio',
      Percentage: 13
    }, //469.574.560-72
    {
      Id: 4,
      Name: '',
      Surename: 'MAXIMA LOGISTICA E DIST.',
      Increments: true,
      Amount: 3695.74,
      ClientType: 'comercio',
      Percentage: 17
    }, //22829604000188
    {
      Id: 5,
      Name: 'ALEXANDRO',
      Surename: 'FLORES MACHADO',
      Increments: false,
      Amount: 920.20,
      ClientType: 'comercio',
      Percentage: 14
    }, //781.478.320-87
    {
      Id: 6,
      Name: 'PABLO',
      Surename: 'PAEZ RODRIGUEZ',
      Increments: true,
      Amount: 2353.14,
      ClientType: 'comercio',
      Percentage: 8
    }, //096.233.801-00
    {
      Id: 7,
      Name: 'MIRIAM CAMPOS',
      Surename: 'MARQUES WIERZBICKI',
      Increments: false,
      Amount: 938.9,
      ClientType: 'comercio',
      Percentage: 6
    }, //988.776.740-91
    {
      Id: 8,
      Name: 'RAMON',
      Surename: 'COSTA DE JESUS',
      Increments: false,
      Amount: 2200.54,
      ClientType: 'servicio',
      Percentage: 13
    }, //171.392.297-59
    {
      Id: 9,
      Name: 'EUCLEIA',
      Surename: 'FARIAS COELHO',
      Increments: true,
      Amount: 2298.84,
      ClientType: 'comercio',
      Percentage: 12
    }, //312.924.508-19
    {
      Id: 10,
      Name: 'DEBORAH',
      Surename: 'PEREZ CABRERA',
      Increments: true,
      Amount: 2301.42,
      ClientType: 'comercio',
      Percentage: 10
    } //096.212.221-17
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filteredTopTenClients = this.getClientsOctubreTopTenRet();
  }

  ionViewDidLoad() {
    this.getClientsOctubreTopTen();
  }

  getRandomPercentage(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  ionViewWillEnter() {
    var date = new Date();
    var monthIndex = date.getMonth();

    this.months = [];
    const meses = [
      'Janeiro',
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
    var actualMonth = meses[monthIndex]; //meses[monthIndex - 1]

    for (let p = 0; p < meses.length; p++) {
      this.months.push({
        month: meses[p],
        year: year,
        actMonth: actualMonth == meses[p]
      });
    }

    //console.log('ionViewDidLoad ClientsPage');

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

  viewClient(client) {
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

  getClientsOctubreTopTen() {

    var topTenClients = this.clientsOctubre.sort(function (a, b) {
      return a.Amount - b.Amount;
    }).reverse();

    this.clientsOctubreTopTen = topTenClients.slice(0, 10);
  }

  getClientsOctubreTopTenRet() {

    var topTenClients = this.clientsOctubre.sort(function (a, b) {
      return a.Amount - b.Amount;
    }).reverse();

    return topTenClients.slice(0, 10);
  }

  onSearch(event) {
    console.log("looking for.." + event.target.value);
  }

  filterClients() {
    this.filteredTopTenClients = this.clientsOctubreTopTen.filter((item) => {
      return item.Name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.Surename.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

}
