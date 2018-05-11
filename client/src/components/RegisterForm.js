import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.props.clearStatus();
    }

    state = {
        username: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.register(this.state);
        this.props.history.push('/');
        this.setState({
            username: '',
            password: ''
        });
    };

    handleChange = field => event => {
        const value = event.target.value;
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
