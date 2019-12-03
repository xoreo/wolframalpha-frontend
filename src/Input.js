import React, { Component } from 'react';

import { TextField, Button, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import net from './net/net'
import './Input.css';

// Input is the component containing the search bar.
export default class Input extends Component {
    errorAlert = message => toast.error(message); // Error reporting

    constructor(props) {
        super(props);

        // Initialize the state values
        this.state = {
            search: '',
            response: '',
            responseJSON: {}
        };

        // Declare the methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reportResults = this.props.reportResults.bind(this);
        
    }
    
    // handleChange is executed when the textbox is changed.
    handleChange(event) {
        // Update the state to the text in the textbox
        this.setState({search: event.target.value});
    }

    // handleSubmit calls the API with the search input and
    // updates the state accordingly.
    handleSubmit(event) {
        // Call the API
        fetch(
            net.endpoint('search'), // Get the endpoint
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain' // For CORS reasons
                },
                body: JSON.stringify({
                    search_text: this.state.search
                })
            }
        ).then(res => res.json()) // Handle the Promise
        .then(res => {
            if (res.error) {
                // Check no error
                this.errorAlert(res.error);
                return;
            }

            // Update the state with the response
            this.setState({
                response: res.search_result,
                responseJSON: JSON.parse(res.search_result)
            });

            // Send the results up to the parent
            this.reportResults(this.state.responseJSON);
        });

        event.preventDefault(); // Prevent the page from reloading
    }
    
    render() {
        return (
            <Container>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField label="Search box here" variant="outlined"
                        onChange={this.handleChange} value={this.state.search} />
                    <Button variant="outlined" color="primary"
                        type="submit">Search</Button>
                    <TextField label="TEST RESPONSE" variant="outlined"
                        value={this.state.response} />
                </form>
                <ToastContainer />
            </Container>
        )
    };
}

Input.propTypes = {
    reportResults: PropTypes.func
}