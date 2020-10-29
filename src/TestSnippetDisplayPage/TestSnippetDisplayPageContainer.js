import React from "react"
import { connect } from "react-redux"
import {loginGithub, getIssuesForRepo} from "./UserActions"
import TestSnippetDisplayPageComponent from "./TestSnippetDisplayPageComponent"

const stateToPropertyMapper = (state) => ({
    response: state.userReducer.response
})

const propertyToDispatchMapper = (dispatch) => ({
    loginGithub: () => loginGithub(dispatch),
    getIssuesForRepo: () => getIssuesForRepo(dispatch)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TestSnippetDisplayPageComponent)