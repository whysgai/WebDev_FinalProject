import React from "react"
import { connect } from "react-redux"
import {getGistsForUser, getGistById, getGistFile} from "./UserActions"
import TestSnippetDisplayPageComponent from "./TestSnippetDisplayPageComponent"

const stateToPropertyMapper = (state) => ({
    gists: state.userReducer.gists,
    gist: state.userReducer.gist,
    file: state.userReducer.file
})

const propertyToDispatchMapper = (dispatch) => ({
    // loginGithub: () => loginGithub(dispatch),
    getGistsForUser: () => getGistsForUser(dispatch),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TestSnippetDisplayPageComponent)