import React from "react";
import CardSide from "./CardSide";

export default React.createClass({
  getInitialState: function() {
      return { showReverse: false };
  },
  onClick: function() {
      this.setState({ showReverse: !this.state.showReverse });
      console.log("clicked card");
  },
  render: function(){
    if (this.state.showReverse) {
      //show reverse
      return(
        <div>
          <p onClick={this.onClick}>rotate</p>
          <CardSide contents={this.props.reverse}/>
        </div>
      );
    }
    else {
      //show front
      return(
        <div>
          <p onClick={this.onClick}>rotate</p>
          <CardSide contents={this.props.front}/>
        </div>
      );
    }
  }
});
