import React from "react";
import SnippetContainer from "./SnippetContainer";
import {
    createSnippet,
    createSnippetForCreator,
    createLocalSnippet,
    findSnippetById,
    editLocalSnippet,
    addTagToSnippet, removeTagFromSnippet
} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class SingleSnippetContainer extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


    constructor() {
        super();
        this.state = {
            newSnippetTemplate: {
                id: "",
                gistId: "newGist",
                creatorId: "",
                dateCreated: "",
                lastModified: "",
                title: "Snippet title",
                description: "Description and context of code",
                codeText: "Add your snippet here...",
                tags: [],
                shareableURL: "",
                privacy: false,
                recommended: false
            }
        };
    }

    componentDidMount() {
        console.log("compdidmount", this.props.activeUser)
        let temp = this.state.newSnippetTemplate
        temp.creatorId = this.props.activeUser.username
        this.props.createLocalSnippet(temp)
    };


    render () {
        {
            console.log("Hello from create snippet!", this.props.currentSnippet);
        }
        return (
            <div>
                {
                    this.props.currentSnippet &&
                        <SnippetContainer
                            snippet={this.props.currentSnippet}
                            create={true}
                            editLocalSnippet={this.props.editLocalSnippet}
                            addTagToSnippet={this.props.addTagToSnippet}
                            removeTagFromSnippet={this.props.removeTagFromSnippet}
                            createSnippetForCreator={this.props.createSnippetForCreator}
                            activeUser={this.props.activeUser}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.currentSnippet,
    activeUser: state.userReducer.activeUser,
    // snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    createSnippet: (snippet) => createSnippet(dispatch, snippet),
    createSnippetForCreator: (creatorId, snippet) => createSnippetForCreator(dispatch, creatorId, snippet),
    createLocalSnippet: (snippet) => {createLocalSnippet(dispatch, snippet)},
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
(SingleSnippetContainer)
