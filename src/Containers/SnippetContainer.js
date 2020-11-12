import React from "react"
import { connect } from "react-redux"
import SnippetComponent from "../Components/SnippetComponent";

const stateToPropertyMapper = (state) => ({
    // snippet: this.props.snippet
    // snippet: state.snippetReducer.snippet
})

const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SnippetComponent)
