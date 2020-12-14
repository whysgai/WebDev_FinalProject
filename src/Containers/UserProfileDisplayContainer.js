import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire, {fireUID, fireUser} from "../config/db";
import {connect} from "react-redux";
import {getAuth, getUser, getUserByUID} from "../Actions/UserActions";
import UserProfileEditComponent from "../Components/Users/UserProfileEditComponent";
import UserProfileDisplayComponent from "../Components/Users/UserProfileDisplayComponent";
import {findFavoriteSnippets, findSnippetsByCreator} from "../Actions/SnippetActions";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";

class UserProfileDisplayContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    async loadingWrapper(){
        const username = this.props.match.params.username;
        this.props.getUser(username);
    }

    componentDidMount() {
        this.loadingWrapper().then(() => console.log(this.props.user), this.render());
        this.props.findSnippetsByCreator(this.props.match.params.username).then(() => console.log("MOUNT: ", this.props.snippets));


        this.render()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.render()
    }

    render() {
        return (
            <div>
                {console.log("render", this.props.user)}
                <UserProfileDisplayComponent
                    user={this.props.displayedUser}
                    snippets={this.props.snippets}
                />
                <SnippetSearchListComponent
                    snippets={this.props.snippets}
                    activeUser={this.props.activeUser}/>
            </div>)
    }
}

const
    stateToPropertyMapper = (state) => ({
        snippets: state.snippetReducer.snippets,
        displayedUser: state.userReducer.displayedUser,
        // userUID: state.authReducer.userUID,
        user: state.userReducer.user,
        activeUser: state.userReducer.activeUser
    });

const
    propertyToDispatchMapper = (dispatch) => ({
        findSnippetsByCreator: (username) => findSnippetsByCreator(dispatch, username),
        getUser: (username) => getUser(dispatch, username),
        getUserByUID: (uid) => getUserByUID(dispatch, uid),
        getAuth: () => getAuth(dispatch)
    });

export default connect(stateToPropertyMapper, propertyToDispatchMapper)

(
    UserProfileDisplayContainer
)



