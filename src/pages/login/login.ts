import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user : FormGroup;

  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.user = this.fb.group({
      username : [],
      password : []
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(userLogin){
    console.log(userLogin);
    console.log(userLogin.value);
  }

  register(){
  	console.log('registering');
  }

  resetPassword(){
  	console.log('reset password');
  }

}
