import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import net from './net/net'

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
export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            response: '',
            responseJSON: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        this.setState({search: event.target.value});
    }

    handleSubmit(event) {
        // alert('hi');
        console.log("SUBMIT HANDLED -------");

        fetch(
            net.endpoint('search'),
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify({
                    search_text: this.state.search
                })
            }
        ).then(res => res.json())
        .then(res => {
          if (res.error) {
            // Check no error
            this.errorAlert(res.error); // Show error

            return; // Return
          }

          this.setState({
            response: res.search_result,
            responseJSON: JSON.parse(res.search_result)
          }); // Set state

          console.log(res);

        });

        event.preventDefault();
    }
    // const classes = useStyles();
    
    
    render() {
        return (

        <Container>
            <p>hi world</p>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField label="Search box here" variant="outlined" onChange={this.handleChange} value={this.state.search} />
                <Button variant="outlined" color="primary" type="submit">Search</Button>
                <TextField label="TEST RESPONSE" variant="outlined" value={this.state.response} />
            </form>
        </Container>
        )
    };
}