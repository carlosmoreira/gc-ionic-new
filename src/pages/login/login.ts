import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(public navCtrl: NavController, private fb: FormBuilder, public auth: AuthProvider, public loadingCtrl: LoadingController, public alertCtrl : AlertController) {
    this.user = this.fb.group({
      username: ['biff@example.com'],
      password: ['asdfasdf']
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
    //console.log(userLogin.value);
    let loader = this.loadingCtrl.create({
      content: "Logging you in!",
    });
    loader.present();
    this.auth.login(userLogin.value).then(response => {
      loader.dismiss();
      console.log("submit Login: Success", response);
    }).catch(response => {
      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Login Error!',
        subTitle: response.error.message,
        buttons: ['OK']
      });
      alert.present();
      console.log('submitLogin:Catch Error', response);
    })
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
