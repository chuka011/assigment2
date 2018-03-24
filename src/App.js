import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
      userInput: "",
      strArr: []
  };

   charInputHandler = (event) => {
    const str = event.target.value;
    this.setState({
      userInput: str,
      strArr: str.split('')
    })
  }

  deleteCharHandler = (index) => {
    const strArr = [...this.state.strArr];
    strArr.splice(index, 1);
    const str = strArr.join('');
    this.setState({
      userInput: str,
      strArr: strArr
    });
  }
  render() {

    const CharComponentArr =
      this.state.userInput.split('').map( (e,index) => {
        return <Char
          ch={e}
          key={index}
          click={() => this.deleteCharHandler(index)}/>
      });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.charInputHandler}
          value={this.state.userInput}/>
        <p>Number of chars: {this.state.userInput.length}</p>
        <Validation len={this.state.userInput.length}/>
        {CharComponentArr}
      </div>
    );
  }
}

export default App;
