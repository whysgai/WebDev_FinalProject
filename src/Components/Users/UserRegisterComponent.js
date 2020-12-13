import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from "../../config/db";
import registerPic from "../../assets/media/people_computer_small.jpg"

class UserRegisterComponent extends Component {
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

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{alert("You've been signed in")
        }).catch((error) => {
            console.log(error);
        });
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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
                    type: this.state.type,
                    locked: false
                });

            })
            .then(() => {
                alert("Welcome to CodeSnippets!")
                window.location.replace("/")
            })
            .catch((error) => {
                alert(error);
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img
                            style={{height: 300}}
                            src={registerPic}/>
                    </div>
                    <div className="col-6">
                        <h2 className="m-3">Register a new account!</h2>

                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input value={this.state.name} onChange={this.handleChange} name="name"
                                       className="form-control" id="name"
                                       placeholder="Enter Username"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                                       className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                       placeholder="Enter Email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input value={this.state.password} onChange={this.handleChange} type="password"
                                       name="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="paToken">Personal Access Token</label>
                                <input value={this.state.paToken} onChange={this.handleChange} type="password"
                                       name="paToken"
                                       className="form-control" id="paToken" placeholder="Personal Access Token"/>
                                <small id="emailHelp" className="form-text text-muted">You can find your PA Token in your GitHub account.</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="type">Type</label>
                                <input
                                    value={this.state.type}
                                    onChange={this.handleChange}
                                    name="type"
                                    className="form-control"
                                    id="type"
                                    placeholder="USER, ADMIN, MOD"/>
                            </div>

                            <div className="row">
                                <button
                                    onClick={this.signup}
                                    // style={{marginLeft: '25px'}}
                                    className="btn btn-primary col-md-5 col-12 mr-2 ml-3">
                                    Register
                                </button>
                                <button
                                    type="submit"
                                    // onClick={this.login}
                                    className="btn btn-outline-primary col-md-5 col-12">
                                    <Link to="/login2">Login</Link>
                                </button>
                            </div>

                            {/*<button type="submit" onClick={this.logout} className="btn btn-secondary">Logout</button>*/}


                        </form>

                    </div>
                </div>

            </div>


        );
    }
}
export default UserRegisterComponent;
