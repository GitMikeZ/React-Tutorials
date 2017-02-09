
import React, { Component } from 'react';
//import logo from './logo.svg';

/*
import './App.css';

class App extends Component {
  render() {
    return (
        <h1>Hello, world!</h1>
    );
  }
}

export default App;
*/
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
