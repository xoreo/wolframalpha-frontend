import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import SearchBar from './SearchBar';
import Results from './Results';

import './MainArea.css';

// MainArea is the component containing the search bar and results.
class MainArea extends Component {
    render() {
        return (
            <Container>
                <SearchBar />
                <Results />
            </Container>
        )
    };
}

export default MainArea;
