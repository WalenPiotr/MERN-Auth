import React from 'react';
import { connect } from 'react-redux';
import Protected from '../components/Protected';

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps)(Protected);
