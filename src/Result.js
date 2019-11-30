import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import './Result.css';

// Result is the component containing a singular search result
class Result extends Component {
    render() {
        return (
            <Container>
                <h3>{this.state.label}</h3>
                <img src={this.state.url} />
            </Container>
        )
    };
}

export default MainArea;
