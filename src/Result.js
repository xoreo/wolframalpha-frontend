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
                <Paper>
                    <Typography variant="h5">LABEL: {this.props.label}</Typography>
                    <Typography variant="h5">URL: {this.props.url}</Typography>
                    {/* <img src={this.state.url} /> */}
                </Paper>
            </Container>
        )
    };
}

Result.propTypes = {
    label: PropTypes.object,
    url: PropTypes.object
}

export default Result;
