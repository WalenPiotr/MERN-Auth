import React, { Component } from 'react';
import styled from 'styled-components';
export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handlers.clearStatus();
        this.props.handlers.login({
            ...this.state
        });

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
            <Form onSubmit={this.handleSubmit}>
                <Label> Login </Label>
                <Input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    placeholder="username"
                />
                <Input
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange('password')}
                    placeholder="password"
                />
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}
const Label = styled.label`
    margin-top: 10px;
    margin: 10px auto 0px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid grey;
    border-radius: 4px;
    margin: 15px auto 0px;
`;

const Input = styled.input`
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    height: 30px;
    margin: 10px 10px 0px;
    border-radius: 4px;
    text-indent: 8px;
    border: 1px solid grey;
`;

const Button = styled.button`
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    height: 30px;
    margin: 10px 10px 10px;
    border-radius: 4px;
    background-color: rgba(10, 40, 220, 0.8);
    color: white;
`;
