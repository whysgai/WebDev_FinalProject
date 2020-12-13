import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire, {fireUID, fireUser} from "../config/db";
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
        this.state.user = this.props.user
    }

    componentDidMount() {
        this.loadingWrapper().then(() => this.render())
        console.log("Component did mount", this.props.user)
        this.render()
    }

    render() {
        return (
            <div>
                {console.log(this.props.user)}
                <UserProfileEditComponent user={this.props.authenticatedUser}/>
            </div>)
    }
}

const
    stateToPropertyMapper = (state) => ({
        authenticatedUser: state.userReducer.authenticatedUser,
        user: state.userReducer.user
    })

const
    propertyToDispatchMapper = (dispatch) => ({
        getUser: (username) => getUser(dispatch, username),
        getUserByUID: (uid) => getUserByUID(dispatch, uid),
        getAuth: () => getAuth(dispatch)
        // setUser: (user) => setUser(dispatch, user),
        // setUID: (uid) => setUID(dispatch, uid),
        // getUserData: (uid) => getUserData(dispatch, uid),
    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)

(
    UserProfileEditContainer
)



