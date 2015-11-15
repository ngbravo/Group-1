import React from "react";
import Card from "./Card";
import { Router, Route, Link } from "react-router"
import CardStore from "../stores/CardStore";
import DeckStore from "../stores/DeckStore";
import NewCardForm from "./NewCardForm";
import AppDispatcher from '../dispatcher/AppDispatcher';


export default React.createClass({

  // Method to retrieve state from Stores
  getListState: function(){
    return {
      items: CardStore.getItems(this.props.params.deckId)
    };
  },

  onChangeMethod: function(){
    this.setState(this.getListState());
  },

  componentDidMount: function(){
    CardStore.addChangeListener(this.onChangeMethod);
  },

  componentWillUnmount: function(){
    CardStore.removeChangeListener(this.onChangeMethod);
  },

  removeItem: function(e){
    let id = e.target.dataset.id;

    AppDispatcher.dispatch({
      action: 'remove-card',
      id: id
    });
  },

  render: function(){
    var _this = this;
    var deckId = this.props.params.deckId;
    var deck = DeckStore.getItem(deckId);
    var cards=[];
    CardStore.getItems(deckId).forEach(function(card){
      cards.push(
        <div className="col s12 m3">
          <div className="card-panel hoverable">
            <Link to={`/cards/${card.id}`}>
              {card.title}
            </Link>
            <i className="material-icons right" onClick={ _this.removeItem } data-id={ card.id }>delete</i>
          </div>
        </div>);
    });
    return(
      <div>
        <h1>{deck.title}</h1>
        <NewCardForm deckId={deckId} size={deck.card_size} />
        <h5>Your cards</h5>
        <div className="row">{cards}</div>
      </div>);
  }
});
