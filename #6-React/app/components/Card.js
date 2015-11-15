import React from "react";
import CardSide from "./CardSide";
import CardStore from "../stores/CardStore";

var CARD_REVERSE1 = {content:"hola2"};
var CARD_FRONT1 = {content:"hola"};


var CARD = {title: "Titulo1", front:CARD_FRONT1, reverse:CARD_REVERSE1, size: "medium", id:1};

export default React.createClass({
  getInitialState: function() {
      return { showReverse: false };
  },
  onClick: function() {
      this.setState({ showReverse: !this.state.showReverse });
  },
  render: function(){
    var card = CardStore.getItem(this.props.params.cardId);
    var size = "card " + card.size;

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
              <a href="#">Edit</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
});
