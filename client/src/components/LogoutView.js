import React, { Component } from 'react';

class LogoutView extends Component {
    constructor(props) {
        super(props);
        this.props.handlers.logout();
    }

    render() {
        return <div>Logging out...</div>;
    }
}

export default LogoutView;
