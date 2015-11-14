import React from "react";
import Card from "./Card";

export default React.createClass({
  render: function(){
    if (this.props.fullView) {
      var cards=[];
      this.props.cards.forEach(function(card){
        cards.push(
          <Card
            front={card.front}
            reverse={card.reverse}
            title={card.title}
            size={card.size}
            thumbnail={card.thumbnail}/>);
      });
      return(<div className="row">{cards}</div>);
    }

    else {
      return(<a href="#!" className="collection-item">{this.props.title}</a>);
    }


  }
});
