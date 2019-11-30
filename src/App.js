import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Header from './Header'
import History from './History'
import './App.css';

// App is the main component of the entire app.
class App extends Component {
    render() {
        return (
            
            <div className="App">
                <Header />
                <Grid container spacing={2}>
                    <Grid item xs>
                        <History />
                    </Grid>
                    <Grid item xs={10}>
                        <Paper className="App-border">Search bar</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
