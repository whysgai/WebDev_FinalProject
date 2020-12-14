import React, {Component} from 'react'
import fire, { getCookie } from "../config/db";
import {connect} from "react-redux";
import { getUserByUID, updateLocalUser, updateUser } from "../Actions/UserActions";
import UserProfileEditComponent from "../Components/Users/UserProfileEditComponent";

class UserProfileEditContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {username: "user123", paToken: "Personal Access Token", email: "email@google.com", type: "USER"},
        }
    }

    componentDidMount() {
        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID)
    }


    logout(e) {
        e.preventDefault();
        fire.auth().signOut()
            .then(() => window.location.replace("/"))
    }

    render() {
        return (
            <div>
                <UserProfileEditComponent
                    user={this.props.activeUser !== null ? this.props.activeUser : this.state.activeUser}
                    updateUser={this.props.updateUser}
                    logout={this.logout}
                    updateLocalUser={this.props.updateLocalUser}
                />
            </div>
        )
    }
}

const
    stateToPropertyMapper = (state) => ({
        activeUser: state.userReducer.activeUser
    })

const
    propertyToDispatchMapper = (dispatch) => ({
        getUserByUID: (uid) => getUserByUID(dispatch, uid),
        updateUser: (user) => updateUser(dispatch, user),
        updateLocalUser: (user) => updateLocalUser(dispatch, user)
    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserProfileEditContainer)



