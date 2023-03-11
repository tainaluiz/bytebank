import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from './../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private _transferencias: Array<Transferencia> = [];
  private readonly _url = 'http://localhost:3000/transferencias';

  constructor(private _httpClient: HttpClient) { }

  get transferencias(): Array<Transferencia> {
    return this._transferencias;
  }

  public todas(): Observable<Array<Transferencia>> {
    return this._httpClient.get<Array<Transferencia>>(this._url);
  }

  public transferir(transferencia: Transferencia): Observable<Transferencia> {
    return this._httpClient.post<Transferencia>(this._url, transferencia);
  }
}
