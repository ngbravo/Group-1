import React from "react";
import { Router, Route, Link } from "react-router"
import CardSide from "./CardSide";
import CardStore from "../stores/CardStore";


export default React.createClass({
  render: function(){
    var card = CardStore.getItem(this.props.params.cardId);
    var size = "card " + card.size;

    if(card.image == ""){
      return(
        <div className="row">
          <div className="col s12 m6">
            <div className={size}>
              <div className="card-content">
                <span className="card-title">{card.title}</span>
                <CardSide content={card.front}/>
              </div>
              <div className="card-reveal">
                <span className="card-title">{card.title} - Reverse<i className="material-icons right">close</i></span>
                <CardSide content={card.back}/>
              </div>
              <div className="card-action">
                <a className="activator">View reverse</a>
                  <Link to={`/cards/${card.id}/edit`}>Edit</Link>
                <a key={card.deckId} href={`#/decks/${card.deckId}`} className="right">Close</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="row">
          <div className="col s12 m6">
            <div className={size}>
               <div className="card-image">
                 <img src={card.image}/>
               </div>
               <div className="card-content">
                 <span className="card-title">{card.title}</span>
                 <CardSide content={card.front}/>
               </div>
               <div className="card-reveal">
                 <span className="card-title">{card.title} - Reverse<i className="material-icons right">close</i></span>
                 <CardSide content={card.back}/>
               </div>
               <div className="card-action">
                 <a className="activator">View reverse</a>
                 <a href="#">Edit</a>
                 <a key={card.deckId} href={`#/decks/${card.deckId}`} className="right">Close</a>
               </div>
             </div>
          </div>
        </div>
      );
    }
  }
});
