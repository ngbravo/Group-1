import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatcher from '../dispatcher/AppDispatcher';
import CardStore from '../stores/CardStore';

export default React.createClass({
  createItem: function(e){
    e.preventDefault();

    var cards = CardStore.getItems(this.props.deckId);

    var id = CardStore.getNextId();
    var deck_id = this.props.deckId;
    var size = this.props.size;
    var item_title = ReactDOM.findDOMNode(this.refs.item_title).value;
    var front_content = ReactDOM.findDOMNode(this.refs.front_content).value;
    var back_content = ReactDOM.findDOMNode(this.refs.back_content).value;
    var item_image = ReactDOM.findDOMNode(this.refs.image_file).value;
    var position = parseInt(ReactDOM.findDOMNode(this.refs.position).value);

    ReactDOM.findDOMNode(this.refs.item_title).value = '';
    ReactDOM.findDOMNode(this.refs.front_content).value = '';
    ReactDOM.findDOMNode(this.refs.back_content).value = '';
    ReactDOM.findDOMNode(this.refs.position).value = cards.length + 2;

    // This is where the magic happens,
    // no need to shoot this action all the way to the root of your application to edit state.
    // AppDispatcher does this for you.
    AppDispatcher.dispatch({
      action: 'add-card',
      new_item: {
        id: id,
        size: size,
        title: item_title,
        deckId: deck_id,
        front: front_content,
        back: back_content,
        position: position,
        image: item_image
      }
    });
  },
  updateItem: function(e){
    var card = CardStore.getItem(this.props.params.cardId);

    card.title = ReactDOM.findDOMNode(this.refs.item_title).value;
    card.front = ReactDOM.findDOMNode(this.refs.front_content).value;
    card.back = ReactDOM.findDOMNode(this.refs.back_content).value;
    card.image = ReactDOM.findDOMNode(this.refs.image_file).value;
    card.position = parseInt(ReactDOM.findDOMNode(this.refs.position).value);

    AppDispatcher.dispatch({
      action: 'edit-card',
      new_item: card
    });
  },

  render: function(){

    if (this.props.mode != undefined) {
      if (this.props.mode == "new") {
        var cards = CardStore.getItems(this.props.deckId);
        return(
          <form onSubmit={this.createItem}>
            <h5>Add a card</h5>
            <input type="text" ref="item_title" placeholder="Card Title"/>
            <input type="text" ref="front_content" placeholder="Front Side Content"/>
            <input type="text" ref="back_content" placeholder="Back Side Content"/>
            <input type="number" ref="position" placeholder="Position" defaultValue={cards.length + 1}/>
            <input type="text" ref="image_file" placeholder="(Optional) Image URL"/>
            <button className="waves-effect waves-light btn">Add new card</button>
          </form>
        );
      }
    }
    else {
      var card = CardStore.getItem(this.props.params.cardId);
      return(
        <form onSubmit={this.updateItem}>
          <h5>Update card</h5>
          <input type="text" ref="item_title" placeholder="Card Title" defaultValue={card.title}/>
          <input type="text" ref="front_content" placeholder="Front Side Content" defaultValue={card.front}/>
          <input type="text" ref="back_content" placeholder="Back Side Content" defaultValue={card.back}/>
          <input type="number" ref="position" placeholder="Position" defaultValue={card.position}/>
          <input type="text" ref="image_file" placeholder="(Optional) Image URL" defaultValue={card.image}/>
          <button className="waves-effect waves-light btn">Update</button>
          <br/>
          <a href={`#/cards/${card.id}`}>Back</a>
        </form>
      );
    }


  }
});
