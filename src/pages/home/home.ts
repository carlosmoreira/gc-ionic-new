import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CartProvider} from "../../providers/cart/cart";
import {CheckoutPage} from "../checkout/checkout";
import { CardServiceProvider } from '../../providers/card-service/card-service';


@Component({ 
    selector: 'page-home',
    templateUrl: 'home.html'
}) 
export class HomePage { 

    public cardSearch : string;
    public cards: Array<Object> ;
    public selectedCard: any;

    constructor(public navCtrl: NavController, public cart: CartProvider, public CardService : CardServiceProvider) {
        //Get cards from server or memory
        CardService.getCards().then(response => {
            if(response.status == "success"){
                if(response.data && response.data.cards){
                    this.cards = response.data.cards;
                    this.cart.cards = response.data.cards;
                }
            }
            console.log('data response', response);
          });
        console.log(this.cart.getCards());

    }

    public search() {
        console.log("Searching for:", this.cardSearch);
        this.cards = this.cart.getFilteredCards(this.cardSearch);
        if(this.cardSearch.length < 1 || this.cardSearch == null){
            console.log("Reseting All Cards");
            this.cards = this.cart.getCards();
        }
    }

    public select(card) {
        console.log(card);
        this.selectedCard = card;
    }

    public checkOut() {
        console.log("Clicked Checking out", this.selectedCard);
        //Navigate to checkout
        this.cart.addCard(this.selectedCard);
        this.selectedCard = null;
        this.navCtrl.push(CheckoutPage);
    }

    public cancel(){
        this.selectedCard = null;
    }
}