import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire, {fireUser} from "../config/db";
import {connect} from "react-redux";
import {getAuth, getUser} from "../Actions/UserActions";
import UserProfileEditComponent from "../Components/Users/UserProfileEditComponent";
import UserProfileDisplayComponent from "../Components/Users/UserProfileDisplayComponent";

class UserProfileContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {username: "user123", paToken: "Personal Access Token", email: "email@google.com", type: "USER"},
        }
    }

    async loadingWrapper(){
        const username = this.props.match.params.username
        await username !== undefined ? this.props.getUser(username) : this.props.getUser("etardis")
        this.state.user = this.props.user
    }

    componentDidMount() {
        this.loadingWrapper().then(() => this.render())
        console.log("Component did mount", this.props.user)
        this.render()
        this.props.getAuth()
    }

    render() {
        return (
            <div>
                {console.log(fire.auth().currentUser)}
                <UserProfileDisplayComponent user={this.props.user}/>
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
        getAuth: () => getAuth(dispatch)
        // setUser: (user) => setUser(dispatch, user),
        // setUID: (uid) => setUID(dispatch, uid),
        // getUserData: (uid) => getUserData(dispatch, uid),
    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)

(
    UserProfileContainer
)



