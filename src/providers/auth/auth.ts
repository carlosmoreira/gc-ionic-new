import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../http-service/http-service';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpServiceProvider) {
    console.log('Hello AuthProvider Provider');
  } 

  login(loginData) {
    //console.log('calling auth:login');
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({
        'Authorization': 'Basic ' + btoa(loginData.username+ ':' + loginData.password),
      });
      this.http.post("login", loginData, headers).subscribe(
      response => {
        resolve(response);
      }, 
      err => {
        //console.log("Auth:Login:Error", err);
        reject(err);
      });
    }
    );
  }


}
