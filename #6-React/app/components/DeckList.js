import React from "react";
import { Router, Route, Link } from "react-router";
import DeckStore from "../stores/DeckStore";
import DeckForm from "./DeckForm";
import AppDispatcher from '../dispatcher/AppDispatcher';

// Method to retrieve state from Stores
let getListState = function(){
  return {
    items: DeckStore.getItems()
  };
}

export default React.createClass({

  onChangeMethod: function(){
    this.setState(getListState());
  },

  componentDidMount: function(){
    DeckStore.addChangeListener(this.onChangeMethod);
  },

  componentWillUnmount: function(){
    DeckStore.removeChangeListener(this.onChangeMethod);
  },

  removeItem: function(e){
    let id = e.target.dataset.id;

    AppDispatcher.dispatch({
      action: 'remove-deck',
      id: id
    });
  },

  render: function(){
    let _this = this;
    var decks =[];
    DeckStore.getItems().forEach(function(deck){
      decks.push(
      <div className="collection-item">
        <a key={deck.id} href={`#/decks/${deck.id}`}>{deck.title}</a>
        <i className="material-icons right" onClick={ _this.removeItem } data-id={ deck.id }>delete</i>
      </div>);
    });

    return(
      <div>
        <h1 className="header">Decks</h1>
        <DeckForm />
        <h5>Your decks</h5>
        <div className="collection">{decks}</div>
      </div>
    );
  }
});
