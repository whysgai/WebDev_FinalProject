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
            name: '',
            email: '',
            password: '',
            paToken: '',
            type: ''
        };
    }

    logout(e) {
        e.preventDefault();
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
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u)=>{
                fire.database().ref('users/' + fire.auth().currentUser.uid).set({
                    username: this.state.name,
                    uid: fire.auth().currentUser.uid,
                    email: this.state.email,
                    paToken: this.state.paToken,
                    type: this.state.type
                });

            })
            .then(() => {alert("User created")})
            .catch((error) => {
                alert(error);
            })
    }
    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input value={this.state.name} onChange={this.handleChange} name="name"
                               className="form-control" id="name"
                               placeholder="etardis123"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paToken">Personal Access Token</label>
                        <input value={this.state.paToken} onChange={this.handleChange} type="password" name="paToken"
                               className="form-control" id="paToken" placeholder="Personal Access Token"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input value={this.state.type} onChange={this.handleChange} name="type"
                               className="form-control" id="type" placeholder="USER, ADMIN, MOD"/>
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
