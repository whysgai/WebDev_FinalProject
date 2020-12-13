import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire, {fireUID, fireUser, getCookie} from "../config/db";
import {connect} from "react-redux";
import {getAuth, getUser, getUserByUID, updateLocalUser, updateUser} from "../Actions/UserActions";
import UserProfileEditComponent from "../Components/Users/UserProfileEditComponent";
import UserProfileDisplayComponent from "../Components/Users/UserProfileDisplayComponent";

class UserProfileEditContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {username: "user123", paToken: "Personal Access Token", email: "email@google.com", type: "USER"},
        }
    }

    // async loadingWrapper(){
    //     await this.props.getUserByUID(fireUID)
    // }

    componentDidMount() {
        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID)
    }


    render() {
        return (
            <div>
                <UserProfileEditComponent
                    user={this.props.activeUser !== null ? this.props.activeUser : this.state.activeUser}
                    updateUser={this.props.updateUser}
                    updateLocalUser={this.props.updateLocalUser}
                />
            </div>
        )
    }
}

const
    stateToPropertyMapper = (state) => ({
        activeUser: state.userReducer.activeUser,
        // user: state.userReducer.activeUser
    })

const
    propertyToDispatchMapper = (dispatch) => ({
        // getUser: (username) => getUser(dispatch, username),
        getUserByUID: (uid) => getUserByUID(dispatch, uid),
        // getAuth: () => getAuth(dispatch),
        updateUser: (user) => updateUser(dispatch, user),
        updateLocalUser: (user) => updateLocalUser(dispatch, user)
    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserProfileEditContainer)



