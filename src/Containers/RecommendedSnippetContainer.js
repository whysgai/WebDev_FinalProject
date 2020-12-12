import React from "react";
import SnippetContainer from "./SnippetContainer";
import {
    createSnippet,
    createLocalSnippet,
    findSnippetById,
    editLocalSnippet,
    addTagToSnippet, removeTagFromSnippet, editLocalText, togglePrivacy, findRecommendedSnippets
} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";

class RecommendedSnippetContainer extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        this.props.findRecommendedSnippets()
    };


    render () {
        return (
            <div>
                {
                    this.props.snippets &&
                        <SnippetSearchListComponent
                            snippets={this.props.snippets}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    currentSnippet: state.snippetReducer.snippets[0],
    text: state.snippetReducer.text,
    activeUser: state.userReducer.activeUser,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findRecommendedSnippets: () => findRecommendedSnippets(dispatch),
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    createSnippet: (snippet, text) => createSnippet(dispatch, snippet, text),
    createLocalSnippet: (snippet) => {createLocalSnippet(dispatch, snippet)},
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    editLocalText: (text) => editLocalText(dispatch, text),
    addTagToSnippet: (snippet, tag) => addTagToSnippet(dispatch, snippet, tag),
    removeTagFromSnippet: (tag) => removeTagFromSnippet(dispatch, tag),
    togglePrivacy: () => togglePrivacy(dispatch),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(RecommendedSnippetContainer)
