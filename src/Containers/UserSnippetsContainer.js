import React from "react";
import { connect } from "react-redux";
import UserSnippetsComponent from "../Components/Users/UserSnippetsComponent";

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    user: state.snippetReducer.user
})

const propertyToDispatchMapper =(dispatch) => ({

})

export default connect (
    stateToPropertyMapper,
    propertyToDispatchMapper
)
(UserSnippetsComponent)
