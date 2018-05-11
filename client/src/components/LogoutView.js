import React, { Component } from 'react';

class LogoutView extends Component {
    componentDidMount() {
        this.props.handlers.logout();
        this.props.handlers.clearStatus();
    }
    render() {
        return <div>Logging out...</div>;
    }
}

export default LogoutView;
