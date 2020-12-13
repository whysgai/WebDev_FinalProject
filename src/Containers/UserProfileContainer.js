import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from "../config/db";
import {connect} from "react-redux";
import {getUser} from "../Actions/UserActions";

class UserProfileContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {username: "user123", paToken: "Personal Access Token", email: "email@google.com", type: "USER"},
        }

        {this.props.user ? this.state.user = this.props.user : this.state.user = this.state.user}
    }


    componentDidMount() {
        this.props.getUser("etardis")
        console.log("Component did mount", this.props.user)
        this.render()

    }

    render() {
        return (
            <div>
                {console.log("Authenticated user", this.state.user)}
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
                                       placeholder={this.state.user.username}
                                />


                            </div>
                        </div>
                        {/*<div className="form-group row">*/}
                        {/*    <label htmlFor="githubId" className="col-sm-2 col-form-label">GitHub ID</label>*/}
                        {/*    <div className="col-sm-10">*/}
                        {/*        <input className="form-control" id="githubId" placeholder="GitHub ID"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="form-group row">
                            <label htmlFor="paToken" className="col-sm-2 col-form-label">GitHub PA Token</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="paToken" placeholder={this.state.user.paToken}/>
                            </div>
                        </div>
                        {/*<div className="form-group row">*/}
                        {/*    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>*/}
                        {/*    <div className="col-sm-10">*/}
                        {/*        <input className="form-control wbdv-field wbdv-phone" id="phone"*/}
                        {/*               placeholder="(123) 867-5309"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="email" placeholder={this.state.user.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-10">
                                <select className="custom-select wbdv-field wbdv-role" id="role"
                                        value={this.state.user.type}>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
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
                    </form>

                </div>
            </div>)
    }
}

const
    stateToPropertyMapper = (state) => ({
        displayedUser: state.userReducer.displayedUser,
        // userUID: state.authReducer.userUID,
        user: state.userReducer.user
    })

const
    propertyToDispatchMapper = (dispatch) => ({
        getUser: (username) => getUser(dispatch, username),
        // setUser: (user) => setUser(dispatch, user),
        // setUID: (uid) => setUID(dispatch, uid),
        // getUserData: (uid) => getUserData(dispatch, uid),
    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)

(
    UserProfileContainer
)



