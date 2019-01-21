import {TipoCliente} from "./TipoCliente";
import {ExtratoTotal} from "./ExtratoTotal";
import {Meta} from "./Meta";

export class Client {
  Id: number;
  Name: string;
  Surename: string;
  Increments: Boolean;
  Amount: number;
  ClientType: string;
  extratos: Array<ExtratoTotal>;
  metas: Array<Meta>;

  constructor(id: number, name: string, surename: string, increments: boolean, amount: number, clientType: string, extratos: Array<ExtratoTotal>, metas: Array<Meta>) {
    this.Id = id,
      this.Name = name,
      this.Surename = this.Surename,
      this.Increments = increments,
      this.Amount = amount,
      this.ClientType = clientType,
      this.extratos = extratos
    this.metas = metas;
  }
}
