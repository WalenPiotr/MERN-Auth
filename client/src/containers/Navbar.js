import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

import { clearStatus } from '../actions/status';

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

function mapDispatchToProps(dispatch) {
    return {
        clearStatus: () => dispatch(clearStatus())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    ({ authenticated, clearStatus }) => (
        <Navbar authenticated={authenticated} clearStatus={clearStatus} />
    )
);
