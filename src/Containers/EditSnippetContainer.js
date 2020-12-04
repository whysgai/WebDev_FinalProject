import React from "react";
import SnippetContainer from "./SnippetContainer";
import {addTagToSnippet, editLocalSnippet, findSnippetById, removeTagFromSnippet} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class EditSnippetContainer extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


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
                            addTagToSnippet={this.props.addTagToSnippet}
                            removeTagFromSnippet={this.props.removeTagFromSnippet}
                            activeUser={this.props.activeUser}

                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.currentSnippet,
    snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    addTagToSnippet: (snippet, tag) => {
        console.log("Tag from edit container:", tag)
        addTagToSnippet(dispatch, snippet, tag)
    },
    removeTagFromSnippet: (tag) => {
        console.log("Tag from edit container:", tag)
        removeTagFromSnippet(dispatch, tag)
    },
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(EditSnippetContainer)
