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
        addSuccess({
            message: 'Logging out from your account...'
        });
        return fetch('/api/auth/logout/', request)
            .then(response => response.json())
            .then(data => {
                dispatch(logout(data.user));
                dispatch(
                    addSuccess({
                        message: 'You have successfully logged out.'
                    })
                );
            })
            .catch(error => {
                console.log(error);
                dispatch(addError(error));
            });
    };

    let clearStatus = function() {
        dispatch(status.clearStatus());
    };

    return {
        logout,
        clearStatus
    };
};

function fetchLogout() {
    return dispatch => {};
}

const Login = props => <LogoutView handlers={createHandlers(props)} />;

export default connect()(Login);
