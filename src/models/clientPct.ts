import {TipoCliente} from "./TipoCliente";

export class clientPct {
  Id: number;
  Name: string;
  Surename: string;
  Increments: Boolean;
  Amount: number;
  ClientType: string;
  Percentage: number;

  constructor(id: number, name: string, surename: string, increments: boolean, amount: number, clientType: string, percentage: number ) {
    this.Id = id,
      this.Name = name,
      this.Surename = this.Surename,
      this.Increments = increments,
      this.Amount = amount,
      this.ClientType = clientType,
      this.Percentage = percentage
  }
}
