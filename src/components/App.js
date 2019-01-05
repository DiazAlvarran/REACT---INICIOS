import React, { Component } from 'react';
import logo from './Global/images/logo.svg';
import './Global/css/Styles.css';

// Components
import Header from './Global/Header';
import Container from './Global/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
