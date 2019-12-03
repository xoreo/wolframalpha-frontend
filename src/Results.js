import React, { Component } from 'react';

import { Container, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

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
        <Paper>
            <Typography component="p">
                {this.props.results}
            </Typography>
        </Paper>
    }

    render() {
        return (
            <Container>
                {this.createResults}
            </Container>
        )
    };
}

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object)
}

export default Results;