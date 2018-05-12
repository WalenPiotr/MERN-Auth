import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import RegisterForm from '../containers/RegisterForm';
import LogoutView from '../containers/LogoutView';
import LoginForm from '../containers/LoginForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Protected from './containers/Protected';
import { clearStatus } from '../actions/status';
import { connect } from 'react-redux';
const Routes = ({ clearStatus }) => (
    <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/login" component={props => <LoginForm {...props} />} />
        <Route path="/logout" component={props => <LogoutView {...props} />} />
        <Route
            path="/register"
            component={props => <RegisterForm {...props} />}
        />
        <Route exact path="/protected" component={() => <Protected />} />
        <Route component={() => <NotFound />} />
    </Switch>
);

export default withRouter(Routes);
