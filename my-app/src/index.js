import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// var HelloMessage = React.createClass({
//   render: function() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// });
 
// ReactDOM.render(
//   <HelloMessage name="Runoob" />,
//   document.getElementById('example')
// );



/*var WebSite = React.createClass({
  render: function() {
    return (
      <div>
        <Name name={this.props.name} />
        <Link site={this.props.site} />
      </div>
    );
  }
});
 
var Name = React.createClass({
  render: function() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
});
 
var Link = React.createClass({
  render: function() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
});
 
ReactDOM.render(
  <WebSite name="菜鸟教程" site=" http://www.runoob.com" />,
  document.getElementById('example')
);*/


var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

ReactDOM.render(<Input/>, document.body);
registerServiceWorker();
