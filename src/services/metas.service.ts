import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {MetasComponent} from "../pages/metas/metas";
import {catchError, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Meta} from "../models/Meta";

@Injectable()
export class MetasService {

  // addMetaUrl: string = "http://milmusicos.com/index.php/Metas/addMeta";
  updateMetaUrl: string = "http://milmusicos.com/index.php/Metas/updateMeta";
  getMetasClienteUrl: string = "http://milmusicos.com/index.php/Metas/getMetasCliente";
  // updateMetaUrl: string = "http://127.0.0.1/BuscoMusicos/index.php/Metas/addMeta";

  const
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' //'application/json',
    })
  };

  constructor(private http: HttpClient) {

  }

  getMetasCliente(clientName: string): Promise<Meta[]> {

    let params = new HttpParams().set("user", clientName);

    return this.http.get(this.getMetasClienteUrl, {params: params}) //`http://swapi.co/api/people/1`
      .map(response => {
        const array = response as any[];
        const details = array.map(data => new Meta(data.id, data.user, data.cliente_nombre, data.valor, data.fecha_meta));
        return details;
      })
      .toPromise();
  }

  /*  getMetasCliente(clientName: string): any {

      let params = new HttpParams().set("user", clientName);

      this.http.get(this.getMetasClienteUrl, {params: params}) //`http://swapi.co/api/people/1`
        .map((response: Response) => {
          // console.log(response.json());
          // console.log(response);
          this.metasCliente = response;
        })
        .subscribe();
    }*/

  /*getMetasCliente(clientName: string): Observable<Meta[]> {

    let params = new HttpParams().set("user", clientName);

    return this.http.get(this.getMetasClienteUrl, {params: params})
      .map(res => {
        let response: any = res;
        let r = response.map((item) => new Meta(item.id, item.user, item.client_name, item.valor, item.fecha_meta));
        return r;
      });
    // .subscribe();
  }*/

  addMeta(clientName: string, meta: number): any {

    // let body = 'cliente_nombre=' + clientName + '&valor=' + meta;
    let body = {cliente_nombre: clientName, valor: meta};

    return this.http.post(this.updateMetaUrl, body, this.httpOptions)
      .pipe(
        //catchError(this.handleError('addMeta', {"clientName": clientName, "valor": meta}))
      );
  }

  updateMeta(user: string, clientName: string, meta: number): any {

    let body = {'user': user, 'cliente_nombre': clientName, 'valor': meta};

    return this.http.post(this.updateMetaUrl, body, this.httpOptions)
      .pipe(
        //catchError(this.handleError('addMeta', {"clientName": clientName, "valor": meta}))
      );
  }
}
