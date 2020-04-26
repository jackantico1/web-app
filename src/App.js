import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="appContainerOne">
          <Header/>
        </div>
        <Welcome/>
      </div>
    );
  }
}

export default App;
