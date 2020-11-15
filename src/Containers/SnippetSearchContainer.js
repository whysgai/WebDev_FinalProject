import React from "react";
import { connect } from "react-redux";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";


const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists
})

const propertyToDispatchMapper = (dispatch) => ({
    getGistsForUser: console.log("hello"),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl)
})


export default connect (
    stateToPropertyMapper,
    propertyToDispatchMapper
)
(SnippetSearchComponent)
