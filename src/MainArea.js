import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import Input from './Input';
import Results from './Results';

import './MainArea.css';

// MainArea is the component containing the search bar and results.
class MainArea extends Component {
    render() {
        return (
            <Container>
                <Input />
                <Results />
            </Container>
        )
    };
}

export default MainArea;
