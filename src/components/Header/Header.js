import React, { Component } from 'react';
import './Header.css';

class Header extends Component { 

  render() {
    return (
      <div className="header">          
          <h1 className="logoH1">Retain</h1>
          <h2 className="logoH2">Protect Your Teeth</h2>
      </div>
    );
  }
}

export default Header;