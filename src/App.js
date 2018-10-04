import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Homer from "./Homer";

class App extends Component {
  render() {
    return (

      <section>
        <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
          <Homer working={false} />
        </div>
      </section>
    );
  }
}

export default App;
