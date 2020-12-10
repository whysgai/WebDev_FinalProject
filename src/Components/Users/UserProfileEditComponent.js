import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from "../../config/db";
import {findAllPublicSnippets} from "../../Actions/SnippetActions";
import {getUser, getUserUsername} from "../../services/UserService";
import {connect} from "react-redux";

class UserProfileEditComponent extends Component {

    constructor() {
        super()
        this.state = {

        }

        // fire.database().ref("users/" + fire.auth().currentUser.uid).once('value')
        //     .then((snapshot) => {
        //         this.userSnapshot = snapshot.val()
        //         this.state.user = this.userSnapshot
        //         console.log(this.state.user)
        //         return Promise.resolve(snapshot.val())
        //     })
    }

    // getUser = () => {
    //     return new Promise((resolve, reject) => {
    //         let user = fire.auth().currentUser;
    //         this.state.user = user
    //         console.log(user)
    //         return user ? resolve(user) : reject(new Error('No user signed in'));
    //     })
    // }

    // getUserData = () => {
    //     if (fire.auth().currentUser) {
    //         fire.database().ref("users/" + fire.auth().currentUser.uid).once('value')
    //             .then((snapshot) => {
    //                 this.state.user = snapshot.val()
    //                 console.log(this.state.user)
    //                 return Promise.resolve(snapshot.val())
    //             })
    //     }
    // }

    componentDidMount() {
        // // this.props.getUser()
        // // console.log(this.props.user)
        // getUser().then((user) => console.log(user))
        // this.render()
        this.render()
    }


    render() {
        return (
            <div>
                <div className="card-body">
                    {/*<h3 className="card-title">Profile</h3>*/}
                    <div className="wbdv-message">
                        <div className="alert alert-success col-sm-12 d-none" role="alert">
                            Profile saved
                        </div>
                        <div className="alert alert-danger col-sm-12 d-none" role="alert">
                            Profile not saved
                        </div>
                    </div>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username" id="username"
                                       placeholder="username"
                                       // readOnly="readonly"
                                       // value={this.state.user.uid}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="githubId" className="col-sm-2 col-form-label">GitHub ID</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="githubId" placeholder="GitHub ID"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="paToken" className="col-sm-2 col-form-label">GitHub PA Token</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="paToken" placeholder="Token"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-phone" id="phone"
                                       placeholder="(123) 867-5309"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="email" placeholder="lane@dailyplanet.com"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-10">
                                <select className="custom-select wbdv-field wbdv-role" id="role">
                                    <option value="Developer">Faculty</option>
                                    <option value="Moderator">Student</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <Link to="/profile"
                                      className="btn btn-outline-success btn-block wbdv-button wbdv-update">Update</Link>
                                <Link to="/"
                                      className="btn btn-outline-danger btn-block wbdv-button wbdv-logout">Logout</Link>
                                <div className="row">
                                    <div className="alertFld wbdv-message"></div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => this.getUser().then(user =>console.log(user))}>Get user data</button>
                        <button onClick={() => console.log(this.state)}>Print state</button>

                    </form>

                </div>
            </div>)
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.userReducer.user

})

const propertyToDispatchMapper = (dispatch) => ({
    getUser: () => getUser(dispatch)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserProfileEditComponent)



