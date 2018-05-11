import React from 'react';
import LogoutView from '../components/LogoutView';
import * as status from '../actions/status';
import * as auth from '../actions/auth';
import { connect } from 'react-redux';

let createHandlers = ({ history, dispatch }) => {
    let logout = function(data) {
        const request = {
            type: 'cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        status.addSuccess({
            message: 'Logging out from your account...'
        });
        fetch('/api/auth/logout/', request)
            .then(response => response.json())
            .then(data => {
                dispatch(auth.logout(data.user));
                dispatch(
                    status.addSuccess({
                        message: 'You have successfully logged out.'
                    })
                );
                history.push('/');
            })
            .catch(error => {
                dispatch(status.addError(error));
            });
    };

    let clearStatus = function() {
        dispatch(status.clearStatus());
    };

    return {
        logout
    };
};

export default connect()(props => (
    <LogoutView handlers={createHandlers(props)} />
));
