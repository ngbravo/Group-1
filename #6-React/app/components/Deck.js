import React from "react";
import Card from "./Card";
import { Router, Route, Link } from "react-router"

var CARD_REVERSE1 = [{contentText:"hola2"},{contentText:"chao2"},{contentText:"data666"}];
var CARD_FRONT1 = [{contentText:"hola"},{contentText:"chao"},{contentText:"data"}];

var CARD_REVERSE2 = [{contentText:"hola2-2"},{contentText:"chao2-2"},{contentText:"data666-2"}];
var CARD_FRONT2 = [{contentText:"hola-2"},{contentText:"chao-2"},{contentText:"data-2"}];

var CARDS = [
  {title: "Titulo1", front:CARD_FRONT1, reverse:CARD_REVERSE1, size: "medium", id:1},
  {title: "Titulo2", front:CARD_FRONT2, reverse:CARD_REVERSE2, size: "large", id:2}
];


export default React.createClass({
  render: function(){
    var deckId = this.props.params.deckId;
    var cards=[];
    CARDS.forEach(function(card){
      cards.push(
        <div className="col s12 m3">
          <div className="card-panel teal">
            <span className="white-text">
              <Link to={`/cards/${card.id}`}>
                {card.title}
              </Link>
            </span>
          </div>
        </div>);
    });
    return(
      <div>
        <h1>DeckTitle</h1>
        <div className="row">{cards}</div>
      </div>);
  }
});
