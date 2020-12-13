import React from "react";
import { connect } from "react-redux";
import NavbarComponent from "../Components/NavbarComponent";
import {getCookie} from "../config/db";
import {getUserByUID} from "../Actions/UserActions";

class NavbarContainer extends React.Component {

    constructor() {
        super();
        this.state = { };
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
                        // fireUID={this.props.fireUID}
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
