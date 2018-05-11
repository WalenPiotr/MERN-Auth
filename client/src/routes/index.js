import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import RegisterForm from '../containers/RegisterForm';
import LogoutView from '../containers/LogoutView';
import LoginForm from '../containers/LoginForm';
import { clearStatus } from '../actions/status';
import { connect } from 'react-redux';
class Routes extends React.Component {
    componentDidMount() {
        clearStatus();
    }
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => <div> Welcome to App </div>}
                />
                <Route
                    path="/login"
                    component={props => <LoginForm {...props} />}
                />
                <Route
                    path="/logout"
                    component={props => <LogoutView {...props} />}
                />
                <Route
                    path="/register"
                    component={props => <RegisterForm {...props} />}
                />
                <Route component={() => <div> Not found </div>} />
            </Switch>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { authorized: auth.authorized };
};

const mapDispatchToProps = dispatch => {
    return {
        clearStatus: () => dispatch(clearStatus())
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
