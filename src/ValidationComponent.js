import React, { Component } from 'react';

class ValidationComponent extends Component {
  render() {
    var paragraph =
        this.props.len <= 5 ?
          <p>Text too short </p> :
          <p>Text just enough </p>;
    return (
      <div>
        {paragraph}
      </div>
    );
  }
}

export default ValidationComponent;
