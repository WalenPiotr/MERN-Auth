import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Welcome to the App!</h1>
                <p>
                    <Link to="/login">Login</Link>
                </p>
                <p>
                    <Link to="/register">Register</Link>
                </p>
                <p>
                    <Link to="/logout"> Logout </Link>
                </p>
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/register" component={RegisterForm} />
                <Route exact path="/logout" component={Logout} />
            </div>
        );
    }
}

class Logout extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout = () => {
        const request = {
            type: 'cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch('/api/auth/logout/', request)
            .then(response => {
                return response.json();
            })
            .then(json => console.log(json))
            .catch(error => console.log(error));
    };

    render() {
        return <Redirect to="/" />;
    }
}

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };
    login = () => {
        const request = {
            type: 'cors',
            body: JSON.stringify({ ...this.state }),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch('/api/auth/login/', request)
            .then(response => {
                return response.json();
            })
            .then(json => console.log(json))
            .catch(error => console.log(error));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.login();
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
                <label> Login Form </label>
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

class RegisterForm extends Component {
    state = {
        username: '',
        password: ''
    };

    register = data => {
        const request = {
            type: 'cors',
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch('/api/auth/register/', request)
            .then(response => {
                return response.json();
            })
            .then(json => console.log(json))
            .catch(error => console.log(error));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.register(this.state);
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

export default App;
