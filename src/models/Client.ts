import {TipoCliente} from "./TipoCliente";

export class Client {
  Id: number;
  Name: string;
  Surename: string;
  Increments: Boolean;
  Amount: number;
  ClientType : string;

  constructor(id: number, name: string, surename : string, increments : boolean, amount: number, clientType: string){
      this.Id = id,
      this.Name = name,
      this.Surename = this.Surename,
      this.Increments = increments,
      this.Amount = amount,
      this.ClientType = clientType
  }
}
