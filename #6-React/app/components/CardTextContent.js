import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="content-text">
        <p>
          {this.props.textContent}
        </p>
      </div>
    );
  }
});
