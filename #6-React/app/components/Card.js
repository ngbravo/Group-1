import React from "react";
import CardSide from "./CardSide";

export default React.createClass({
  getInitialState: function() {
      return { showReverse: false };
  },
  onClick: function() {
      this.setState({ showReverse: !this.state.showReverse });
  },
  render: function(){
    if (this.state.showReverse) {
      var side = this.props.reverse;
    }
    else {
      var side = this.props.front;
    }
    console.log(this.props);

    return(
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.title}</span>
          <CardSide contents={side}/>
        </div>
        <div className="card-action">
          <a href="#" onClick={this.onClick}>Rotate</a>
        </div>
      </div>
    );
  }
});
