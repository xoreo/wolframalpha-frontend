import React, { Component } from 'react';

import { Container } from '@material-ui/core';

import Input from './Input';
import Results from './Results';

import './MainArea.css';

// MainArea is the component containing the search bar and results.
class MainArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }

        // Bind to this so that the child can call reportResults.
        this.reportResults = this.reportResults.bind(this);
    }

    // reportResults sets the state to the results from the Input component.
    reportResults(res) {
        this.setState({
            results: res
        });
    }

    render() {
        return (
            <Container>
                <Input reportResults={this.reportResults} />
                <Results results={this.state.results} />
            </Container>
        )
    };
}

export default MainArea;