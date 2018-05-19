import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../http-service/http-service';

/*
  Generated class for the CardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardServiceProvider {

  constructor(public http: HttpServiceProvider) {
    
  } 

  getCards(){
    return new Promise(resolve => {
      this.http.get("cards").subscribe(response => { 
        resolve(response);
      }, err => {
        console.log(err);
      });
    });
  }
}
