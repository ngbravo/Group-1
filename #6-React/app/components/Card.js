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

    if(this.props.thumbnail == true){
      return(
        <div className="col s12 m3">
          <div className="card-panel teal">
            <span className="white-text">
              {this.props.title}
            </span>
          </div>
        </div>
      );
    }
    else {
      var size = "card " + this.props.size;

      return(
        <div className="row">
          <div className="col s12 m6">
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
        </div>

      );
    }
  }
});
