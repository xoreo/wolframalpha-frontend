import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Header from './Header'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Grid className="App-border" item xs={12}>
                        <Header />
                    </Grid>
                    <Grid className="App-border" item xs={6}>
                        xs=6
                    </Grid>
                    <Grid className="App-border" item xs={6}>
                        xs=6
                    </Grid>
                    <Grid className="App-border" item xs={3}>
                        xs=3
                    </Grid>
                    <Grid className="App-border" item xs={3}>
                        xs=3
                    </Grid>
                    <Grid className="App-border" item xs={3}>
                        xs=3
                    </Grid>
                    <Grid className="App-border" item xs={3}>
                        xs=3
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
