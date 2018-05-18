import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CardServiceProvider Provider');
  }

  getCards(){
    return new Promise(resolve => {
      this.http.get("http://backend.giftcash.ca/api/cards").subscribe(response => {
        resolve(response);
      }, err => {
        console.log(err);
      });
    });
  }
}
