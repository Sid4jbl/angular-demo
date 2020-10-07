import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Credentials} from './Credentials.model'



@Injectable({
    providedIn: 'root'
  })
  
export class AppService{

    endpoint: string = "https://reqres.in/api/login";
    constructor(private http: HttpClient) { }


    public submit(postData: Credentials): Observable<Object> {
        return this.http.post(this.endpoint,postData);
          
      }
    
    
}