import React from "react";
import SnippetContainer from "./SnippetContainer";
import {createSnippet, findSnippetById} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class SingleSnippetContainer extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


    constructor() {
        super();
        this.state = {
            snippetTemplate: {
                id: 0,
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
        this.props.createLocalSnippet(snippetTemplate)
        const snippetId = this.props.match.params.snippetId
        this.props.findSnippetById(snippetId)
        console.log("Mount for snippet:", snippetId)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    };

    render () {
        {
            console.log("Hello from create snippet!");
        }
        return (
            <div>
                {
                    this.state.snippetTemplate &&
                        <SnippetContainer
                            snippet={this.state.snippetTemplate}
                            create={true}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    // snippet: state.snippetReducer.snippet,
    // snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    createLocalSnippet: (snippet) => createLocalSnippet(dispatch, snippet),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SingleSnippetContainer)
