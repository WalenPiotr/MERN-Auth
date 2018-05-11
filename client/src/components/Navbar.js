import React, { Component } from 'react';

const Navbar = ({ authenticated }) => {
    const component = authenticated ? (
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
};

export default Navbar;