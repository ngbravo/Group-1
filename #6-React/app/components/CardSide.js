import React from "react";
import CardTextContent from "./CardTextContent"

export default React.createClass({
  render: function(){
    var contents=[];
    this.props.contents.forEach(function(content){
      contents.push(<CardTextContent textContent={content.contentText} />);
    });

    return(<div>{contents}</div>);
  }
});
