import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../config/global';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' }
  ),
  params: undefined,
  reportProgress: false
};

@Injectable({
  providedIn: 'root'
})
export class ParroquiaService {
  public uri: string;

  constructor(public http: HttpClient) {
    this.uri = GLOBAL.url;
  }

  register(parroquia): Observable<any> {
    httpOptions.params = undefined;
    return this.http.post(this.uri + 'parroquia', parroquia, httpOptions);
  }

  update(parroquia) {
    httpOptions.params = undefined;
    return this.http.put(this.uri + 'parroquia/' + parroquia._id, parroquia, httpOptions);
  }

  getAll(): Observable<any[]> {
    httpOptions.params = undefined;
    return this.http.get<any[]>(this.uri + 'parroquia', httpOptions);
  }

}
