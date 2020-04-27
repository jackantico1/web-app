import React, { Component } from 'react';
import './Hero.css';
import { Button } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; 

class Hero extends Component {

  state = {
    numOfHits: 0
  }

  handleButtonHit = () => {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
      console.log(snapshot)
      var hitNum = (snapshot.val() && snapshot.val().numOfHits) || 0;
      this.setState({numOfHits: hitNum});
    });  
    firebase.database().ref('users/' + userId).set({
      numOfHits: this.state.numOfHits
    });
  }

  signOutPressed = () => {
    firebase.auth().signOut().then((user) => {
      if (user == null) {
        this.props.handler(false)
      }
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  render() {
    return (
      <div className="hero">
        <h1>Button Hits: {this.state.numOfHits}</h1>
        <Button onClick={this.handleButtonHit}>Button</Button>
        <Button onClick={this.signOutPressed}>Sign Out</Button>
      </div>
    );
  }
}

export default Hero;