import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatcher from '../dispatcher/AppDispatcher';
import DeckStore from '../stores/DeckStore';

export default React.createClass({
  createItem: function(e){
    e.preventDefault();

    var id = DeckStore.getNextId();
    var item_title = ReactDOM.findDOMNode(this.refs.item_title).value;
    var item_size = ReactDOM.findDOMNode(this.refs.item_size).value;
    ReactDOM.findDOMNode(this.refs.item_title).value = '';

    // This is where the magic happens,
    // no need to shoot this action all the way to the root of your application to edit state.
    // AppDispatcher does this for you.
    AppDispatcher.dispatch({
      action: 'add-deck',
      new_item: {
        id: id,
        title: item_title,
        card_size: item_size,
        cards: []
      }
    });
  },

  render: function(){
    return <form onSubmit={ this.createItem }>
        <h5>Add a deck</h5>
        <input type="text" ref="item_title" placeholder="Deck Title"/>
        <input type="text" ref="item_size" placeholder="Card Size"/>
        <button className="waves-effect waves-light btn">Add new deck</button>
      </form>;
  }
});
