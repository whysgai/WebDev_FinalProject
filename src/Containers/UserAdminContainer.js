import React from "react";
import { connect } from "react-redux";
import UserAdminComponent from "../Components/UserAdminComponent";

const stateToPropertyMapper = (state) => ({
    users: state.snippetReducer.users
})

const propertyToDispatchMapper =(dispatch) => ({

})


export default connect (
    stateToPropertyMapper,
    propertyToDispatchMapper
)
(UserAdminComponent)
