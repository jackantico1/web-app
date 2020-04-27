import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Hero from './components/Hero/Hero';
import firebase from 'firebase/app';
import 'firebase/auth';

class App extends Component {

  state = {
    loggedIn: false
  }

  handler = (val) => {
    this.setState({
      loggedIn: val
    })
  }

  renderContent = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      return <Hero handler={this.handler}/>
    } else {
      return <Welcome handler={this.handler}/>
    }
  }

  render() {
    return (
      <div className="app">
        <div className="appContainerOne">
          <Header/>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
