import React, { Component } from 'react';
import './App.css';

class App extends Component {
//   propTypes= {
//     title: React.PropTypes.string.isRequired,
//   }
//   getDefaultProps () {
//     return {
//       title : 'Hello World'
//     };
//   }
  render() {
    return (
      <h1> {this.props.title} </h1>
    );
  }
}

export default App;
