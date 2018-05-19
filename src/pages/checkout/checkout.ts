import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from "../../providers/cart/cart";

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})

export class CheckoutPage {
 
  public payout: Payout;
  public cards: Object = Object;
  public user : Object;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: CartProvider) {
    this.payout = new Payout();
    this.cards = this.cart.getSelectedCards();
    this.user = this.cart.logedInUser;
    console.log(this.cards);
  }

  complete(){
    console.log('complete');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }
}

class Payout {
  public payoutMethod;
  public payoutEmail;
  constructor() {
    this.payoutMethod = "";
    this.payoutEmail = "";
  }
} 
