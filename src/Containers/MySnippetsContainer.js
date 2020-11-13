import React from "react"
import { connect } from "react-redux"
import MySnippetsComponent from "../Components/MySnippetsComponent";
import {createSnippet, findAllPublicSnippets, findAllSnippets} from "../Actions/SnippetActions";

class MySnippetsContainer extends React.Component{

    componentDidMount() {
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
    createSnippet: () => createSnippet(dispatch),
    findAllSnippets: () => findAllSnippets(dispatch),
    findAllPublicSnippets: () => findAllPublicSnippets(dispatch)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(MySnippetsComponent)
