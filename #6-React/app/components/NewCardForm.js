import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatcher from '../dispatcher/AppDispatcher';
import CardStore from '../stores/CardStore';

export default React.createClass({
  createItem: function(e){
    e.preventDefault();

    var id = CardStore.getNextId();
    var deck_id = this.props.deckId;
    var item_title = ReactDOM.findDOMNode(this.refs.item_title).value;
    var front_content = ReactDOM.findDOMNode(this.refs.front_content).value;
    var back_content = ReactDOM.findDOMNode(this.refs.back_content).value;
    ReactDOM.findDOMNode(this.refs.item_title).value = '';

    // This is where the magic happens,
    // no need to shoot this action all the way to the root of your application to edit state.
    // AppDispatcher does this for you.
    AppDispatcher.dispatch({
      action: 'add-card',
      new_item: {
        id: id,
        title: item_title,
        deckId: deck_id,
        front: front_content,
        back: back_content
      }
    });
  },

  render: function(){
    return <form onSubmit={ this.createItem }>
        <h5>New Card Form</h5>
        <input type="text" ref="item_title" placeholder="Card Title"/>
        <input type="text" ref="front_content" placeholder="Front Side Content"/>
        <input type="text" ref="back_content" placeholder="Back Side Content"/>
        <button>Add new item</button>
      </form>;
  }
});
