import { Component } from '@angular/core';
import {Credentials} from './credentials.model'
import { AppService } from './app.service';
import { Observable, Subject } from 'rxjs';

import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private  appService : AppService){}

  model = new Credentials('','');

  submit() { 
    console.log(JSON.stringify(this.model));
    this.appService.submit(this.model).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      }
    )
   }

   




}
