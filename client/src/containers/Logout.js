import LogoutView from '../components/LogoutView';

import { addSuccess, addError, clearStatus } from '../actions/status';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

function fetchLogout() {
    return dispatch => {
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
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        logout: user => dispatch(fetchLogout(user)),
        clearStatus: () => dispatch(clearStatus())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutView);
