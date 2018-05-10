import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, Switch, withRouter } from 'react-router';

import { login, logout, register } from '../actionCreators';
import { connect } from 'react-redux';

class Main extends Component {
    handleLogout = () => {
        this.props.logout();
        this.props.history.push('/');
    };

    handleLogin = data => {
        this.props.login(data);
        this.props.history.push('/');
    };

    handleRegister = data => {
        this.props.register(data);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <div> Welcome to App </div>}
                    />
                    <Route
                        path="/login"
                        component={props => (
                            <LoginForm
                                {...props}
                                handleLogin={this.handleLogin}
                            />
                        )}
                    />
                    <Route
                        path="/logout"
                        component={props => (
                            <Logout
                                {...props}
                                handleLogout={this.handleLogout}
                            />
                        )}
                    />
                    <Route
                        path="/register"
                        component={props => (
                            <RegisterForm
                                {...props}
                                handleRegister={this.handleRegister}
                            />
                        )}
                    />
                    <Route component={() => <div> Not found </div>} />
                </Switch>
            </div>
        );
    }
}

Main.propTypes = {};

function mapStateToProps(reduxState) {
    return {
        authenticated: reduxState.authenticated
    };
}
export default withRouter(
    connect(mapStateToProps, { login, logout, register })(Main)
);

class Logout extends Component {
    constructor(props) {
        super(props);
        this.props.handleLogout();
    }
    render() {
        return <div>Logging out...</div>;
    }
}

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleLogin({
            ...this.state
        });
        this.setState({
            username: '',
            password: ''
        });
    };

    handleChange = field => event => {
        const value = event.target.value;
        this.setState(previousState => {
            const newState = { ...previousState };
            newState[field] = value;
            return newState;
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Login Form </label>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                />
                <input
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange('password')}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

class RegisterForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleRegister(this.state);
        this.setState({
            username: '',
            password: ''
        });
    };

    handleChange = field => event => {
        const value = event.target.value;
        this.setState(previousState => {
            const newState = { ...previousState };
            newState[field] = value;
            return newState;
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Register Form </label>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                />
                <input
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange('password')}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
