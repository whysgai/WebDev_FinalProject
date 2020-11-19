import React from "react"
import { connect } from "react-redux"
import MySnippetsComponent from "../Components/MySnippetsComponent";
import {createSnippet, deleteSnippet, findAllPublicSnippets, findAllSnippets} from "../Actions/SnippetActions";
import {createGistForUser} from "../Actions/GistActions";

class MySnippetsContainer extends React.Component{

}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
    createSnippet: () => createSnippet(dispatch),
    createGistForUser: () => createGistForUser(dispatch),
    findAllSnippets: () => findAllSnippets(dispatch),
    findAllPublicSnippets: () => findAllPublicSnippets(dispatch),
    deleteSnippet: (snippetId) => deleteSnippet(snippetId, dispatch)

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(MySnippetsComponent)
