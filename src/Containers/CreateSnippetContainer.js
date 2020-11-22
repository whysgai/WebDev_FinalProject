import React from "react";
import SnippetContainer from "./SnippetContainer";
import {createSnippet, createLocalSnippet, findSnippetById, editLocalSnippet} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class SingleSnippetContainer extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


    constructor() {
        super();
        this.state = {
            snippetTemplate: {
                gistId: "newGist",
                creator: "UserFromReducer",
                dateCreated: "Yesterday",
                lastModified: "Today",
                title: "Snippet title",
                description: "Description and context of code",
                codeText: "Add your snippet here...",
                tags: '',
                shareableURL: "",
                privacy: false,
                recommended: false
            },
        };
    }

    componentDidMount() {
        this.props.createLocalSnippet(this.state.snippetTemplate)
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
                            createSnippet={this.props.createSnippet}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.currentSnippet,
    // snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    createSnippet: (snippet) => createSnippet(dispatch, snippet),
    createLocalSnippet: (snippet) => {console.log("Container!", snippet); createLocalSnippet(dispatch, snippet)},
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SingleSnippetContainer)
