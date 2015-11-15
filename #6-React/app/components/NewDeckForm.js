import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatcher from '../dispatcher/AppDispatcher';
import DeckStore from '../stores/DeckStore';

export default React.createClass({
  createItem: function(e){
    e.preventDefault();

    var id = DeckStore.getNextId();
    var item_title = ReactDOM.findDOMNode(this.refs.item_title).value;
    ReactDOM.findDOMNode(this.refs.item_title).value = '';

    // This is where the magic happens,
    // no need to shoot this action all the way to the root of your application to edit state.
    // AppDispatcher does this for you.
    AppDispatcher.dispatch({
      action: 'add-deck',
      new_item: {
        id: id,
        title: item_title
      }
    });
  },

  /*guid: function(){
    function s4() {
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
   }
   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
     s4() + '-' + s4() + s4() + s4();
  },*/

  render: function(){
    return <form onSubmit={ this.createItem }>
        <input type="text" ref="item_title"/>
        <button>Add new item</button>
      </form>;
  }
});
