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
      var side = this.props.reverse;
    }
    else {
      var side = this.props.front;
    }

    return(
      <div className="card">
        <div className="card-content">
          <span className="card-title">Card Title</span>
          <CardSide contents={side}/>
        </div>
        <div className="card-action">
          <a href="#" onClick={this.onClick}>Rotate</a>
        </div>
      </div>
    );
  }
});
