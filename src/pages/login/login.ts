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

  user: FormGroup;
  registerUser: FormGroup;

  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.user = this.fb.group({
      username: [],
      password: []
    });

    this.registerUser = this.fb.group({
      firstName: [],
      lastName: [],
      username: [],
      password: [],
      confirmPassword: []
    });
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(userLogin) {
    console.log(userLogin);
    console.log(userLogin.value);
  }

  submitRegister(userRegister) {
    console.log('registering', userRegister.value);
    alert('To be implemented, data is collected');
  }

  resetPassword() {
    console.log('reset password');
  }

  slideToRegister() {

  }

  forgotPassword() {
    alert('To Be Implemented..');
  }
}
