import React from "react"
import { connect } from "react-redux"
import SnippetComponent from "../Components/Snippets/SnippetComponent";

const stateToPropertyMapper = (state) => ({
    activeUser : state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
})
// add class, render <SnippetComponent>

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SnippetComponent)
