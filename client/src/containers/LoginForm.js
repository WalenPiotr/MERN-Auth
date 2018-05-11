import LoginForm from '../components/LoginForm';
import * as status from '../actions/status';
import * as auth from '../actions/auth';
import { connect } from 'react-redux';
import React from 'react';

let createHandlers = ({ history, dispatch }) => {
    let login = function(data) {
        const request = {
            type: 'cors',
            body: JSON.stringify({
                ...data
            }),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        dispatch(
            status.addSuccess({
                message: 'Logging into your account...'
            })
        );
        fetch('/api/auth/login/', request)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    throw new Error(data.error.message);
                }
                if (data.user) {
                    dispatch(auth.login(data.user));
                    dispatch(
                        status.addSuccess({
                            message: 'You have successfully logged in.'
                        })
                    );
                    history.push('/');
                }
            })
            .catch(error => dispatch(status.addError(error)));
    };

    let clearStatus = function() {
        dispatch(status.clearStatus());
    };
    return {
        login,
        clearStatus
    };
};

export default connect()(props => (
    <LoginForm handlers={createHandlers(props)} />
));
