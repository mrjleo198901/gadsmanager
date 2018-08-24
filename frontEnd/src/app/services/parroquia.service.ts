import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../config/global';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' }
  ),
  params: new HttpParams(),
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

  getUserById(message) {
    let headers = new HttpHeaders();
    headers  = headers.append('Content-Type', 'application/json');
    headers  = headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    let params = new HttpParams();
    params = params.append('_id', message._id);

    return this.http.get(this.uri + 'parroquia', {headers , params });
  }

}
