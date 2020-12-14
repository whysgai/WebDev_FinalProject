import React from "react";
import { connect } from "react-redux";
import NavbarComponent from "../Components/NavbarComponent";
import {getCookie} from "../config/db";
import {getUserByUID} from "../Actions/UserActions";
import fire from "../config/db";

class NavbarContainer extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    logout(e) {
        e.preventDefault();
        fire.auth().signOut()
            .then(() => window.location.replace("/"))
    }

    componentDidMount() {
        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID)
    }

    render () {
        return (
            <div>
                {
                    <NavbarComponent
                        activeUser={this.props.activeUser}
<<<<<<< HEAD
                        logout={this.logout}
=======
>>>>>>> b7602c3 (Fix: resolve merge conflict)
                    />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    activeUser: state.userReducer.activeUser
});

const propertyToDispatchMapper =(dispatch) => ({
    getUserByUID: (uid) => getUserByUID(dispatch, uid),
});

export default connect (
    stateToPropertyMapper,
    propertyToDispatchMapper
)
(NavbarContainer)
