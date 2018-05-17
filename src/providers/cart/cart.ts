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
    private selectedCards : Array<Object>;
    constructor() {
        this.cards = [];
        this.selectedCards = [];
    }

    public getCards() {
        return this.cards;
    }

    /**
     * Add card to cart
     * @param {Object} card
     */
    public addCard(card : Object) : boolean{
        this.selectedCards.push(card);
        return true;
    }

    public removeCard(){

    }

}
