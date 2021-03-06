import {EventEmitter} from 'events';
import _ from 'lodash';

export default _.extend({}, EventEmitter.prototype, {

  items: JSON.parse(localStorage.getItem('cards')) || [],

  getItems: function(deckId){
    let cards = [];
    this.items.forEach(function(card){
      if(card.deckId == deckId){
        cards.push(card);
      }
    });
    return cards;
  },

  getItem: function(cardId){
    return _.find(this.items,(item) => {
      return cardId == item.id;
    });
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
  addItem: function(new_item)   {

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].position >= new_item.position) {
        this.items[i].position ++;
      }
    }

    this.items.push(new_item);

    localStorage.setItem('cards', JSON.stringify(this.items));
  },

  // Remove item
  removeItem: function(item_id){

    //TODO recursive removal
    var card = this.getItem(item_id);

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].position > card.position) {
        this.items[i].position --;
      }
    }

    let items = this.items;

    _.remove(items,(item) => {
      return item_id == item.id;
    });

    this.items = items;
    localStorage.setItem('cards', JSON.stringify(this.items));
  },
  updateItem: function(update_item){
    this.removeItem(update_item.id);
    this.addItem(update_item);
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
