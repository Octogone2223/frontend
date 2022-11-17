import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Waste } from './waste';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*','Content-Type': 'application/json',
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzYzYzEzOTEwNmYyMDFlZDdmNGZkNyIsImlhdCI6MTY2ODY5MzAzMiwiZXhwIjoxNjY4Njk2NjMyfQ.f-L_okt-72NONsQwfvTbGvIhKVkqMBr9PxMgeNn5eZg',
  })
};
const apiUrl = "https://octogone-waste.herokuapp.com/wastes";

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

  createAccount (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl, httpOptions )
      .pipe(
        tap(res => console.log('fetched wastes')),
        catchError(this.handleError('getWastes', []))
      );
  }

  logAccount (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl, httpOptions )
      .pipe(
        tap(res => console.log('fetched wastes')),
        catchError(this.handleError('getWastes', []))
      );
  }

  getWastes (): Observable<any[]> {
    return this.http.get<any[]>(apiUrl, httpOptions )
      .pipe(
        tap(res => console.log('fetched wastes')),
        catchError(this.handleError('getWastes', []))
      );
  }
  
  getWaste(id: number): Observable<Waste> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Waste>(url).pipe(
      tap(_ => console.log(`fetched waste id=${id}`)),
      catchError(this.handleError<Waste>(`getWaste id=${id}`))
    );
  }
  
  addWaste (waste:any): Observable<Waste> {
    return this.http.post<Waste>(apiUrl, waste, httpOptions).pipe(
      tap((waste: any) => console.log(`added waste w/ id=${waste._id}`)),
      catchError(this.handleError<Waste>('addWaste'))
    );
  }
  
  updateWaste (id:string, waste:any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, waste, httpOptions).pipe(
      tap(_ => console.log(`updated waste id=${id}`)),
      catchError(this.handleError<any>('updateWaste'))
    );
  }
  
  deleteWaste (id:string): Observable<Waste> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Waste>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted waste id=${id}`)),
      catchError(this.handleError<Waste>('deleteWaste'))
    );
  }
}
