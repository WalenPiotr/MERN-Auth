import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        console.log(this.props.authenticated);
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

Navbar.propTypes = {};

function mapStateToProps(reduxState) {
    return {
        authenticated: reduxState.authenticated
    };
}
export default connect(mapStateToProps)(Navbar);
