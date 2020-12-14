import React from "react";
import { connect } from "react-redux";
import UserAdminRowComponent from "../Components/Users/UserAdminRowComponent";

import Loader from 'react-loader-spinner'
import {administerUser, findAllUsers, getUserByUID, updateUser} from "../Actions/UserActions";
import {getCookie} from "../config/db";


class UserAdminListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID).then(() => this.props.findAllUsers())
        console.log("fireUID: ", fireUID)

        if (fireUID === "") {
            console.log("reaching conditional")
            window.location.href = '/login'
        }
    }
    componentDidUpdate() {
    }

    render() {
        return (
            <div>
                <h2 className="m-3">User Admin Page</h2>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>User Type</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                (this.props.users && this.props.users.length > 0) &&
                                    this.props.users.map((user, index) =>
                                        <UserAdminRowComponent
                                            user={user}
                                            administerUser={this.props.administerUser}
                                        />
                                )
                            }
                        </tbody>
                    </table>
                    {
                        (!this.props.users || this.props.users.length <= 0) &&
                            <Loader type="audio" color="#00BFFF" height={80} width={80}/>
                    }
                </div>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllUsers: () => findAllUsers(dispatch),
    getUserByUID: (uid) => getUserByUID(dispatch, uid),
    administerUser: (user) => administerUser(dispatch, user)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserAdminListContainer)
