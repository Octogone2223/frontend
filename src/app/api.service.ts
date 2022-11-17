import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Waste } from './waste';
import { CookieService } from 'ngx-cookie-service';


const apiUrl = "https://octogone-waste.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  

  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }
    
  token = '';
  httpOptions = {
    "headers": {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('token')
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  logAccount (user:any): Observable<any[]> {
    console.log('createAccountFunction');
    console.log(user)
    const headers = { "headers" : {'Access-Control-Allow-Origin':'*','Content-Type': 'application/json'}}
    return this.http.post<any[]>(apiUrl + 'auth/login',user, headers)
      .pipe(
        tap(res => console.log('fetched wastes')),
        catchError(this.handleError('getWastes', []))
      );
  }

  createAccount (user:any): Observable<any[]> {
    console.log('createAccountFunction');
    console.log(user)
    const headers = { "headers" : {'Access-Control-Allow-Origin':'*','Content-Type': 'application/json'}}
    return this.http.post<any[]>(apiUrl + 'auth/register', user, headers)
      .pipe(
        tap(res => console.log(res)),
        catchError(this.handleError('getWastes', []))
      );
  }

  getWastes (): Observable<any[]> {
    console.log('testttt: ' + this.token)
    const httpOptions = {
      "headers": {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieService.get('token'),
      }
    };

    return this.http.get<any[]>(apiUrl + 'wastes', httpOptions )
      .pipe(
        tap(res => console.log('fetched wastes')),
        catchError(this.handleError('getWastes', []))
      );
  }
  
  getWaste(id: number): Observable<Waste> {
    this.token = this.cookieService.get('token');
    const url = `${apiUrl}/${id}`;
    return this.http.get<Waste>(url).pipe(
      tap(_ => console.log(`fetched waste id=${id}`)),
      catchError(this.handleError<Waste>(`getWaste id=${id}`))
    );
  }
  
  addWaste (waste:any): Observable<Waste> {
    this.token = this.cookieService.get('token');
    return this.http.post<Waste>(apiUrl, waste, this.httpOptions).pipe(
      tap((waste: any) => console.log(`added waste w/ id=${waste._id}`)),
      catchError(this.handleError<Waste>('addWaste'))
    );
  }
  
  updateWaste (id:string, waste:any): Observable<any> {
    this.token = this.cookieService.get('token');
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, waste, this.httpOptions).pipe(
      tap(_ => console.log(`updated waste id=${id}`)),
      catchError(this.handleError<any>('updateWaste'))
    );
  }
  
  deleteWaste (id:string): Observable<Waste> {
    this.token = this.cookieService.get('token');
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Waste>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted waste id=${id}`)),
      catchError(this.handleError<Waste>('deleteWaste'))
    );
  }
}
