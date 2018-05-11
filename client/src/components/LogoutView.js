import React, { Component } from 'react';

class LogoutView extends Component {
    constructor(props) {
        super(props);
        this.props.handlers.clearStatus();
        this.props.handlers.logout();
        this.props.history.push('/');
    }

    render() {
        return <div>Logging out...</div>;
    }
}

export default LogoutView;
