import React from "react"
import { connect } from "react-redux"
import SnippetComponent from "../Components/Snippets/SnippetComponent";
import {createGistForUser} from "../Actions/GistActions";

const stateToPropertyMapper = (state) => ({
    activeUser : state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    createGistForUser: (token, title, description, content) => createGistForUser(dispatch, token, title, description, content)
})
// add class, render <SnippetComponent>

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SnippetComponent)
