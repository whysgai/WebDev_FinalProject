import React from "react"
import { connect } from "react-redux"
import {getGistsForUser, getGistById} from "./UserActions"
import TestSnippetDisplayPageComponent from "./TestSnippetDisplayPageComponent"

const stateToPropertyMapper = (state) => ({
    response: state.userReducer.response,
    gist: state.userReducer.gist
})

const propertyToDispatchMapper = (dispatch) => ({
    // loginGithub: () => loginGithub(dispatch),
    getGistsForUser: () => getGistsForUser(dispatch),
    getGistById: () => getGistById(dispatch)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TestSnippetDisplayPageComponent)