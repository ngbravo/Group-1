import React from "react";
import Card from "./Card";
import { Router, Route, Link } from "react-router"
import ReactDOM from 'react-dom';
import CardStore from "../stores/CardStore";
import DeckStore from "../stores/DeckStore";
import CardForm from "./CardForm";
import AppDispatcher from '../dispatcher/AppDispatcher';


export default React.createClass({

  getInitialState: function() {
      return {searchedBy: null};
  },
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
  onSearchChange: function(e) {
    var search = document.getElementById('icon_prefix').value;
    if(search != ""){
      this.state = {searchedBy: search};
    }
    else {
      this.state = {searchedBy: null};
    }
    this.forceUpdate();
  },

  render: function(){
    var _this = this;
    var deckId = this.props.params.deckId;
    var deck = DeckStore.getItem(deckId);
    var cards=[];

    var storedCards = CardStore.getItems(deckId);
    storedCards.sort(function(a, b){
      if (a.position < b.position)
        return -1;
      if (a.position > b.position)
        return 1;
      return 0;
    });

    var state = this.state;
    if(this.state.searchedBy != null){
      storedCards = storedCards.filter(function(card){
        var inTitle = card.title.indexOf(state.searchedBy) > -1;
        var inBack = card.back.indexOf(state.searchedBy) > -1;
        var inFront = card.front.indexOf(state.searchedBy) > -1;
        return inTitle || inBack || inFront;
      });
    }


    storedCards.forEach(function(card){
      var shouldBeAdded = true;
      cards.push(
        <div className="col s12 m3">
          <div className="card-panel hoverable">
            #{card.position} -&nbsp;
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
        <CardForm deckId={deckId} size={deck.card_size} mode="new"/>
        <h5>Your cards</h5>
          <div className="input-field col s6">
            <i className="material-icons prefix" onClick={this.onSearchChange}>search</i>
            <input id="icon_prefix" type="text"/>
            <label for="icon_prefix">Search</label>
          </div>
        <div className="row">{cards}</div>
      </div>);
  }
});
