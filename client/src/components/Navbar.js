import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const component = this.props.authenticated ? (
            <div>
                <p>
                    <Link to="/logout"> Logout </Link>
                </p>
            </div>
        ) : (
            <div>
                <p>
                    <Link to="/login">Login</Link>
                </p>
                <p>
                    <Link to="/register">Register</Link>
                </p>
            </div>
        );
        return component;
    }
}


function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Navbar);
