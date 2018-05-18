import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {

    public cards: Array<Object>;
    private selectedCards : Object;
    constructor() {
        this.cards = [];
        this.selectedCards = Object; 
    }

    public getCards() {
        return this.cards;
    }

    public getSelectedCards(){
        return this.selectedCards;
    }

    /**
     * Add card to cart
     * @param {Object} card
     */
    public addCard(card : Object) : boolean{
        this.selectedCards = card;
        return true;
    }

    public removeCard(){

    }

}
