import RegisterForm from '../components/RegisterForm';

import { addSuccess, addError, clearStatus } from '../actions/status';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

function fetchRegister(data) {
    return dispatch => {
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
            addSuccess({
                message: 'Registering your account...'
            })
        );
        fetch('/api/auth/register/', request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    throw new Error(data.error.message);
                }
                if (data.user) {
                    dispatch(login(data.user));
                    dispatch(
                        addSuccess({
                            message:
                                'You have successfully registered and logged in.'
                        })
                    );
                }
            })
            .catch(error => dispatch(addError(error)));
    };
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        register: user => dispatch(fetchRegister(user)),
        clearStatus: () => dispatch(clearStatus())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
