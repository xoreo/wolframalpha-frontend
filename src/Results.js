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
        console.log(results);

        for (let i = 0; i < this.props.results.length; i++) {
            // Get the url and label
            let url = results[i]['url'];
            let label = results[i]['label'];

            // Make a new Result component with the data 
            results.push(
                <Result label={label} url={url} />
            );
        }
        
        console.log(results);

        return results;
    }

    render() {
        return (
            <Container>
                {/* <Result result={{url: "hiurl", label:"hi"}}/> */}
                {this.createResults}
            </Container>
        )
    };
}

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object)
}

export default Results;