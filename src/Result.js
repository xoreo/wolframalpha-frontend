import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import './Result.css';
import { Typography } from '@material-ui/core';

// Result is the component containing a singular search result
class Result extends Component {
    constructor(props) {

    }
    
    render() {
        return (
            <Container>
                <Typography variant="h3">LABEL: {this.state.label}</Typography>
                <Typography variant="h3">URL: {this.state.url}</Typography>
                {/* <img src={this.state.url} /> */}
            </Container>
        )
    };
}

export default MainArea;
