import React from "react";
import SnippetContainer from "./SnippetContainer";
import {
    createSnippet,
    createLocalSnippet,
    findSnippetById,
    editLocalSnippet,
    addTagToSnippet, removeTagFromSnippet, editLocalText, togglePrivacy
} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class CreateSnippetContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            newSnippetTemplate: {
                id: "",
                gistId: "newGist3",
                creator: "",
                dateCreated: "",
                lastModified: "",
                title: "Snippet title",
                description: "Description and context of code",
                codeText: "Add your snippet here...",
                tags: [],
                likes: [],
                shareableURL: "",
                publicPost: true,
                recommended: false
            }
        };
    }

    componentDidMount() {
        let temp = this.state.newSnippetTemplate
        temp.creator = this.props.activeUser.username
        this.props.createLocalSnippet(temp)
    };


    render () {
        return (
            <div>
                {
                    this.props.currentSnippet &&
                        <SnippetContainer
                            snippet={this.props.currentSnippet}
                            text={this.props.text}
                            create={true}
                            editLocalSnippet={this.props.editLocalSnippet}
                            editLocalText={this.props.editLocalText}
                            addTagToSnippet={this.props.addTagToSnippet}
                            removeTagFromSnippet={this.props.removeTagFromSnippet}
                            createSnippet={this.props.createSnippet}
                            togglePrivacy={this.props.togglePrivacy}
                            activeUser={this.props.activeUser}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.snippets[0],
    text: state.snippetReducer.text,
    activeUser: state.userReducer.activeUser,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    createSnippet: (snippet, text) => createSnippet(dispatch, snippet, text),
    createLocalSnippet: (snippet) => {createLocalSnippet(dispatch, snippet)},
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    editLocalText: (text) => editLocalText(dispatch, text),
    addTagToSnippet: (snippet, tag) => addTagToSnippet(dispatch, snippet, tag),
    removeTagFromSnippet: (tag) => removeTagFromSnippet(dispatch, tag),
    togglePrivacy: (snippet) => togglePrivacy(dispatch, snippet),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CreateSnippetContainer)
