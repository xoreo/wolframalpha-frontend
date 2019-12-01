import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import './Input.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

// Input is the component containing the search bar.
export default function Input() {
    const classes = useStyles();

    return (
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField label="Search box here" variant="outlined" />
                <Button variant="outlined" color="primary">Search</Button>
            </form>
        </Container>
    );
}