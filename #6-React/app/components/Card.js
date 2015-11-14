import React from "react";
import CardSide from "./CardSide";

var CARD_REVERSE1 = [{contentText:"hola2"},{contentText:"chao2"},{contentText:"data666"}];
var CARD_FRONT1 = [{contentText:"hola"},{contentText:"chao"},{contentText:"data"}];


var CARD = {title: "Titulo1", front:CARD_FRONT1, reverse:CARD_REVERSE1, size: "medium", id:1};

export default React.createClass({
  getInitialState: function() {
      return { showReverse: false };
  },
  onClick: function() {
      this.setState({ showReverse: !this.state.showReverse });
  },
  render: function(){
    var size = "card " + CARD.size;

    return(
      <div className="row">
        <div className="col s12 m6">
          <div className={size}>
            <div className="card-content">
              <span className="card-title">{CARD.title}</span>
              <CardSide contents={CARD.front}/>
            </div>
            <div className="card-reveal">
              <span className="card-title">{CARD.title} - Reverse<i className="material-icons right">close</i></span>
              <CardSide contents={CARD.reverse}/>
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
