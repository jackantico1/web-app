import React, { Component } from 'react';
import './Welcome.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; 

var config = {
  apiKey: "AIzaSyDr6fl0pmKklLr7DDAeS7p3ANp9MjJYobA",
  authDomain: "web-app-7a7a6.firebaseapp.com",
  databaseURL: "https://web-app-7a7a6.firebaseio.com/",
  storageBucket: "web-app-7a7a6.appspot.com"
};
firebase.initializeApp(config);

class Welcome extends Component {

  state = {
    email: "",
    password: ""
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  signInPressed = () => {
    console.log("Sign in pressed")
  }

  signUpPressed = () => {
    console.log("Sign up pressed")
    let email = this.state.email
    let password = this.state.password
    console.log("email is " + email)
    console.log("password is " + password)
    console.log("Will try to create user now")
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
  }

  render() {
    return (
      <div className="welcome">
        <div className="welcomeContainer1">
          <TextField id="outlined-basic" label="Email" variant="outlined" value={this.state.email} onChange={this.handleEmailChange}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <div className="welcomeContainer2">
          <Button variant="contained" className="welcomeButton" onClick={this.signInPressed}>Sign In</Button>
          <Button variant="contained" className="welcomeButton" onClick={this.signUpPressed}>Sign Up</Button>
        </div>
      </div>
    );
  }
}

export default Welcome;