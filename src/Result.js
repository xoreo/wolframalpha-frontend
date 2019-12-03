import React, { Component } from 'react';

import { Container, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Result.css';

// Result is the component containing a singular search result
class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Paper className="Result">
                    <Typography variant="p">{this.props.label}</Typography>
                    <br />
                    <img src={this.props.url} />
                </Paper>
            </Container>
        )
    };
}

// Set prop types
Result.propTypes = {
    label: PropTypes.object,
    url: PropTypes.object
}

export default Result;
