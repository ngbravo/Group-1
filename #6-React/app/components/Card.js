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
    var size = "card " + this.props.size;

    return(
      <div class="col s12 m6">
        <div className={size}>
          <div className="card-content">
            <span className="card-title">{this.props.title}</span>
            <CardSide contents={this.props.front}/>
          </div>
          <div className="card-reveal">
            <span className="card-title">{this.props.title} - Reverse<i className="material-icons right">close</i></span>
            <CardSide contents={this.props.reverse}/>
          </div>
          <div className="card-action">
            <a href="#" className="activator">View reverse</a>
            <a href="#">Edit</a>
          </div>
        </div>
      </div>
    );
  }
});
