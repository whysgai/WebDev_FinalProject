import React from "react";
import SnippetContainer from "./SnippetContainer";
import {findSnippetById} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {findAllUsers} from "../Actions/UserActions";

class SingleSnippetContainer extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        const snippetId = this.props.match.params.snippetId
        this.props.findSnippetById(snippetId)
        console.log("Mount for snippet:", snippetId)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    };

    render () {

        return (
            <div>
                {
                    this.props.snippet &&
                        <SnippetContainer
                            snippet={this.props.snippet}
                            edit={true}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippet: state.snippetReducer.snippet,
    snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetById: (snippetId) => findSnippetById(dispatch, snippetId),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SingleSnippetContainer)
