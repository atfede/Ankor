import {Client} from "./Client";

export class ExtratoTotal {
  MesAnoEmit: string;
  QtdNFes: number;
  TotalNFe: number;
  TotalBCICMS: number;
  TotalICMS: number;
  TotalBCICMSST: number;
  TotalICMSST: number;
  Client : Client;
  Clients: Array<Client>;
}
