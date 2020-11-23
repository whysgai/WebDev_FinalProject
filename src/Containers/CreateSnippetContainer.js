import React from "react";
import SnippetContainer from "./SnippetContainer";
import {createSnippet, createSnippetForCreator, createLocalSnippet, findSnippetById, editLocalSnippet} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class SingleSnippetContainer extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


    constructor() {
        super();
        this.state = {
            newSnippetTemplate: {
                gistId: "newGist",
                creator: "",
                dateCreated: "Yesterday",
                lastModified: "Today",
                title: "Snippet title",
                description: "Description and context of code",
                codeText: "Add your snippet here...",
                tags: '',
                shareableURL: "",
                privacy: false,
                recommended: false
            }
        };
    }

    componentDidMount() {
        console.log("compdidmount", this.props.activeUser)
        this.state.newSnippetTemplate.creator = this.props.activeUser.username
        this.props.createLocalSnippet(this.state.newSnippetTemplate)
        // const snippetId = this.props.match.params.snippetId
        // this.props.findSnippetById(snippetId)
        // console.log("Mount for snippet:", snippetId)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    };

    render () {
        {
            console.log("Hello from create snippet!");
        }
        {
            console.log(this.props.currentSnippet);
        }
        return (
            <div>
                {
                    this.props.currentSnippet &&
                        <SnippetContainer
                            snippet={this.props.currentSnippet}
                            create={true}
                            editLocalSnippet={this.props.editLocalSnippet}
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
    createSnippetForCreator: (creatorId, snippet) => {
        console.log("Container!", creatorId);
        createSnippetForCreator(dispatch, creatorId, snippet)
    },
    createLocalSnippet: (snippet) => {createLocalSnippet(dispatch, snippet)},
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SingleSnippetContainer)
