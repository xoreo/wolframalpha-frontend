import React, { Component } from 'react';

import { Container, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Results.css';

// Results is the component containing the search results
class Results extends Component {
    render() {
        return (
            <Container>
                <Paper>
                    <Typography component="p">
                        {this.props.results}
                    </Typography>
                </Paper>
            </Container>
        )
    };
}

Results.propTypes = {
    results: PropTypes.array
}

export default Results;