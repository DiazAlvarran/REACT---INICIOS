import React, { Component } from 'react';
import logo from './Global/images/logo.svg';
import './Global/css/App.css';

// Components
import Header from './Global/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
