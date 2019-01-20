import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {MetasComponent} from "../pages/metas/metas";
import {catchError} from "rxjs/operators";

@Injectable()
export class MetasService {

  metasUrl: string = "http://milmusicos.com/index.php/Meta/addMeta";
  // metasUrl: string = "http://127.0.0.1/BuscoMusicos/index.php/Metas/addMeta";

  const
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'//'application/json',
    })
  };

  constructor(private http: HttpClient) {

  }

  addMeta(clientName: string, meta: number): any {

    // let body = 'cliente_nombre=' + clientName + '&valor=' + meta;
    let body = {cliente_nombre: clientName, valor: meta};

    return this.http.post(this.metasUrl, body, this.httpOptions)
      .pipe(
        //catchError(this.handleError('addMeta', {"clientName": clientName, "valor": meta}))
      );
  }

  updateMeta(user: string, clientName: string, meta: number): any {

    //let body =  'user=' + user + '&cliente_nombre=' + clientName + '&valor=' + meta;
    let body = {'user': user, 'cliente_nombre': clientName, 'valor': meta};

    return this.http.post(this.metasUrl, body, this.httpOptions)
      .pipe(
        //catchError(this.handleError('addMeta', {"clientName": clientName, "valor": meta}))
      );
  }
}
