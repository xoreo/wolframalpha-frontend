import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Header from './Header';
import History from './History';
import MainArea from './MainArea';

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
                        <MainArea />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
