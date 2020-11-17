import React from "react";
import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";

class SnippetSearchComponent extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.findAllSnippets()
    };

    componentDidUpdate() {
        // this.props.findAllSnippets()
    };

    render () {
        return (
                <div>
                    <h2>SnippetSearchHere</h2>
                    <button onClick={this.props.getGistsForUser}>Get User Gists</button>
                    <button onClick={() => console.log(this.props.gists)}>Log Gists</button>
                    <button onClick={() => this.props.findAllUsers().then(console.log(this.props.users))}>Log Users</button>

                    <SnippetSearchBarComponent
                        findAllSnippets={this.props.findAllSnippets}
                        snippets={this.props.snippets}
                    />
                    <SnippetSearchListComponent snippets={this.props.snippets}/>
                </div>
            )

    }

}

export default SnippetSearchComponent
