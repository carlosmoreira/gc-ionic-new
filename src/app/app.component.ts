import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CheckoutPage } from '../pages/checkout/checkout';

@Component({
  templateUrl: 'app.html' 
})
export class MyApp { 
  @ViewChild(Nav) nav: Nav;
  isLoggedIn : boolean = false;
  user : Object;
  rootPage: any = HomePage; 
  pages: Array<{title: string, component: any, requiresAuth : boolean, hideIfAuth : boolean }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events :Events) {
    this.initializeApp(); 

    // used for an example of ngFor and navigation
    this.pages = [ 
      { title: 'Home', component: HomePage, requiresAuth : false , hideIfAuth : false },
      { title: 'Checkout', component: CheckoutPage,  requiresAuth : false , hideIfAuth : false },
      { title: 'Logout', component: ListPage,  requiresAuth : true , hideIfAuth : false },
      { title: 'Login/Register', component: LoginPage, requiresAuth : false , hideIfAuth : true }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ngAfterViewInit(){
    this.events.subscribe("user:auth:login", (user) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user);
      this.user = user;
      this.isLoggedIn = true;
    });
    this.events.subscribe("user:auth:logout", (user) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user);
    });
  }
}
