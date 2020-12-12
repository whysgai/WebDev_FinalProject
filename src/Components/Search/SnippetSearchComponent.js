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
        // this.props.findAllSnippets()
    };



    render () {
        return (
                <div>
                    {/*{console.log("Active user from search comp: ", this.props.activeUser)}*/}
                    <h2 className="mt-3 m-3">Search for Snippets</h2>
                    {/*<button*/}
                    {/*    className="btn btn-outline-secondary mr-1"*/}
                    {/*    onClick={this.props.getGistsForUser}>Get User Gists</button>*/}
                    {/*<button*/}
                    {/*    className="btn btn-outline-secondary mr-1"*/}
                    {/*    onClick={() => console.log(this.props.gists)}>Log Gists</button>*/}
                    {/*<button*/}
                    {/*    className="btn btn-outline-secondary"*/}
                    {/*    onClick={() => this.props.findAllUsers().then(console.log(this.props.users))}>Log Users</button>*/}
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
