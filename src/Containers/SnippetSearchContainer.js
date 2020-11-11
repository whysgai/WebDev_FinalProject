import React from "react";
import { connect } from "react-redux";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper =(dispatch) => ({

})

export default connect (
    stateToPropertyMapper,
    propertyToDispatchMapper
)
(SnippetSearchComponent)
