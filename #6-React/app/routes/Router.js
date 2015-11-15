import React from "react";
import { Router, Route, Link } from 'react-router';
import DeckList from "../components/DeckList";
import Deck from "../components/Deck";
import Card from "../components/Card"

export default React.createClass({
  render: function(){
    return(
      <Router>
        <Route path="/" component={DeckList}>
        </Route>
        <Route path="/decks/:deckId" component={Deck}>
        </Route>
        <Route path="/cards/:cardId" component={Card}>
        </Route>
      </Router>
    );
  }
});
