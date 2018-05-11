import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import Register from '../containers/RegisterForm';
import Logout from '../containers/LogoutView';
import LoginForm from '../containers/LoginForm';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={() => <div> Welcome to App </div>} />
        <Route path="/login" component={props => <LoginForm {...props} />} />
        <Route path="/logout" component={props => <LogoutView {...props} />} />
        <Route path="/register" component={props => <RegisterForm {...props} />} />
        <Route component={() => <div> Not found </div>} />
    </Switch>
);
export default withRouter(Routes);
