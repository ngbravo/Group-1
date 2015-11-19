import React from "react";
import { Router, Route, Link } from "react-router"
import CardSide from "./CardSide";
import CardStore from "../stores/CardStore";


export default React.createClass({

  exportPdf: function(){
    var card = CardStore.getItem(this.props.params.cardId);
    var doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(20,20, card.title);
    doc.setFontSize(20);
    doc.text(20,40, card.front);
    doc.addPage();
    doc.setFontSize(30);
    doc.text(20,20, card.title + ' - Reverse');
    doc.setFontSize(20);
    doc.text(20,40, card.back);
    doc.save(card.title + '.pdf');
  },

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
                <a onClick={this.exportPdf}>Export PDF</a>
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
                 <a onClick={this.exportPdf}>Export PDF</a>
                 <Link to={`/cards/${card.id}/edit`}>Edit</Link>
                 <a key={card.deckId} href={`#/decks/${card.deckId}`} className="right">Close</a>
               </div>
             </div>
          </div>
        </div>
      );
    }
  }
});
