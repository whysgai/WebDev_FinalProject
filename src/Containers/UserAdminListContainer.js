import React from "react";
import { connect } from "react-redux";
import UserAdminRowComponent from "../Components/Users/UserAdminRowComponent";

import Loader from 'react-loader-spinner'
import {administerUser, findAllUsers, getUserByUID, updateUser} from "../Actions/UserActions";
import {getCookie} from "../config/db";
import {administerGroup, createGroup, getAllGroups} from "../Actions/GroupActions";
import GroupRowComponent from "../Components/GroupRowComponent";

class UserAdminListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        this.props.getAllGroups().then(() => console.log(this.props.groups))

        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID).then(() => this.props.findAllUsers())
        console.log("fireUID: ", fireUID)

        if (fireUID === "") {
            console.log("reaching conditional")
            window.location.href = '/login'
        }

        this.render()
    }
    componentDidUpdate() {
    }

    render() {
        return (
            <div>

                <div>

                    <h1 className="m-3">Users</h1>

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
                                        />
                                )
                            }
                        </tbody>
                    </table>
                    <h1 className="m-3">Groups</h1>

                    <ul className={"list-group"}>
                        {
                            (this.props.groups.length > 0) &&
                            this.props.groups.map((group, index) =>
                                <GroupRowComponent group={group}
                                />
                            )
                        }
                    </ul>

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
    users: state.userReducer.users,
    groups: state.groupReducer.groups
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllUsers: () => findAllUsers(dispatch),
    getUserByUID: (uid) => getUserByUID(dispatch, uid),
    administerUser: (user) => administerUser(dispatch, user),
    administerGroup: (group) => administerGroup(dispatch, group),
    getAllGroups: () => getAllGroups(dispatch),
    createGroup: (group) => createGroup(dispatch, group)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserAdminListContainer)
