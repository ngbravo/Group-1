import {EventEmitter} from 'events';
import _ from 'lodash';

var CARD_REVERSE1 = [{contentText:"hola2"},{contentText:"chao2"},{contentText:"data666"}];
var CARD_FRONT1 = [{contentText:"hola"},{contentText:"chao"},{contentText:"data"}];

var CARD_REVERSE2 = [{contentText:"hola2-2"},{contentText:"chao2-2"},{contentText:"data666-2"}];
var CARD_FRONT2 = [{contentText:"hola-2"},{contentText:"chao-2"},{contentText:"data-2"}];

var CARDS = [
  {title: "Titulo1", front:CARD_FRONT1, reverse:CARD_REVERSE1, size: "medium", id:1, deckId:0},
  {title: "Titulo2", front:CARD_FRONT2, reverse:CARD_REVERSE2, size: "large", id:2, deckId:1},
  {title: "Titulo2", front:CARD_FRONT2, reverse:CARD_REVERSE2, size: "large", id:3, deckId:1}
];

export default _.extend({}, EventEmitter.prototype, {
  //TODO uncomment:
  //items: JSON.parse(localStorage.getItem('cards')) || [],
  items: CARDS,

  getItems: function(deckId){
    let cards = [];
    this.items.forEach(function(card){
      if(card.deckId == deckId){
        cards.push(card);
      }
    });
    return cards;
  },

  getNextId: function(){
    var id = -1;
    if(this.items && this.items.length > 0){
      id = this.items.reduce(function(prev, curr){
        if(prev.id > curr.id){
          return prev.id;
        }
        else{
          return curr.id;
        }
      }, {id:-1});
    }

    return id + 1;
  },

  // Add item
  addItem: function(new_item){
    this.items.push(new_item);
    localStorage.setItem('decks', JSON.stringify(this.items));
  },

  // Remove item
  removeItem: function(item_id){

    //TODO recursive removal

    let items = this.items;

    _.remove(items,(item) => {
      return item_id == item.id;
    });

    this.items = items;
    localStorage.setItem('decks', JSON.stringify(this.items));
  },

  // Emit Change event
  emitChange: function(){
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }

});
