import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CartProvider} from "../../providers/cart/cart";
import {CheckoutPage} from "../checkout/checkout";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public cardSearch : string;
    public cards: Array<Object> ;
    public selectedCard: any;

    constructor(public navCtrl: NavController, public cart: CartProvider) {
        //Get cards from server or memory
        if(this.cart.getCards().length < 1){
            //Call service to retrieve cards
            this.cart.cards.push({id: 1,
                image:"/images/cards/15051401312959.png",
                is_numbers_only:1,
                is_pin_required:1,
                name:"Abercrombie & Fitch",
                number_max_length:null,
                number_min_length:null,
                offer_percentage:72,
                pin_max_length:null,
                pin_min_length:null,
                status:"active",
                type:"egift",
                updated_at:"2018-04-11 14:20:27"});
            this.cart.cards.push({id: 2,
                image:"/images/cards/15051401312959.png",
                is_numbers_only:1,
                is_pin_required:1,
                name:"Abercrombie & Fitch",
                number_max_length:null,
                number_min_length:null,
                offer_percentage:72,
                pin_max_length:null,
                pin_min_length:null,
                status:"active",
                type:"egift",
                updated_at:"2018-04-11 14:20:27"});
            this.cards = cart.cards;
        }else{

        }


    }

    public search(name: string) {
        console.log("Searching for:", name);
        console.log("string: " , this.cardSearch);
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

