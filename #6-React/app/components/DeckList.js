import React from "react";
import { Router, Route, Link } from "react-router";
import DeckStore from "../stores/DeckStore";
import NewDeckForm from "./NewDeckForm";

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

  render: function(){
    var decks =[];
    DeckStore.getItems().forEach(function(deck){
      decks.push(<a key={deck.id} href={`#/decks/${deck.id}`} className="collection-item">{deck.title}</a>);
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
