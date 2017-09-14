import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Planets from './Planets.js'
import PilotForm from './PilotForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://i.pinimg.com/736x/af/a1/20/afa120fce3d0600d499e80088d0a5b8e--free-cliparts-space-images.jpg" className="App-logo" alt="logo" />
         <PilotForm />
        </div>
        <Planets />
      </div>
    );
  }
}

export default App;
