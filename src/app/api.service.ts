import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Waste } from './waste';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*','Content-Type': 'application/json',
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzY0NGVjZDEzZDY2NjM4ZDc2MGE4ZCIsImlhdCI6MTY2ODY5NzQ2NSwiZXhwIjoxNjY4NzAxMDY1fQ.W6Hfxp-lursEMQ_0owWtsEgjvw6_EiVtkTNoV_cImn4',
  })
};
const apiUrl = "https://octogone-waste.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

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

  getWastes (token:string): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'wastes', httpOptions )
      .pipe(
        tap(res => console.log('fetched wastes')),
        catchError(this.handleError('getWastes', []))
      );
  }
  
  getWaste(id: number,token:string): Observable<Waste> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Waste>(url).pipe(
      tap(_ => console.log(`fetched waste id=${id}`)),
      catchError(this.handleError<Waste>(`getWaste id=${id}`))
    );
  }
  
  addWaste (waste:any,token:string): Observable<Waste> {
    return this.http.post<Waste>(apiUrl, waste, httpOptions).pipe(
      tap((waste: any) => console.log(`added waste w/ id=${waste._id}`)),
      catchError(this.handleError<Waste>('addWaste'))
    );
  }
  
  updateWaste (id:string,token:string, waste:any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, waste, httpOptions).pipe(
      tap(_ => console.log(`updated waste id=${id}`)),
      catchError(this.handleError<any>('updateWaste'))
    );
  }
  
  deleteWaste (id:string,token:string): Observable<Waste> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Waste>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted waste id=${id}`)),
      catchError(this.handleError<Waste>('deleteWaste'))
    );
  }
}
