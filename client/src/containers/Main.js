import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router';

import Register from './Register';
import Logout from './Logout';
import Login from './Login';

class Main extends Component {
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
                    <Route component={() => <div> Not found </div>} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);
