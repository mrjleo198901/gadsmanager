import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map, tap, last } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { GLOBAL } from '../config/global';
import { User } from '../models/user';

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

export class LoginService {
  private handleError: HandleError;
  public uri: string;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.uri = GLOBAL.url;
    this.handleError = httpErrorHandler.createHandleError('LoginService');
  }

  sendEmail(user) {
    httpOptions.reportProgress = true;
    return this.http.post(this.uri + 'sendmail', user, httpOptions)
  }

  registerUser(user): Observable<any> {
    return this.http.post(this.uri + 'user', user, httpOptions)
    /*.pipe(
      catchError(this.handleError('registerUser', user))
    );*/
  }

  getUserById(correo): Observable<User[]> {
    httpOptions.params = new HttpParams();
    httpOptions.params = httpOptions.params.append('correo', correo);
    return this.http.get<User[]>(this.uri + 'user', httpOptions)
      .pipe(
      retry(1),
      catchError(this.handleError('getUserById', []))
      );
  }

  updateUser(user): Observable<User> {
    return this.http.put<User>(this.uri + 'user/' + user._id, user, httpOptions)
      .pipe(
      retry(1),
      catchError(this.handleError('updateUser', user))
      );
  }

  authenticateUser(user) {
    return this.http.post(this.uri + 'authenticate', user, httpOptions)
      .pipe(
      map(res => res),
      catchError(this.handleError('authenticateUser', user))
      );
  }

  sendEmailProgress(user) {

    const req = new HttpRequest('POST', this.uri + 'sendmail', user, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, user)),
      //tap(message => this.showProgress(message)),
      last(),
      catchError(this.handleError(user))
    );

  }

  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

}
