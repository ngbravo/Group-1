import React from "react";
import { Router, Route, Link } from "react-router";
import DeckStore from "../stores/DeckStore";
import NewDeckForm from "./NewDeckForm";
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
      <div>
        <a key={deck.id} href={`#/decks/${deck.id}`} className="collection-item">{deck.title}</a>
        <button onClick={ _this.removeItem } data-id={ deck.id }>×</button>
      </div>);
    });

    return(
      <div>
        <h1 className="header">Decks</h1>
        <div className="collection">{decks}</div>
        <NewDeckForm />
      </div>
    );
  }
});
