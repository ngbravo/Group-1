import React from "react";
import { Router, Route, Link } from 'react-router';
import DeckList from "../components/DeckList";
import Deck from "../components/Deck";
import Card from "../components/Card"
import CardForm from "../components/CardForm"

export default React.createClass({
  render: function(){
    return(
      <Router>
        <Route path="/" component={DeckList}/>
        <Route path="/decks/:deckId" component={Deck}/>
        <Route path="/cards/:cardId" component={Card}/>
        <Route path="/cards/:cardId/edit" component={CardForm}/>
      </Router>
    );
  }
});
