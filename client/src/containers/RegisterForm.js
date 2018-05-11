import React from 'react';
import RegisterForm from '../components/RegisterForm';
import * as status from '../actions/status';
import * as auth from '../actions/auth';
import { connect } from 'react-redux';

let createHandlers = ({ history, dispatch }) => {
    let register = function(data) {
        const request = {
            type: 'cors',
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        dispatch(
            status.addSuccess({
                message: 'Registering your account...'
            })
        );
        fetch('/api/auth/register/', request)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    throw new Error(data.error.message);
                }
                if (data.user) {
                    dispatch(auth.login(data.user));
                    dispatch(
                        status.addSuccess({
                            message:
                                'You have successfully registered and logged in.'
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
        register,
        clearStatus
    };
};

export default connect()(props => (
    <RegisterForm handlers={createHandlers(props)} />
));
