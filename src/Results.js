import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import Result from './Result'
import './Results.css';

// Results is the component containing the search results
class Results extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // createResults returns a list of Result components from the results.
    createResults() {
        let results = [];
        console.log(JSON.stringify(this.props.results));

        for (let i = 0; i < this.props.results.length; i++) {
            let result = this.props.results[i];
            console.log("result: \n\n" + JSON.stringify(result));
            // Get the url and label
            let url = result['url'];
            let label = result['label'];
            console.log(`\n\nurl: ${url}\nlabel: ${label}\n\n`)

            // Make a new Result component with the data 
            results.push(
                {
                    label: label,
                    url: url
                }
            );
        }
        
        console.log(results);

        return results;
    }

    render() {
        return (
            <Container>
                {/* <Result result={{url: "hiurl", label:"hi"}}/> */}
                {this.createResults().map(
                    result => <Result label={result['label']} url={result['url']} />
                )}
            </Container>
        )
    };
}

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object)
}

export default Results;