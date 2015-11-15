import React from "react";
import Card from "./Card";
import { Router, Route, Link } from "react-router"
import CardStore from "../stores/CardStore";
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

  render: function(){
    var _this = this;
    var deckId = this.props.params.deckId;
    var cards=[];
    CardStore.getItems(deckId).forEach(function(card){
      cards.push(
        <div className="col s12 m3">
          <div className="card-panel">
            <Link to={`/cards/${card.id}`}>
              {card.title}
            </Link>
          </div>
        </div>);
    });
    return(
      <div>
        <h1>DeckTitle</h1>
        <div className="row">{cards}</div>
        <NewCardForm deckId={deckId} />
      </div>);
  }
});
