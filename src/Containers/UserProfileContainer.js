import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from "../config/db";
import {connect} from "react-redux";
import {getUser} from "../Actions/UserActions";
import UserProfileEditComponent from "../Components/Users/UserProfileEditComponent";

class UserProfileContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {username: "user123", paToken: "Personal Access Token", email: "email@google.com", type: "USER"},
        }
    }


    async userWrapper(){
        const username = this.props.match.params.username
        await this.props.getUser(username)
        this.state.user = this.props.user
    }

    componentDidMount() {
        this.userWrapper().then(() => this.render())


        // this.props.getUser("etardis")
        console.log("Component did mount", this.props.user)
        this.render()

    }

    render() {
        return (
            <div>
                <UserProfileEditComponent user={this.props.user}/>
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
        // setUser: (user) => setUser(dispatch, user),
        // setUID: (uid) => setUID(dispatch, uid),
        // getUserData: (uid) => getUserData(dispatch, uid),
    })

export default connect(stateToPropertyMapper, propertyToDispatchMapper)

(
    UserProfileContainer
)



