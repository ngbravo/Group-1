import React from "react";
import Card from "./Card";

export default React.createClass({
  render: function(){
    var cards=[];
    this.props.cards.forEach(function(card){
      cards.push(<Card
        front={card.front}
        reverse={card.reverse}
        title={card.title}
        size={card.size}
        thumbnail={card.thumbnail}/>);
    });

    return(<div>{cards}</div>);
  }
});
