import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
}

export default App;
