import React from "react"
import ReactDOM from "react-dom";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import Card from "./components/Card"
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'


var CARD_REVERSE1 = [{contentText:"hola2"},{contentText:"chao2"},{contentText:"data666"}];
var CARD_FRONT1 = [{contentText:"hola"},{contentText:"chao"},{contentText:"data"}];

var CARD_REVERSE2 = [{contentText:"hola2-2"},{contentText:"chao2-2"},{contentText:"data666-2"}];
var CARD_FRONT2 = [{contentText:"hola-2"},{contentText:"chao-2"},{contentText:"data-2"}];

var CARDS = [
  {title: "Titulo1", front:CARD_FRONT1, reverse:CARD_REVERSE1, size: "medium", thumbnail: true},
  {title: "Titulo2", front:CARD_FRONT2, reverse:CARD_REVERSE2, size: "large", thumbnail: false}
];

/*ReactDOM.render(
  <div className="collection">
    <Deck cards={CARDS} title="Le Deck" fullView={true}/>
  </div>,
  document.getElementById("deck")
);*/

render((
  <Router>
    <Route path="/" component={DeckList}>
    </Route>
    <Route path="/decks/:deckId" component={Deck}>
    </Route>
    <Route path="/cards/:cardId" component={Card}>
    </Route>
  </Router>
), document.getElementById("body"));
