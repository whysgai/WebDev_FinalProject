import React from "react";
import SnippetContainer from "./SnippetContainer";
import {
    addTagToSnippet, deleteSnippet,
    editLocalSnippet,
    removeTagFromSnippet,
    updateSnippet
} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";

class ImportGistContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            requested: false
        };
    }

    componentDidMount() {

        // const snippetId = this.props.match.params.snippetId
        // this.props.findSnippetById(snippetId)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    };

    importGist() {
        // clear reducer snippets
        // call get snippet action
        // set requested to true
        alert("Import!");
    };

    render () {
        return (
            <div>
                {
                    console.log("Active user from import gist container", this.props.activeUser)
                }
                {
                    console.log("Current snippet from import gist container", this.props.currentSnippet)
                }
                {
                    (!this.state.requested) &&
                        <div className="card col-12">
                            <div className="card-body">
                                <div className="row mt-4">
                                    <label className="col-form-label d-none" htmlFor="importgistid">
                                        Import a Gist From GitHub
                                    </label>
                                    <div className="input-group col-12">
                                        <input
                                            id="importgistid"
                                            className="form-control col-12"
                                            placeholder="Enter the ID of the Git Hub Gist"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-success"
                                                type="button"
                                                onClick={() => this.importGist()}>Import
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                {
                    (this.props.currentSnippet && this.state.requested) &&
                        <SnippetContainer
                            snippet={this.props.currentSnippet}
                            edit={true}
                            singleview={true}
                            editLocalSnippet={this.props.editLocalSnippet}
                            updateSnippet={this.props.updateSnippet}
                            addTagToSnippet={this.props.addTagToSnippet}
                            removeTagFromSnippet={this.props.removeTagFromSnippet}
                            deleteSnippet={this.props.deleteSnippet}
                            activeUser={this.props.activeUser}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.snippets[0],
    gists: state.gistReducer.gists,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    updateSnippet: (snippet) => updateSnippet(dispatch, snippet),
    addTagToSnippet: (tag) => {
        addTagToSnippet(dispatch, tag)
    },
    removeTagFromSnippet: (tag) => {
        removeTagFromSnippet(dispatch, tag)
    },
    deleteSnippet: (snippetId) => deleteSnippet(dispatch, snippetId),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl)
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ImportGistContainer)
