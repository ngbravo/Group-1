import React from "react";
import { Router, Route, Link } from "react-router"

var DECKS = [{id:1,title:"deck1"},{id:2,title:"deck2"}];

export default React.createClass({
  render: function(){
    var decks=[];
    DECKS.forEach(function(deck){
      decks.push(<a href={`#/deck/${deck.id}`} className="collection-item">{deck.title}</a>);
    });

    return(
      <div>
        <h1 className="header">Decks</h1>
        <div className="collection">{decks}</div>
      </div>
    );
  }
});
