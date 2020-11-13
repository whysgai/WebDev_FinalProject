import React from "react"
import { connect } from "react-redux"
import MySnippetsComponent from "../Components/MySnippetsComponent";

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(MySnippetsComponent)
