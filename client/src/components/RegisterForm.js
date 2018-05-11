import React, { Component } from 'react';
import { clearStatus } from '../actions/status';

class RegisterForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handlers.clearStatus();
        this.props.handlers.register(this.state);
        this.setState({
            username: '',
            password: ''
        });
    };

    handleChange = field => event => {
        const value = event.target.value;
        this.props.handlers.clearStatus();
        this.setState(previousState => {
            const newState = { ...previousState };
            newState[field] = value;
            return newState;
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Register Form </label>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                />
                <input
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange('password')}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default RegisterForm;
