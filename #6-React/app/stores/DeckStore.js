import {EventEmitter} from 'events';
import _ from 'lodash';

export default _.extend({}, EventEmitter.prototype, {

  items: JSON.parse(localStorage.getItem('decks')) || [],

  getItems: function(){
    return this.items;
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
