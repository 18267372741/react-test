import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick() {
    this.refs.myTextInput.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
        <span>666</span>
      </div>
    );
  }
}

export default App;
