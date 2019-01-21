import {TipoCliente} from "./TipoCliente";
import {ExtratoTotal} from "./ExtratoTotal";

export class Meta {
  Increments: Boolean;
  Amount: number;
  Percentage: number;

  constructor(increments: boolean, amount: number, percentage: number) {
    this.Increments = increments;
    this.Amount = amount;
    this.Percentage = percentage;
  }
}
