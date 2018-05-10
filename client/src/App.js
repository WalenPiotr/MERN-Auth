import React, { Component } from 'react';
import Main from './containers/Main';
import Navbar from './containers/Navbar';
import Errorbar from './containers/Errorbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Errorbar />
                <Navbar />
                <Main />
            </div>
        );
    }
}

export default App;
