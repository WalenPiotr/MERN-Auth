import React, { Component } from 'react';
import Main from './containers/Main';
import Navbar from './containers/Navbar';
import StatusBar from './containers/Status';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class App extends Component {
    render() {
        return (
            <div className="App">
                <StatusBar />
                <Navbar />
                <Main />
                <Link to="/private">private</Link>
            </div>
        );
    }
}

export default App;
