import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Welcome to the App!</h1>
                <p>
                    <Link to="/login">Login</Link>
                </p>
                <Route path="/login" component={LoginForm} />
            </div>
        );
    }
}

class LoginForm extends Component {
    data = {
        username: 'Piotr',
        password: 'password'
    };

    login = data =>
        fetch('/api/auth/login/', {
            type: 'cors',
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response);
            if (response.status == 200) console.log('Logged in');
            else {
                console.log('There was a problem');
            }
        }).catch(error => console.log(error));

    handleSubmit = event => {
        event.preventDefault();
        console.log('click');
        this.login(this.data);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" />
                <input type="password" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default App;
