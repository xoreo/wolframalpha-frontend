import React, { Component } from 'react';

import { Container, Typography } from '@material-ui/core';

import Input from './Input';
import Results from './Results';

import './MainArea.css';

// MainArea is the component containing the search bar and results.
class MainArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: ""
        }

        this.reportResults = this.reportResults.bind(this);
    }

    reportResults(res) {
        this.setState({
            results: JSON.stringify(res)
        });
        console.log(this.state.results);
        alert("changed state to " + JSON.stringify(res))
    }

    render() {
        return (
            <Container>
                <Input reportResults={this.reportResults} />
                <p>{this.state.results}</p>
            </Container>
        )
    };
}

{/* <Typography component="p">  </Typography> */}
// {/* <Results results={this.state.results} /> */}

export default MainArea;
