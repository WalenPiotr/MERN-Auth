import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(({ authenticated }) => (
    <Navbar authenticated={authenticated} />
));
