import React from 'react'
import {Link} from 'react-router-dom'
import profilePic from "../../assets/media/portfolio.png";

const UserProfileEditComponent = ({user, updateUser, updateLocalUser}) =>

    <div>
        <div>
            <h2 className="m-3">Profile</h2>
        </div>

        <div className="row">

            <div className= "mt-3 col-6">
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
                            <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
                            <div className="col-sm-9">
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
                            <label htmlFor="paToken" className="col-sm-3 col-form-label">GitHub PA</label>
                            <div className="col-sm-9">
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
                            <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-9">
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
                            <label htmlFor="role" className="col-sm-3 col-form-label">Role</label>
                            <div className="col-sm-9">
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
            </div>

            <div
                className="text-center col-6"
            >
                <img
                    style = {{height: 400}}
                    className="text-center align-content-center"
                    src={profilePic}/>
            </div>
        </div>



    </div>


export default UserProfileEditComponent
