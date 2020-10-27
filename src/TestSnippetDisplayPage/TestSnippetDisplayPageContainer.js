import React from "react"
import { connect } from "react-redux"
import {loginGithub} from "./UserActions"
import TestSnippetDisplayPageComponent from "./TestSnippetDisplayPageComponent"

const stateToPropertyMapper = (state) => ({
    response: state.userReducer.response
})

const propertyToDispatchMapper = (dispatch) => ({
    loginGithub: () => loginGithub(dispatch)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TestSnippetDisplayPageComponent)