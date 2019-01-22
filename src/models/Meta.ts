export class Meta {
  id: number;
  clientName: string;
  user: string;
  Amount: number;
  fechaMeta: string;

  constructor(id: number, user: string, clientName: string, valor: number, fecha: string) {
    this.id = id;
    this.user = user;
    this.clientName = clientName;
    this.Amount = valor;
    this.fechaMeta = fecha;
  }
}
