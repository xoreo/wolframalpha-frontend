import React, { Component } from 'react';

import Box from '@material-ui/core/Box';

import logo from './img/logo.svg'
import './Header.css';

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