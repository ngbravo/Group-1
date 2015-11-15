import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
require('react-select/less/default.less');
import AppDispatcher from '../dispatcher/AppDispatcher';
import DeckStore from '../stores/DeckStore';

export default React.createClass({
  createItem: function(e){
    e.preventDefault();

    var id = DeckStore.getNextId();
    var item_title = ReactDOM.findDOMNode(this.refs.item_title).value;
    var cards_size = ReactDOM.findDOMNode(this.refs.cards_size).value;
    console.log(cards_size);
    ReactDOM.findDOMNode(this.refs.item_title).value = '';

    // This is where the magic happens,
    // no need to shoot this action all the way to the root of your application to edit state.
    // AppDispatcher does this for you.
    AppDispatcher.dispatch({
      action: 'add-deck',
      new_item: {
        id: id,
        title: item_title,
        cards_size: cards_size
      }
    });
  },

  render: function(){
    return <form onSubmit={ this.createItem }>
        <p>New Deck</p>
        <input type="text" ref="item_title" placeholder="Deck Title"/>
        <Select name="cards_size" ref="cards_size"
          value="small"
          options={[{value:'small',label:'Small'},
          {value:'medium',label:'Medium'},
          {value:'large',label:'Large'}]}/>

          <button>Add new item</button>
      </form>;
  }
});
