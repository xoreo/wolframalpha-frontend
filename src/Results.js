import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import Result from './Result'
import './Results.css';

// Results is the component containing the search results
class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: this.props.results
        }
    }

    createResults() {
        alert(this.state.results);
        let results = [];
        for (let result in this.state.results) {
            results.push(
                // <Result result={result} />
                // {result}
            );
        }
        console.log(results);

        return results;
    }

    render() {
        return (
            <Container>
                <Result result={{url: "hiurl", label:"hi"}}/>
                {/* {this.createResults} */}
            </Container>
        )
    };
}

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object)
}

export default Results;