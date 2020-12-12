import React from "react";
import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";
import {updateSearchTerms} from "../../Actions/SnippetActions";

class SnippetSearchComponent extends React.Component {
    // snippets, gists, getGistsForUser, users, findAllUsers, findAllSnippets


    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        // this.props.findAllSnippets()
        // console.log("Mount: ", document.getElementById("searchtags").value)
    };

    componentDidUpdate() {
    };



    render () {
        return (
                <div>
                    <h2 className="mt-3 m-3">Search for Snippets</h2>
                    <SnippetSearchBarComponent
                        findAllSnippets={this.props.findAllSnippets}
                        snippets={this.props.snippets}
                        terms={this.props.terms}
                        searchSnippetsByTags={this.props.searchSnippetsByTags}
                        updateSearchTerms={this.props.updateSearchTerms}
                    />
                    <SnippetSearchListComponent snippets={this.props.snippets}/>
                </div>
            )

    }

}

export default SnippetSearchComponent
