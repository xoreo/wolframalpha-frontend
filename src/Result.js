import React, { Component } from 'react';

import { Container, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Result.css';

// Result is the component containing a singular search result
class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: this.props.result.label,
            url: this.props.result.url,
        }
    }

    render() {
        return (
            <Container>
                <Paper>
                    <Typography variant="h3">LABEL: {this.state.label}</Typography>
                    <Typography variant="h3">URL: {this.state.url}</Typography>
                    {/* <img src={this.state.url} /> */}
                </Paper>
            </Container>
        )
    };
}

Result.propTypes = {
    result: PropTypes.object
}

export default Result;
