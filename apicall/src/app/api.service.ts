import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient,) { }
  httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
  getLastName() {
    var httpOptions = this.httpOptions; 
    return this.http
    .get(`https://lastname-8661b-default-rtdb.firebaseio.com/lastName.json`)
  }
}

