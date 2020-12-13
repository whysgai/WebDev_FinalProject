import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire, {fireUID, fireUser} from "../config/db";
import {connect} from "react-redux";
import {getAuth, getUser, getUserByUID} from "../Actions/UserActions";
import UserProfileEditComponent from "../Components/Users/UserProfileEditComponent";
import UserProfileDisplayComponent from "../Components/Users/UserProfileDisplayComponent";

class UserProfileDisplayContainer extends Component {

    constructor(props) {
        super(props)

    }

    async loadingWrapper(){
        const username = this.props.match.params.username
        this.props.getUser(username)
    }

    componentDidMount() {
        this.loadingWrapper().then(() => console.log(this.props.user), this.render())
        this.render()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.render()
    }

    render() {
        return (
            <div>
                {console.log("render", this.props.user)}
                <UserProfileDisplayComponent user={this.props.displayedUser}/>
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
        getUserByUID: (uid) => getUserByUID(dispatch, uid),
        getAuth: () => getAuth(dispatch)

    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)

(
    UserProfileDisplayContainer
)



