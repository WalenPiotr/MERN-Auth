import React, { Component } from 'react';

import { Route, Switch, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Register from './Register';
import Logout from './Logout';
import Login from './Login';

class Main extends Component {
    render() {
        console.log(this.props.authenticated)
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
                        component={props => <Login {...props} />}
                    />
                    <Route
                        path="/logout"
                        component={props => <Logout {...props} />}
                    />
                    <Route
                        path="/register"
                        component={props => <Register {...props} />}
                    />
                    <Route
                        path="/private"
                        component={
                            this.props.authenticated
                                ? props => <div> you see protected content</div>
                                : props => <Redirect to="/login" />
                        }
                    />

                    <Route component={() => <div> Not found </div>} />
                </Switch>
            </div>
        );
    }
}

const mapPropsToState = function(state) {
    return {
        authenticated: state.auth.authenticated
    };
};

export default withRouter(connect(mapPropsToState)(Main));
