import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from "../config/db";

//All firebase code *heavily* adapted from https://www.bennettnotes.com/react-login-with-google-firebase/

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    logout() {
        fire.auth().signOut().then(() => alert("You've been logged out"));
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{alert("You've been signed in")
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{alert("User created")})
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    <button type="submit" onClick={this.logout} className="btn btn-secondary">Logout</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                </form>

            </div>
        );
    }
}
export default LoginComponent;
