import {Injectable} from '@angular/core';
import {Client} from "../models/Client";
import {ExtratoTotal} from "../models/ExtratoTotal";
import {Meta} from "../models/Meta";

@Injectable()
export class Globals {
  loggedUser: string;
  loggedUserIndex: number;
  CURRENT_PAGE: number = 0;
  NUMBER_OF_COMPANIES: number = 9; //TODO: get length of total companies
  //extratos Wilson
  clients: any = [
    {
      //Wilson Riber Hamilton Danta
      "wilson.danta@wdanta.com": [

        //Ft2 Entretenimento E Servs Ltda
        [
          {
            MesAnoEmit: '08/17',
            QtdNFes: 3,
            TotalNFe: 264830.82,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '12/17',
            QtdNFes: 1,
            TotalNFe: 20000.00,
            TotalBCICMS: .00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }  //Ft2 Entretenimento E Servs Ltda
          , {
          MesAnoEmit: '08/18',
          QtdNFes: 2,
          TotalNFe: 96832.68,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/18',
          QtdNFes: 1,
          TotalNFe: 13020.00,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }
        ]

        //Hidroscience Consult E Restaur Ambiental Ltda
        , [{
          MesAnoEmit: '01/17',
          QtdNFes: 8,
          TotalNFe: 3293598.00,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        },
          {
            MesAnoEmit: '04/17',
            QtdNFes: 3,
            TotalNFe: 1134000.00,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '05/17',
            QtdNFes: 7,
            TotalNFe: 3661728.00,
            TotalBCICMS: 742728.00,
            TotalICMS: 29709.12,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '08/17',
            QtdNFes: 6,
            TotalNFe: 3181303.44,
            TotalBCICMS: 1114092.00,
            TotalICMS: 44563.68,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '09/17',
            QtdNFes: 3,
            TotalNFe: 1022221.20,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '10/17',
            QtdNFes: 6,
            TotalNFe: 2727900.00,
            TotalBCICMS: .00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '12/17',
            QtdNFes: 1,
            TotalNFe: 1329836.80,
            TotalBCICMS: 1333373.60,
            TotalICMS: 53334.94,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/18',
            QtdNFes: 5,
            TotalNFe: 96832.68,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '08/18',
            QtdNFes: 1,
            TotalNFe: 382338.05,
            TotalBCICMS: 382338.05,
            TotalICMS: 26763.66,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '10/18',
            QtdNFes: 5,
            TotalNFe: 2832808.02,
            TotalBCICMS: 818160.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '11/18',
            QtdNFes: 1,
            TotalNFe: 818160.00,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '08/18',
            QtdNFes: 1,
            TotalNFe: 1298002.44,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/19',
            QtdNFes: 4,
            TotalNFe: 1947003.66,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
        ]
        //Icafe Do Sul Com Varej De Vest E Bij Ltda
        , [{
          MesAnoEmit: '01/17',
          QtdNFes: 23,
          TotalNFe: 21048.32,
          TotalBCICMS: 20688.98,
          TotalICMS: 3690.75,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }
          , {
            MesAnoEmit: '02/17',
            QtdNFes: 23,
            TotalNFe: 14007.29,
            TotalBCICMS: 13264.38,
            TotalICMS: 1869.60,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '03/17',
            QtdNFes: 17,
            TotalNFe: 13346.52,
            TotalBCICMS: 12886.91,
            TotalICMS: 1869.60,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '04/17',
            QtdNFes: 5,
            TotalNFe: 12747.30,
            TotalBCICMS: 12747.30,
            TotalICMS: 2294.54,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '05/17',
            QtdNFes: 36,
            TotalNFe: 38646.25,
            TotalBCICMS: 37741.89,
            TotalICMS: 6793.41,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '06/17',
            QtdNFes: 36,
            TotalNFe: 65229.78,
            TotalBCICMS: 59369.54,
            TotalICMS: 10087.86,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '07/17',
            QtdNFes: 6,
            TotalNFe: 7739.20,
            TotalBCICMS: 7739.20,
            TotalICMS: 1293.12,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '08/17',
            QtdNFes: 5,
            TotalNFe: 3316.01,
            TotalBCICMS: 3316.01,
            TotalICMS: 596.89,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '09/17',
            QtdNFes: 5,
            TotalNFe: 1619.90,
            TotalBCICMS: 1619.90,
            TotalICMS: 291.59,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '10/17',
            QtdNFes: 9,
            TotalNFe: 2502.86,
            TotalBCICMS: 2502.86,
            TotalICMS: 401.71,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '11/17',
            QtdNFes: 13,
            TotalNFe: 117039.27,
            TotalBCICMS: 117039.27,
            TotalICMS: 21066.99,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '12/17',
            QtdNFes: 13,
            TotalNFe: 15962.90,
            TotalBCICMS: 117039.27,
            TotalICMS: 2801.02,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/18',
            QtdNFes: 1,
            TotalNFe: 6280.88,
            TotalBCICMS: 4927.72,
            TotalICMS: 887.06,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '02/18',
            QtdNFes: 1,
            TotalNFe: 4810.84,
            TotalBCICMS: 4810.84,
            TotalICMS: 865.94,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '03/18',
            QtdNFes: 1,
            TotalNFe: 14400.48,
            TotalBCICMS: 14289.36,
            TotalICMS: 2575.03,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '04/18',
            QtdNFes: 1,
            TotalNFe: 23150.97,
            TotalBCICMS: 21500.62,
            TotalICMS: 3774.48,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '05/18',
            QtdNFes: 1,
            TotalNFe: 13231.59,
            TotalBCICMS: 11659.70,
            TotalICMS: 1923.55,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '06/18',
            QtdNFes: 1,
            TotalNFe: 18136.46,
            TotalBCICMS: 17070.98,
            TotalICMS: 3045.03,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '07/18',
            QtdNFes: 1,
            TotalNFe: 8696.17,
            TotalBCICMS: 8443.73,
            TotalICMS: 1488.45,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '08/18',
            QtdNFes: 1,
            TotalNFe: 73799.48,
            TotalBCICMS: 73679.10,
            TotalICMS: 13262.23,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '09/18',
            QtdNFes: 1,
            TotalNFe: 26823.05,
            TotalBCICMS: 24703.11,
            TotalICMS: 4407.21,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '10/18',
            QtdNFes: 1,
            TotalNFe: 36564.60,
            TotalBCICMS: 30871.99,
            TotalICMS: 5323.09,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '11/18',
            QtdNFes: 1,
            TotalNFe: 14626.34,
            TotalBCICMS: 11642.84,
            TotalICMS: 1970.51,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '12/18',
            QtdNFes: 1,
            TotalNFe: 46191.40,
            TotalBCICMS: 39878.20,
            TotalICMS: 7178.07,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/19',
            QtdNFes: 5,
            TotalNFe: 1059.00,
            TotalBCICMS: 1059.00,
            TotalICMS: 190.62,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }]

        //Infrati Informatica Ltda
        , [{
          MesAnoEmit: '01/17',
          QtdNFes: 8,
          TotalNFe: 24499.69,
          TotalBCICMS: 5294.86,
          TotalICMS: 211.79,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/17',
          QtdNFes: 6,
          TotalNFe: 27891.84,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/17',
          QtdNFes: 3,
          TotalNFe: 14275.75,
          TotalBCICMS: 6084.05,
          TotalICMS: 243.36,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }
          , {
            MesAnoEmit: '04/17',
            QtdNFes: 11,
            TotalNFe: 2286961.11,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '05/17',
            QtdNFes: 18,
            TotalNFe: 1530913.34,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '06/17',
            QtdNFes: 6,
            TotalNFe: 26709.01,
            TotalBCICMS: 856.93,
            TotalICMS: 34.28,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '07/17',
            QtdNFes: 2,
            TotalNFe: 4931.24,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '08/17',
            QtdNFes: 3,
            TotalNFe: 141859.74,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '09/17',
            QtdNFes: 1,
            TotalNFe: 420.83,
            TotalBCICMS: 420.83,
            TotalICMS: 16.83,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '10/17',
            QtdNFes: 4,
            TotalNFe: 18445.92,
            TotalBCICMS: 6939.62,
            TotalICMS: 277.58,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '11/17',
            QtdNFes: 4,
            TotalNFe: 35163.39,
            TotalBCICMS: 8669.18,
            TotalICMS: 346.77,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '12/17',
            QtdNFes: 8,
            TotalNFe: 78390.70,
            TotalBCICMS: 1043.83,
            TotalICMS: 41.75,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/18',
            QtdNFes: 0,
            TotalNFe: 37672.30,
            TotalBCICMS: 1037.69,
            TotalICMS: 41.51,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '02/18',
            QtdNFes: 0,
            TotalNFe: 82926.52,
            TotalBCICMS: 56779.29,
            TotalICMS: 6813.52,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '03/18',
            QtdNFes: 0,
            TotalNFe: 87475.33,
            TotalBCICMS: 7017.67,
            TotalICMS: 305.71,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '04/18',
            QtdNFes: 0,
            TotalNFe: 242538.77,
            TotalBCICMS: 3593.27,
            TotalICMS: 393.01,
            TotalBCICMSST: 243.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '05/18',
            QtdNFes: 2,
            TotalNFe: 491921.77,
            TotalBCICMS: 93638.87,
            TotalICMS: 12866.43,
            TotalBCICMSST: 22158.65,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '06/18',
            QtdNFes: 2,
            TotalNFe: 597983.10,
            TotalBCICMS: 4316.41,
            TotalICMS: 172.66,
            TotalBCICMSST: 4316.41,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '07/18',
            QtdNFes: 2,
            TotalNFe: 767045.20,
            TotalBCICMS: 20896.06,
            TotalICMS: 3761.28,
            TotalBCICMSST: 89826.43,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '08/18',
            QtdNFes: 32,
            TotalNFe: 89826.43,
            TotalBCICMS: 22158.65,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 22158.65,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '09/18',
            QtdNFes: 23,
            TotalNFe: 67132.05,
            TotalBCICMS: 25917.89,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '10/18',
            QtdNFes: 23,
            TotalNFe: 19416.80,
            TotalBCICMS: 5619.36,
            TotalICMS: 224.78,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '11/18',
            QtdNFes: 23,
            TotalNFe: 173145.29,
            TotalBCICMS: 11642.54,
            TotalICMS: 2095.66,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '12/18',
            QtdNFes: 23,
            TotalNFe: 1450722.49,
            TotalBCICMS: 423171.02,
            TotalICMS: 76170.79,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/19',
            QtdNFes: 2,
            TotalNFe: 59797.98,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }]

        //L A Lopes Com De Cosmeticos Ltda Epp (0963655825)
        , [{
          MesAnoEmit: '01/17',
          QtdNFes: 9,
          TotalNFe: 4440.50,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/17',
          QtdNFes: 7,
          TotalNFe: 7883.20,
          TotalBCICMS: 48.50,
          TotalICMS: 8.73,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/17',
          QtdNFes: 1533,
          TotalNFe: 447218.65,
          TotalBCICMS: 18254.50,
          TotalICMS: 3285.81,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/17',
          QtdNFes: 4926,
          TotalNFe: 1627491.75,
          TotalBCICMS: 91288.50,
          TotalICMS: 16431.93,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/17',
          QtdNFes: 4926,
          TotalNFe: 1627491.75,
          TotalBCICMS: 91288.50,
          TotalICMS: 16431.93,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/17',
          QtdNFes: 5406,
          TotalNFe: 1589075.50,
          TotalBCICMS: 93744.50,
          TotalICMS: 16874.01,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/17',
          QtdNFes: 4893,
          TotalNFe: 1618932.95,
          TotalBCICMS: 131641.00,
          TotalICMS: 23695.38,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/17',
          QtdNFes: 3600,
          TotalNFe: 1156374.65,
          TotalBCICMS: 106584.00,
          TotalICMS: 19185.12,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/17',
          QtdNFes: 3787,
          TotalNFe: 1250434.60,
          TotalBCICMS: 130000.00,
          TotalICMS: 23400.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/17',
          QtdNFes: 3740,
          TotalNFe: 1101795.58,
          TotalBCICMS: 99873.76,
          TotalICMS: 17966.76,
          TotalBCICMSST: 298.71,
          TotalICMSST: 47.95,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/17',
          QtdNFes: 4446,
          TotalNFe: 1229158.74,
          TotalBCICMS: 104850.68,
          TotalICMS: 18754.05,
          TotalBCICMSST: 1261.86,
          TotalICMSST: 211.33,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/18',
          QtdNFes: 1,
          TotalNFe: 832291.15,
          TotalBCICMS: 90087.37,
          TotalICMS: 16043.77,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/18',
          QtdNFes: 1,
          TotalNFe: 856246.71,
          TotalBCICMS: 123742.47,
          TotalICMS: 20693.05,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/18',
          QtdNFes: 1,
          TotalNFe: 792493.48,
          TotalBCICMS: 67115.83,
          TotalICMS: 11661.46,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/18',
          QtdNFes: 1,
          TotalNFe: 895005.54,
          TotalBCICMS: 104131.86,
          TotalICMS: 18081.53,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/18',
          QtdNFes: 1,
          TotalNFe: 914352.61,
          TotalBCICMS: 84758.46,
          TotalICMS: 15140.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/18',
          QtdNFes: 1,
          TotalNFe: 637008.75,
          TotalBCICMS: 65401.03,
          TotalICMS: 11450.67,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/18',
          QtdNFes: 1,
          TotalNFe: 37024.03,
          TotalBCICMS: 25571.71,
          TotalICMS: 3093.95,
          TotalBCICMSST: 13044.22,
          TotalICMSST: 2573.96,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/18',
          QtdNFes: 1,
          TotalNFe: 16808.42,
          TotalBCICMS: 12069.00,
          TotalICMS: 1824.01,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/18',
          QtdNFes: 1,
          TotalNFe: 22415.50,
          TotalBCICMS: 12560.69,
          TotalICMS: 2223.81,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/18',
          QtdNFes: 1,
          TotalNFe: 60086.59,
          TotalBCICMS: 13737.85,
          TotalICMS: 2185.59,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/18',
          QtdNFes: 1,
          TotalNFe: 85403.91,
          TotalBCICMS: 25910.08,
          TotalICMS: 3915.90,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/18',
          QtdNFes: 1,
          TotalNFe: 61624.29,
          TotalBCICMS: 8589.81,
          TotalICMS: 1377.75,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/19',
          QtdNFes: 43,
          TotalNFe: 12802.99,
          TotalBCICMS: 787.37,
          TotalICMS: 141.29,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }]

        //Luciano Santos Espindola Eireli
        , [{
          MesAnoEmit: '01/17',
          QtdNFes: 8,
          TotalNFe: 35616.10,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/17',
          QtdNFes: 13,
          TotalNFe: 37450.63,
          TotalBCICMS: 615.00,
          TotalICMS: 110.70,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/17',
          QtdNFes: 24,
          TotalNFe: 59640.97,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/17',
          QtdNFes: 26,
          TotalNFe: 89291.79,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/17',
          QtdNFes: 32,
          TotalNFe: 115423.42,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/17',
          QtdNFes: 27,
          TotalNFe: 124306.54,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/17',
          QtdNFes: 29,
          TotalNFe: 74251.34,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/17',
          QtdNFes: 28,
          TotalNFe: 178704.42,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/17',
          QtdNFes: 23,
          TotalNFe: 140452.61,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 31.41,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/17',
          QtdNFes: 40,
          TotalNFe: 95380.56,
          TotalBCICMS: 296.16,
          TotalICMS: 53.31,
          TotalBCICMSST: 423.60,
          TotalICMSST: 31.41,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/17',
          QtdNFes: 39,
          TotalNFe: 134045.60,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/17',
          QtdNFes: 26,
          TotalNFe: 106625.72,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/18',
          QtdNFes: 1,
          TotalNFe: 32425.22,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/18',
          QtdNFes: 1,
          TotalNFe: 80903.52,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/18',
          QtdNFes: 1,
          TotalNFe: 108388.32,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/18',
          QtdNFes: 1,
          TotalNFe: 100012.15,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/18',
          QtdNFes: 1,
          TotalNFe: 101066.53,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/18',
          QtdNFes: 1,
          TotalNFe: 88389.59,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/18',
          QtdNFes: 1,
          TotalNFe: 81917.64,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/18',
          QtdNFes: 1,
          TotalNFe: 120558.47,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/18',
          QtdNFes: 1,
          TotalNFe: 99283.33,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/18',
          QtdNFes: 1,
          TotalNFe: 78433.96,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/18',
          QtdNFes: 1,
          TotalNFe: 98757.93,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/18',
          QtdNFes: 1,
          TotalNFe: 127804.74,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/19',
          QtdNFes: 4,
          TotalNFe: 2904.10,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }]

        //M2t Gastronomia E Servs Ltda // no hay enero
        , [{
          MesAnoEmit: '04/17',
          QtdNFes: 2,
          TotalNFe: 1155.00,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/17',
          QtdNFes: 2,
          TotalNFe: 382.81,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/17',
          QtdNFes: 2,
          TotalNFe: 984.74,
          TotalBCICMS: 748.80,
          TotalICMS: 134.78,
          TotalBCICMSST: 1479.16,
          TotalICMSST: 161.06,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/17',
          QtdNFes: 1,
          TotalNFe: 121.86,
          TotalBCICMS: 121.86,
          TotalICMS: 21.93,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/18',
          QtdNFes: 1,
          TotalNFe: 9990.20,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/18',
          QtdNFes: 1,
          TotalNFe: 3130.00,
          TotalBCICMS: 1825.77,
          TotalICMS: 219.09,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }]
        //Mkt Lopes Com De Cosmeticos Ltda
        , [{
          MesAnoEmit: '06/17',
          QtdNFes: 3134,
          TotalNFe: 1109018.85,
          TotalBCICMS: 64186.00,
          TotalICMS: 11553.48,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/17',
          QtdNFes: 4321,
          TotalNFe: 1331400.60,
          TotalBCICMS: 105239.00,
          TotalICMS: 18943.02,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }
          , {
            MesAnoEmit: '08/17',
            QtdNFes: 4310,
            TotalNFe: 1419958.95,
            TotalBCICMS: 111168.50,
            TotalICMS: 20010.33,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '09/17',
            QtdNFes: 3896,
            TotalNFe: 1363672.85,
            TotalBCICMS: 111113.00,
            TotalICMS: 20000.34,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '10/17',
            QtdNFes: 3457,
            TotalNFe: 1135714.75,
            TotalBCICMS: 128423.50,
            TotalICMS: 23116.23,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '11/17',
            QtdNFes: 3476,
            TotalNFe: 1088663.58,
            TotalBCICMS: 120776.76,
            TotalICMS: 21652.83,
            TotalBCICMSST: 455.77,
            TotalICMSST: 101.95,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }
          , {
            MesAnoEmit: '12/17',
            QtdNFes: 4215,
            TotalNFe: 1129997.23,
            TotalBCICMS: 101643.16,
            TotalICMS: 17702.08,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/18',
            QtdNFes: 1,
            TotalNFe: 911203.35,
            TotalBCICMS: 141370.14,
            TotalICMS: 25220.98,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '02/18',
            QtdNFes: 1,
            TotalNFe: 849507.51,
            TotalBCICMS: 83120.19,
            TotalICMS: 14682.65,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '03/18',
            QtdNFes: 1,
            TotalNFe: 789870.62,
            TotalBCICMS: 76285.38,
            TotalICMS: 13451.61,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '04/18',
            QtdNFes: 1,
            TotalNFe: 765858.34,
            TotalBCICMS: 101568.25,
            TotalICMS: 17458.65,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '05/18',
            QtdNFes: 1,
            TotalNFe: 890114.67,
            TotalBCICMS: 103041.36,
            TotalICMS: 17811.80,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '06/18',
            QtdNFes: 1,
            TotalNFe: 902163.32,
            TotalBCICMS: 93606.89,
            TotalICMS: 16514.94,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '07/18',
            QtdNFes: 1,
            TotalNFe: 60165.82,
            TotalBCICMS: 30552.62,
            TotalICMS: 4061.55,
            TotalBCICMSST: 13044.22,
            TotalICMSST: 2573.96,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '08/18',
            QtdNFes: 1,
            TotalNFe: 61813.53,
            TotalBCICMS: 15852.73,
            TotalICMS: 2477.23,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '09/18',
            QtdNFes: 1,
            TotalNFe: 80551.62,
            TotalBCICMS: 22727.40,
            TotalICMS: 3789.26,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '10/18',
            QtdNFes: 1,
            TotalNFe: 77914.17,
            TotalBCICMS: 20102.75,
            TotalICMS: 333.68,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '11/18',
            QtdNFes: 1,
            TotalNFe: 245383.83,
            TotalBCICMS: 40123.87,
            TotalICMS: 6811.76,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '12/18',
            QtdNFes: 1,
            TotalNFe: 178543.41,
            TotalBCICMS: 13980.50,
            TotalICMS: 2351.57,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '01/19',
            QtdNFes: 81,
            TotalNFe: 35689.22,
            TotalBCICMS: 5682.90,
            TotalICMS: 1021.74,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }]

        //Sidicom Sist Informacoes Por Computacao Ltda // no hay 2019
        , [{
          MesAnoEmit: '01/17',
          QtdNFes: 3,
          TotalNFe: 1113.00,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/17',
          QtdNFes: 58,
          TotalNFe: 53665.20,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/17',
          QtdNFes: 56,
          TotalNFe: 46002.40,
          TotalBCICMS: 1000.00,
          TotalICMS: 120.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/17',
          QtdNFes: 60,
          TotalNFe: 55590.00,
          TotalBCICMS: 1545.00,
          TotalICMS: 188.10,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/17',
          QtdNFes: 55,
          TotalNFe: 58656.60,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/17',
          QtdNFes: 63,
          TotalNFe: 48584.40,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/17',
          QtdNFes: 54,
          TotalNFe: 39705.82,
          TotalBCICMS: 300.00,
          TotalICMS: 54.00,
          TotalBCICMSST: 441.00,
          TotalICMSST: 22.32,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/17',
          QtdNFes: 63,
          TotalNFe: 58607.90,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/17',
          QtdNFes: 55,
          TotalNFe: 40997.00,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/17',
          QtdNFes: 61,
          TotalNFe: 66581.40,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/17',
          QtdNFes: 65,
          TotalNFe: 49741.20,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/17',
          QtdNFes: 78,
          TotalNFe: 67555.51,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/18',
          QtdNFes: 0,
          TotalNFe: 43753.60,
          TotalBCICMS: 500.00,
          TotalICMS: 60.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/18',
          QtdNFes: 0,
          TotalNFe: 56613.50,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/18',
          QtdNFes: 0,
          TotalNFe: 42879.39,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 225.00,
          TotalICMSST: 51.08,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/18',
          QtdNFes: 0,
          TotalNFe: 51602.00,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/18',
          QtdNFes: 0,
          TotalNFe: 54467.10,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/18',
          QtdNFes: 0,
          TotalNFe: 54467.10,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/18',
          QtdNFes: 0,
          TotalNFe: 39509.60,
          TotalBCICMS: 100.00,
          TotalICMS: 18.00,
          TotalBCICMSST: 133.00,
          TotalICMSST: 5.94,
          Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }
          , {
            MesAnoEmit: '08/18',
            QtdNFes: 0,
            TotalNFe: 45450.10,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '09/18',
            QtdNFes: 0,
            TotalNFe: 62793.25,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '10/18',
            QtdNFes: 0,
            TotalNFe: 64411.50,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '11/18',
            QtdNFes: 0,
            TotalNFe: 40217.50,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
            MesAnoEmit: '12/18',
            QtdNFes: 0,
            TotalNFe: 52495.00,
            TotalBCICMS: 0.00,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }]

        //Surgeon Com De Mat Cirurgico Hospl Ltda
        , [{
          MesAnoEmit: '01/17',
          QtdNFes: 132,
          TotalNFe: 268219.24,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/17',
          QtdNFes: 107,
          TotalNFe: 211619.11,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/17',
          QtdNFes: 128,
          TotalNFe: 250220.35,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/17',
          QtdNFes: 142,
          TotalNFe: 240011.00,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/17',
          QtdNFes: 156,
          TotalNFe: 263639.70,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/17',
          QtdNFes: 142,
          TotalNFe: 291550.82,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/17',
          QtdNFes: 136,
          TotalNFe: 242454.68,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/17',
          QtdNFes: 144,
          TotalNFe: 264376.46,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/17',
          QtdNFes: 136,
          TotalNFe: 235177.81,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/17',
          QtdNFes: 115,
          TotalNFe: 316554.94,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/17',
          QtdNFes: 133,
          TotalNFe: 303877.01,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/17',
          QtdNFes: 133,
          TotalNFe: 262961.84,
          TotalBCICMS: 11820.00,
          TotalICMS: 472.80,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/18',
          QtdNFes: 0,
          TotalNFe: 206869.38,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/18',
          QtdNFes: 0,
          TotalNFe: 200163.41,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/18',
          QtdNFes: 0,
          TotalNFe: 214146.30,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/18',
          QtdNFes: 0,
          TotalNFe: 232425.73,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/18',
          QtdNFes: 0,
          TotalNFe: 279735.93,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/18',
          QtdNFes: 0,
          TotalNFe: 225049.98,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/18',
          QtdNFes: 0,
          TotalNFe: 236486.87,
          TotalBCICMS: 490.35,
          TotalICMS: 19.61,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/18',
          QtdNFes: 0,
          TotalNFe: 245008.94,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/18',
          QtdNFes: 0,
          TotalNFe: 244281.51,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/18',
          QtdNFes: 0,
          TotalNFe: 299086.54,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/18',
          QtdNFes: 0,
          TotalNFe: 212099.80,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/18',
          QtdNFes: 0,
          TotalNFe: 214439.23,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/19',
          QtdNFes: 22,
          TotalNFe: 30122.21,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }
        ]]
    }, {
      //user: Andrea De Albuquerque Lopes  && Ligia De Albuquerque Lopes -> alopes@ankor.com && llopes@ankor.com
      "alopes@ankor.com": [
// L A Lopes Cosmeticos
        [{
          MesAnoEmit: '01/17',
          QtdNFes: 0,
          TotalNFe: 4440.5,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        },
          {
            MesAnoEmit: '03/17',
            QtdNFes: 0,
            TotalNFe: 7883.2,
            TotalBCICMS: 48.5,
            TotalICMS: 8.73,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '04/17',
            QtdNFes: 0,
            TotalNFe: 447218.65,
            TotalBCICMS: 18254.5,
            TotalICMS: 3285.81,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '05/17',
            QtdNFes: 0,
            TotalNFe: 2102023.4,
            TotalBCICMS: 96317,
            TotalICMS: 17337.06,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '06/17',
            QtdNFes: 0,
            TotalNFe: 1627491.75,
            TotalBCICMS: 91288.5,
            TotalICMS: 16431.93,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
          MesAnoEmit: '07/17',
          QtdNFes: 0,
          TotalNFe: 1589075.5,
          TotalBCICMS: 93744.5,
          TotalICMS: 16874.01,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/17',
          QtdNFes: 0,
          TotalNFe: 1618932.95,
          TotalBCICMS: 131641,
          TotalICMS: 23695.38,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/17',
          QtdNFes: 0,
          TotalNFe: 1156374.65,
          TotalBCICMS: 106584,
          TotalICMS: 19185.12,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/17',
          QtdNFes: 0,
          TotalNFe: 1250434.6,
          TotalBCICMS: 130000,
          TotalICMS: 23400,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/17',
          QtdNFes: 0,
          TotalNFe: 1101795.58,
          TotalBCICMS: 99873.76,
          TotalICMS: 17966.76,
          TotalBCICMSST: 298.71,
          TotalICMSST: 47.95,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/17',
          QtdNFes: 0,
          TotalNFe: 1229158.74,
          TotalBCICMS: 104850.68,
          TotalICMS: 18754.05,
          TotalBCICMSST: 1261.86,
          TotalICMSST: 211.33,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        },
          //2018
          {
            MesAnoEmit: '01/18',
            QtdNFes: 0,
            TotalNFe: 832291.15,
            TotalBCICMS: 987.37,
            TotalICMS: 16043.67,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '02/18',
            QtdNFes: 0,
            TotalNFe: 856246.71,
            TotalBCICMS: 123742.47,
            TotalICMS: 20693.05,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
          MesAnoEmit: '03/18',
          QtdNFes: 0,
          TotalNFe: 792493.48,
          TotalBCICMS: 67115.83,
          TotalICMS: 11661.46,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/18',
          QtdNFes: 0,
          TotalNFe: 89525.54,
          TotalBCICMS: 104131.86,
          TotalICMS: 18081.53,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/18',
          QtdNFes: 0,
          TotalNFe: 914352.61,
          TotalBCICMS: 84758.46,
          TotalICMS: 15140,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/18',
          QtdNFes: 0,
          TotalNFe: 637008.75,
          TotalBCICMS: 65401.03,
          TotalICMS: 11450.67,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/18',
          QtdNFes: 0,
          TotalNFe: 37027.03,
          TotalBCICMS: 25571.71,
          TotalICMS: 3093.95,
          TotalBCICMSST: 13044.22,
          TotalICMSST: 2573.93,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/18',
          QtdNFes: 0,
          TotalNFe: 16808.42,
          TotalBCICMS: 12069,
          TotalICMS: 1824.01,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/18',
          QtdNFes: 0,
          TotalNFe: 22415.5,
          TotalBCICMS: 12560.69,
          TotalICMS: 2223.81,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/18',
          QtdNFes: 0,
          TotalNFe: 60086.59,
          TotalBCICMS: 13737.85,
          TotalICMS: 2158.59,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/18',
          QtdNFes: 0,
          TotalNFe: 85403.91,
          TotalBCICMS: 25910.08,
          TotalICMS: 3915.9,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/18',
          QtdNFes: 0,
          TotalNFe: 10503952,
          TotalBCICMS: 61766.19,
          TotalICMS: 8688.21,
          TotalBCICMSST: 1395.47,
          TotalICMSST: 0.00,
          Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }],

        //Mkt Lopes Com De Cosmeticos Ltda
        [{
          MesAnoEmit: '06/17',
          QtdNFes: 0,
          TotalNFe: 1109018.85,
          TotalBCICMS: 64186,
          TotalICMS: 11553.48,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        },
          {
            MesAnoEmit: '07/17',
            QtdNFes: 0,
            TotalNFe: 1331400.6,
            TotalBCICMS: 105239,
            TotalICMS: 18943.02,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '08/17',
            QtdNFes: 0,
            TotalNFe: 1363672.85,
            TotalBCICMS: 111113,
            TotalICMS: 20000.34,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '09/17',
            QtdNFes: 0,
            TotalNFe: 1135714.75,
            TotalBCICMS: 128423.5,
            TotalICMS: 23116.23,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '10/17',
            QtdNFes: 0,
            TotalNFe: 1135714.75,
            TotalBCICMS: 128423.5,
            TotalICMS: 23116.23,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '11/17',
            QtdNFes: 0,
            TotalNFe: 1088663.58,
            TotalBCICMS: 1200776.76,
            TotalICMS: 455.77,
            TotalBCICMSST: 101.95,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '12/17',
            QtdNFes: 0,
            TotalNFe: 1129997.23,
            TotalBCICMS: 101643.16,
            TotalICMS: 17702.08,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '01/18',
            QtdNFes: 0,
            TotalNFe: 911203.35,
            TotalBCICMS: 141370.14,
            TotalICMS: 25220.98,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '02/18',
            QtdNFes: 0,
            TotalNFe: 849507.51,
            TotalBCICMS: 83120.19,
            TotalICMS: 14682.65,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '03/18',
            QtdNFes: 0,
            TotalNFe: 789870.62,
            TotalBCICMS: 76285.35,
            TotalICMS: 13451.61,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '04/18',
            QtdNFes: 0,
            TotalNFe: 765858.34,
            TotalBCICMS: 101568.25,
            TotalICMS: 17458.65,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '05/18',
            QtdNFes: 0,
            TotalNFe: 590114.67,
            TotalBCICMS: 103041.36,
            TotalICMS: 17877.8,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '06/18',
            QtdNFes: 0,
            TotalNFe: 902163.32,
            TotalBCICMS: 93606.89,
            TotalICMS: 16514.94,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '07/18',
            QtdNFes: 0,
            TotalNFe: 60165.80,
            TotalBCICMS: 30552.62,
            TotalICMS: 4061.55,
            TotalBCICMSST: 13044.22,
            TotalICMSST: 2573.96,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '08/18',
            QtdNFes: 0,
            TotalNFe: 61813.53,
            TotalBCICMS: 158852.73,
            TotalICMS: 2477.23,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '09/18',
            QtdNFes: 0,
            TotalNFe: 80551.62,
            TotalBCICMS: 22727.4,
            TotalICMS: 3789.26,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '10/18',
            QtdNFes: 0,
            TotalNFe: 77914.17,
            TotalBCICMS: 20102.75,
            TotalICMS: 3333.68,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '11/18',
            QtdNFes: 0,
            TotalNFe: 245383.83,
            TotalBCICMS: 40123.87,
            TotalICMS: 6811.76,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '12/18',
            QtdNFes: 0,
            TotalNFe: 178541.51,
            TotalBCICMS: 14166.62,
            TotalICMS: 2385.07,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }]
      ]
    },
    {
      //user: Alexandre Lopes Fraga -> Surgeon Com De Mat Cirurgico Hospl Ltda
      "afraga@ankor.com": [
        [
          {
            MesAnoEmit: '01/17',
            QtdNFes: 0,
            TotalNFe: 268219.24,
            TotalBCICMS: 0,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
          MesAnoEmit: '02/17',
          QtdNFes: 0,
          TotalNFe: 211619.11,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/17',
          QtdNFes: 0,
          TotalNFe: 250220.35,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/17',
          QtdNFes: 0,
          TotalNFe: 240011,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/17',
          QtdNFes: 0,
          TotalNFe: 263639.7,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/17',
          QtdNFes: 0,
          TotalNFe: 291550.82,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/17',
          QtdNFes: 0,
          TotalNFe: 242454.68,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/17',
          QtdNFes: 0,
          TotalNFe: 264376.46,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/17',
          QtdNFes: 0,
          TotalNFe: 235177.81,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/17',
          QtdNFes: 0,
          TotalNFe: 316554.94,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/17',
          QtdNFes: 0,
          TotalNFe: 303877.01,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/17',
          QtdNFes: 0,
          TotalNFe: 262961.84,
          TotalBCICMS: 11820,
          TotalICMS: 472.8,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '01/18',
          QtdNFes: 0,
          TotalNFe: 206869.38,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '02/18',
          QtdNFes: 0,
          TotalNFe: 20063.41,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '03/18',
          QtdNFes: 0,
          TotalNFe: 214146.3,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '04/18',
          QtdNFes: 0,
          TotalNFe: 232425.73,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/18',
          QtdNFes: 0,
          TotalNFe: 279735.93,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '06/18',
          QtdNFes: 0,
          TotalNFe: 225049.98,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '07/18',
          QtdNFes: 0,
          TotalNFe: 236486.87,
          TotalBCICMS: 490.35,
          TotalICMS: 19.61,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '08/18',
          QtdNFes: 0,
          TotalNFe: 245008.94,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '09/18',
          QtdNFes: 0,
          TotalNFe: 244281.5,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '10/18',
          QtdNFes: 0,
          TotalNFe: 299086.54,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '11/18',
          QtdNFes: 0,
          TotalNFe: 212099.8,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/18',
          QtdNFes: 0,
          TotalNFe: 214439.23,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }
        ]
      ]
    },
    {
      //Dalvo Jose De Borba -> M2t Gastronomia E Servs Ltda
      "dborba@ankor.com": [
        [{
          MesAnoEmit: '08/17',
          QtdNFes: 0,
          TotalNFe: 264830.82,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        },
          {
            MesAnoEmit: '12/17',
            QtdNFes: 0,
            TotalNFe: 20000,
            TotalBCICMS: 0,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }, {
          MesAnoEmit: '08/18',
          QtdNFes: 0,
          TotalNFe: 96832.68,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        },
          {
            MesAnoEmit: '12/18',
            QtdNFes: 0,
            TotalNFe: 13020,
            TotalBCICMS: 0,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }]
        //M2t Gastronomia E Servs Ltda
        , [{
          MesAnoEmit: '04/17',
          QtdNFes: 0,
          TotalNFe: 1155,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '05/17',
          QtdNFes: 0,
          TotalNFe: 382.81,
          TotalBCICMS: 0,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        },
          {
            MesAnoEmit: '08/17',
            QtdNFes: 0,
            TotalNFe: 984.74,
            TotalBCICMS: 748.8,
            TotalICMS: 134.78,
            TotalBCICMSST: 1479.16,
            TotalICMSST: 161.06,
            Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '12/17',
            QtdNFes: 0,
            TotalNFe: 121.86,
            TotalBCICMS: 121.86,
            TotalICMS: 21.93,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '06/18',
            QtdNFes: 0,
            TotalNFe: 990.2,
            TotalBCICMS: 0,
            TotalICMS: 0.00,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          },
          {
            MesAnoEmit: '09/18',
            QtdNFes: 0,
            TotalNFe: 3130,
            TotalBCICMS: 1825.77,
            TotalICMS: 219.09,
            TotalBCICMSST: 0.00,
            TotalICMSST: 0.00,
            Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
            Clients: new Array<Client>()
          }],
        [{
          MesAnoEmit: '03/18',
          QtdNFes: 0,
          TotalNFe: 49596.79,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Oito Atlantida Casa De Festas E Eventos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }, {
          MesAnoEmit: '12/18',
          QtdNFes: 0,
          TotalNFe: 14900,
          TotalBCICMS: 0.00,
          TotalICMS: 0.00,
          TotalBCICMSST: 0.00,
          TotalICMSST: 0.00,
          Client: new Client(1, 'Oito Atlantida Casa De Festas E Eventos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
          Clients: new Array<Client>()
        }]
      ]
    }

  ];


  //TODO: buscar en array de clients (Globals) por mes filtrado y por cliente el top 10 del usuario logueado
  top10ClientesSumaPorMes: any = [
    //
    {
      MesAnoEmit: '08/18',
      QtdNFes: 3,
      TotalNFe: 96832.68,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 3,
      TotalNFe: 13020.00,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Ft2 Entretenimento E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 3,
      TotalNFe: 382338.05,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 3,
      TotalNFe: 1298002.44,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 3,
      TotalNFe: 2066400,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 3,
      TotalNFe: 818160,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 3,
      TotalNFe: 2832808.02,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Hidroscience Consult E Restaur Ambiental Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 3,
      TotalNFe: 23150.97,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 3,
      TotalNFe: 73799.48,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 3,
      TotalNFe: 46191.4,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 3,
      TotalNFe: 6280.88,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 3,
      TotalNFe: 4810.84,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 3,
      TotalNFe: 8696.17,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 3,
      TotalNFe: 18136.46,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 3,
      TotalNFe: 14400.48,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 3,
      TotalNFe: 13231.59,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 3,
      TotalNFe: 14626.34,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 3,
      TotalNFe: 36564.6,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 3,
      TotalNFe: 26823.05,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Icafe Do Sul Com Varej De Vest E Bij Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 3,
      TotalNFe: 242538.77,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 3,
      TotalNFe: 89826.43,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 3,
      TotalNFe: 89826.43,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 3,
      TotalNFe: 1450722.49,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 3,
      TotalNFe: 3767203,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 3,
      TotalNFe: 82926.52,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 3,
      TotalNFe: 767045.2,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 3,
      TotalNFe: 597983.1,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 3,
      TotalNFe: 87475.33,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 3,
      TotalNFe: 491921.77,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 3,
      TotalNFe: 173145.29,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 3,
      TotalNFe: 19416.8,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 3,
      TotalNFe: 67132.05,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Infrati Informatica Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 3,
      TotalNFe: 895225.54,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 3,
      TotalNFe: 16808.42,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 3,
      TotalNFe: 61624.29,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 3,
      TotalNFe: 832291.15,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 3,
      TotalNFe: 856246.71,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 3,
      TotalNFe: 37027.03,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 3,
      TotalNFe: 637008.75,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 3,
      TotalNFe: 792493.48,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 3,
      TotalNFe: 914352.61,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 3,
      TotalNFe: 85403.91,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 3,
      TotalNFe: 60086.59,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 3,
      TotalNFe: 22415.5,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'L A Lopes Com De Cosmeticos Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 1,
      TotalNFe: 100012.15,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 1,
      TotalNFe: 120558.47,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 1,
      TotalNFe: 127804.74,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 1,
      TotalNFe: 32425.22,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 1,
      TotalNFe: 80903.52,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 1,
      TotalNFe: 81917.64,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 1,
      TotalNFe: 88389.59,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 1,
      TotalNFe: 108388.32,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 1,
      TotalNFe: 101066.53,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 1,
      TotalNFe: 98757.93,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 1,
      TotalNFe: 78433.96,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 1,
      TotalNFe: 99283.33,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Luciano Santos Espindola Eireli', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 1,
      TotalNFe: 9990.2,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 1,
      TotalNFe: 3130,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'M2t Gastronomia E Servs Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 1,
      TotalNFe: 765858.34,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 1,
      TotalNFe: 61813.53,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 1,
      TotalNFe: 178543.41,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 1,
      TotalNFe: 911203.35,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 1,
      TotalNFe: 849507.51,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 1,
      TotalNFe: 60165.82,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 1,
      TotalNFe: 60165.82,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 1,
      TotalNFe: 902163.32,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 1,
      TotalNFe: 789870.62,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 1,
      TotalNFe: 890114.67,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 1,
      TotalNFe: 245383.83,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 1,
      TotalNFe: 77914.17,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 1,
      TotalNFe: 80551.62,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Mkt Lopes Com De Cosmeticos Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 1,
      TotalNFe: 386,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Porto Vital Com De Prod Para A Saude Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 1,
      TotalNFe: 51602,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 1,
      TotalNFe: 45450.1,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 1,
      TotalNFe: 52495,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 1,
      TotalNFe: 51602,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 1,
      TotalNFe: 56613.5,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 1,
      TotalNFe: 39509.6,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 1,
      TotalNFe: 54467.1,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 1,
      TotalNFe: 42879.39,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 1,
      TotalNFe: 44566,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 1,
      TotalNFe: 40217.5,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 1,
      TotalNFe: 64411.5,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 1,
      TotalNFe: 62793.25,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Sidicom Sist Informacoes Por Computacao Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '04/18',
      QtdNFes: 1,
      TotalNFe: 232425.73,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '08/18',
      QtdNFes: 1,
      TotalNFe: 245008.94,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '12/18',
      QtdNFes: 1,
      TotalNFe: 214439.23,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 1,
      TotalNFe: 206869.38,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '02/18',
      QtdNFes: 1,
      TotalNFe: 200163.41,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '07/18',
      QtdNFes: 1,
      TotalNFe: 236486.87,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '06/18',
      QtdNFes: 1,
      TotalNFe: 225049.98,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '03/18',
      QtdNFes: 1,
      TotalNFe: 214146.3,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '05/18',
      QtdNFes: 1,
      TotalNFe: 279735.93,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 1,
      TotalNFe: 212099.8,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '10/18',
      QtdNFes: 1,
      TotalNFe: 299086.54,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '09/18',
      QtdNFes: 1,
      TotalNFe: 244281.51,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Surgeon Com De Mat Cirurgico Hospl Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '01/18',
      QtdNFes: 1,
      TotalNFe: 1063.00,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Valen Bar E Rest Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    },
    {
      MesAnoEmit: '11/18',
      QtdNFes: 1,
      TotalNFe: 247.9,
      TotalBCICMS: 0.00,
      TotalICMS: 0.00,
      TotalBCICMSST: 0.00,
      TotalICMSST: 0.00,
      Client: new Client(1, 'Yellow Foods Ltda', '', true, 1, '', new Array<ExtratoTotal>(), new Array<Meta>()),
      Clients: new Array<Client>()
    }
  ];

  getTopTenClients(event) {
    let month = this.getMonthNumberStr(event.month);
    let year = String(event.year).substring(2);
    let ret = [];

    this.clients.forEach((el) => {
      if (el.MesAnoEmit.split('/')[0] == month && el.MesAnoEmit.split('/')[1] == year) {
        ret.push(el);
      }
    });

    //TODO: FILTER ONLY 10 CLIENTS
    return ret.sort((a, b) => parseFloat(a.TotalNFe) - parseFloat(b.TotalNFe)).reverse();
  }

  getTopTenClientsByNameAndDate(name, event) {
    let month = this.getMonthNumberStr(event.month);
    let year = String(event.year).substring(2);
    let ret = [];

    this.top10ClientesSumaPorMes.forEach((el) => {
      if (el.MesAnoEmit.split('/')[0] == month && el.MesAnoEmit.split('/')[1] == year && el.Client.Name == name) {
        ret.push(el);
      }
    });

    //TODO: FILTER ONLY 10 CLIENTS
    return ret.sort((a, b) => parseFloat(a.TotalNFe) - parseFloat(b.TotalNFe)).reverse();
  }

  getMonthNumberStr(monthStr) {
    var month = "";
    switch (monthStr) {

      case "Janeiro":
        month = '01';
        break;
      case "Fevereiro":
        month = '02';
        break;
      case "Março":
        month = '03';
        break;
      case "Abril":
        month = '04';
        break;
      case "Maio":
        month = '05';
        break;
      case "Junho":
        month = '06';
        break;
      case "Julho":
        month = '07';
        break;
      case "Agosto":
        month = '08';
        break;
      case "Setembro":
        month = '09';
        break;
      case "Outubro":
        month = '10';
        break;
      case "Novembro":
        month = '11';
        break;
      case "Dezembro":
        month = '12';
        break;
    }
    return month;
  }

  setLoggedUserIndex(email) {
    switch (email) {
      case "wilson.danta@wdanta.com":
        this.loggedUserIndex = 0;
        break;
      case "alopes@ankor.com":
        this.loggedUserIndex = 1;
        break;
      case "afraga@ankor.com":
        this.loggedUserIndex = 2;
        break;
      case "dborba@ankor.com":
        this.loggedUserIndex = 3;
        break;
    }
  }

  setNumberOfCompanies(userIndex, userName) {
    this.NUMBER_OF_COMPANIES = this.clients[userIndex][userName].length - 1;
  }

}

//en array clients guardar: 24 meses de extratos por mes por cliente y calcular el top 5 clientes de la empresa por año?


//2018

//Hidroscience Consult E Restaur Ambiental Ltda
//Icafe Do Sul Com Varej De Vest E Bij Ltda
//Infrati Informatica Ltda
//L A Lopes Com De Cosmeticos Ltda Epp
//Luciano Santos Espindola Eireli
//M2t Gastronomia E Servs Ltda
//Mkt Lopes Com De Cosmeticos Ltda
//Sidicom Sist Informacoes Por Computacao Ltda
//Surgeon Com De Mat Cirurgico Hospl Ltda

/*
//Porto Vital Com De Prod Para A Saude Ltda
, {
  MesAnoEmit: '10/18',
    QtdNFes: 2,
    TotalNFe: 386.00,
    TotalBCICMS: 0.00,
    TotalICMS: 0.00,
    TotalBCICMSST: 0.00,
    TotalICMSST: 0.00,
    Client: new Client(1, 'Porto Vital Com De Prod Para A Saude Ltda', '', true, 1, '', new Array<ExtratoTotal>()),
    Clients: new Array<Client>()
}

//Valen Bar E Rest Ltda Epp
, {
  MesAnoEmit: '01/18',
    QtdNFes: 1,
    TotalNFe: 1063.00,
    TotalBCICMS: 0.00,
    TotalICMS: 0.00,
    TotalBCICMSST: 0.00,
    TotalICMSST: 0.00,
    Client: new Client(1, 'Valen Bar E Rest Ltda Epp', '', true, 1, '', new Array<ExtratoTotal>()),
    Clients: new Array<Client>()
}

//Yellow Foods Ltda
, {
  MesAnoEmit: '11/18',
    QtdNFes: 2,
    TotalNFe: 247.90,
    TotalBCICMS: 0.00,
    TotalICMS: 0.00,
    TotalBCICMSST: 0.00,
    TotalICMSST: 0.00,
    Client: new Client(1, 'Yellow Foods Ltda', '', true, 1, '', new Array<ExtratoTotal>()),
    Clients: new Array<Client>()
}*/


