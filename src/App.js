import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent'
class App extends Component {
  state = {
      str: "",
      numberOfChars: 0
  };

   charInputHandler = (event) => {
    const str = event.target.value;
    this.setState({
      str: str,
      numberOfChars: str.length
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.charInputHandler} value={this.state.str}/>
        <p>Number of chars: {this.state.numberOfChars}</p>
        <ValidationComponent len={this.state.numberOfChars}/>
      </div>
    );
  }
}

export default App;
