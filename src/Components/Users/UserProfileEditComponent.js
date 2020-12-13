import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from "../../config/db";
import {findAllPublicSnippets} from "../../Actions/SnippetActions";
import {connect} from "react-redux";
import {getUser} from "../../Actions/UserActions";

const UserProfileEditComponent = ({user, updateUser, updateLocalUser}) => {
    return (

        <div className="card mt-3">
            {console.log("Component showing", user)}
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
                            <input className="form-control wbdv-field wbdv-username" id="username" disabled
                                   value={user.username}
                                   // onChange={(event) => updateLocalUser({
                                   //     ...user,
                                   //     username: event.target.value
                                   // })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="paToken" className="col-sm-2 col-form-label">GitHub PA Token</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="paToken"
                                   placeholder={user.paToken}
                                   onChange={(event) => updateLocalUser({
                                       ...user,
                                       paToken: event.target.value
                                   })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="email"
                                   placeholder={user.email}
                                   onChange={(event) => updateLocalUser({
                                       ...user,
                                       email: event.target.value
                                   })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
                        <div className="col-sm-10">
                            <select className="custom-select wbdv-field wbdv-role" id="role"
                                    value={user.type}
                                    onChange={(event) => updateLocalUser({
                                        ...user,
                                        type: event.target.value
                                    })}
                            >
                                <option value="USER">User</option>
                                <option
                                    className={`${user.type === "ADMIN" ? "" : "d-none"}`}
                                    value="ADMIN"
                                >
                                    Admin
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <button
                                  className="btn btn-outline-success btn-block wbdv-button wbdv-update"
                                  onClick={() => updateUser(user)}
                            >
                                Update
                            </button>
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
export default UserProfileEditComponent
