import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire, {fireUID, fireUser, getCookie} from "../config/db";
import {connect} from "react-redux";
import {getAuth, getUser, getUserByUID} from "../Actions/UserActions";
import UserProfileEditComponent from "../Components/Users/UserProfileEditComponent";
import UserProfileDisplayComponent from "../Components/Users/UserProfileDisplayComponent";

class UserProfileEditContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {username: "user123", paToken: "Personal Access Token", email: "email@google.com", type: "USER"},
        }
    }

    async loadingWrapper(){
        await this.props.getUserByUID(fireUID)
    }

    componentDidMount() {
        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID)
        this.render()
    }


    render() {
        return (
            <div>
                <UserProfileEditComponent user={this.props.user !== null ? this.props.user : this.state.user}/>
            </div>)
    }
}

const
    stateToPropertyMapper = (state) => ({
        activeUser: state.userReducer.activeUser,
        user: state.userReducer.activeUser
    })

const
    propertyToDispatchMapper = (dispatch) => ({
        getUser: (username) => getUser(dispatch, username),
        getUserByUID: (uid) => getUserByUID(dispatch, uid),
        getAuth: () => getAuth(dispatch)
    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)

(
    UserProfileEditContainer
)



