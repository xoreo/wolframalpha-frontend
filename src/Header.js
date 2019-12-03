import React, { Component } from 'react';

import Box from '@material-ui/core/Box';

import logo from './img/logo.png'
import './Header.css';

// Header is the header component of the app.
class Header extends Component {
  render() {
    return (
      <Box>
        <img className="Header-logo" src={logo} alt="wolframalpha logo" />
      </Box>
    );
  }
}

export default Header;