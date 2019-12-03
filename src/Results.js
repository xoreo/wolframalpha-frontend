import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import Result from './Result'
import './Results.css';

// Results is the component containing the search results
class Results extends Component {
    // createResults returns a list of data necessary to form
    // Result components from the results.
    createResults() {
        let results = [];

        // Loop through all results
        for (let i = 0; i < this.props.results.length; i++) {
            let result = this.props.results[i]; // Get the result

            // Get the url and label
            let url = result['url'];
            let label = result['label'];

            // Make a new Result component with the data 
            results.push(
                {
                    label: label,
                    url: url
                }
            );
        }

        return results;
    }

    render() {
        return (
            <Container>
                <Typography type="h5">Results</Typography>
                {
                    // Render the Result components
                    this.createResults()
                    .map(
                        result => <Result label={result['label']} url={result['url']} />
                    )
                }
            </Container>
        )
    };
}

// Set prop types
Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object)
}

export default Results;