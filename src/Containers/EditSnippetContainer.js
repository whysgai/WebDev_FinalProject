import React from "react";
import SnippetContainer from "./SnippetContainer";
import {
    addTagToSnippet, deleteSnippet,
    editLocalSnippet,
    findSnippetById,
    removeTagFromSnippet,
    updateSnippet
} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class EditSnippetContainer extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        const snippetId = this.props.match.params.snippetId
        this.props.findSnippetById(snippetId)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    };

    render () {
        return (
            <div>
                {
                    console.log("Active user from edit container", this.props.activeUser)
                }
                {
                    console.log("Current snippet from edit container", this.props.currentSnippet)}
                {
                    this.props.currentSnippet &&
                        <SnippetContainer
                            snippet={this.props.currentSnippet}
                            edit={true}
                            editLocalSnippet={this.props.editLocalSnippet}
                            updateSnippet={this.props.updateSnippet}
                            addTagToSnippet={this.props.addTagToSnippet}
                            removeTagFromSnippet={this.props.removeTagFromSnippet}
                            deleteSnippet={this.props.deleteSnippet}
                            activeUser={this.props.activeUser}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.snippets[0],
    snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    updateSnippet: (snippet) => updateSnippet(dispatch, snippet),
    addTagToSnippet: (tag) => {
        addTagToSnippet(dispatch, tag)
    },
    removeTagFromSnippet: (tag) => {
        removeTagFromSnippet(dispatch, tag)
    },
    deleteSnippet: (snippetId) => deleteSnippet(dispatch, snippetId),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),


})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(EditSnippetContainer)
