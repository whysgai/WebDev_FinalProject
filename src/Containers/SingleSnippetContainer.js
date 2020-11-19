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
        const snippetId = this.props.match.params.snippetId
        if (snippetId && snippetId !== prevProps.match.params.snippetId) {
            const snippetId = this.props.match.params.snippetId
            this.props.findSnippetById(snippetId)
            console.log("Update!")
        }
        if (this.props.snippet !== prevProps.snippet) {
            const snippetId = this.props.match.params.snippetId
            this.props.findSnippetById(snippetId)
            console.log("Update!")
        }
    };

    render () {

        return (
            <div>
                <h1>Static Message</h1>
                {
                    console.log("Static log message!")
                }
                <h2>{this.props.snippet && this.props.snippet}</h2>

                {
                    console.log("SingleSnippetCon: ", this.props.snippet)
                }
                {
                    this.props.snippet &&
                        <SnippetContainer
                            snippet={this.props.snippet}
                            // snippet={
                            //     {
                            //         id: 1,
                            //         gistId: "1a",
                            //         creator: "somedude",
                            //         dateCreated: "Yesterday",
                            //         lastModified: "Today",
                            //         title: "LocalTestSnippet0",
                            //         description: "A locally saved snippet to demo",
                            //         codeText: "console.log('Hello, world.')",
                            //         tags: 'JavaScript,Output',
                            //         shareableURL: "",
                            //         privacy: false,
                            //         recommended: false
                            //     }
                            // }
                            edit={true}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
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
