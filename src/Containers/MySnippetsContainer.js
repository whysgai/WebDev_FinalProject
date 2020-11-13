import React from "react"
import { connect } from "react-redux"
import MySnippetsComponent from "../Components/MySnippetsComponent";
import {findSnippetsForCreator} from "../services/snippetServices";
import {createSnippet, findAllSnippets} from "../Actions/SnippetActions";

class MySnippetsContainer extends React.Component{

    componentDidMount() {
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
    createSnippet: () => createSnippet(dispatch),
    findAllSnippets: () => findAllSnippets(dispatch)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(MySnippetsComponent)
