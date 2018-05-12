import React, { Component } from 'react';
import Navbar from './containers/Navbar';
import StatusBar from './containers/StatusBar';
import Routes from './routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as auth from './actions/auth';
import * as status from './actions/status';

class App extends Component {
    componentDidMount() {
        this.props.isLogged();
    }

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

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        isLogged: () => {
            const request = {
                type: 'cors',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            dispatch(status.clearStatus());

            fetch('/api/auth/user/', request)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error.message);
                    }
                    if (data.user) {
                        dispatch(auth.login(data.user));
                    }
                })
                .catch(error => dispatch(auth.logout()));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
