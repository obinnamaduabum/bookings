import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor(private httpClient: HttpClient) {
  }


  search(value: string): Observable<any> {
    return this.httpClient.get(`/v1/api/public/attractions/search?score=${value}`, httpOptions).pipe(map((data: any) => {
      return data;
    }));
  }


  index(): Observable<any> {
    return this.httpClient.get(`/v1/api/public/attractions`, httpOptions).pipe(map((data: any) => {
      return data;
    }));
  }
}
