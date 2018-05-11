import React, { Component } from 'react';
import Navbar from './containers/Navbar';
import StatusBar from './containers/Status';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './routes';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <StatusBar />
                <Routes />
            </div>
        );
    }
}

export default App;
