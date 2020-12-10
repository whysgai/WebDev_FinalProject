import React from "react";
import SnippetContainer from "./SnippetContainer";
import {
    addTagToSnippet, createLocalSnippet, createSnippet, deleteSnippet,
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
            requested: false,
            importSnippetTemplate: {
                id: "",
                gistId: "",
                creator: "",
                dateCreated: "",
                lastModified: "",
                title: "",
                description: "",
                codeText: "",
                tags: [],
                likes: [],
                shareableURL: "",
                privacy: false,
                recommended: false
            }
        };
    }

    componentDidMount() {

        // const snippetId = this.props.match.params.snippetId
        // this.props.findSnippetById(snippetId)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    };

    importGist(gistId) {
        // clear reducer snippets
        // call get snippet action
        // set requested to true
        // alert("Import " + gistId);
        this.props.getGistById(gistId)
            .then(() => {
                console.log("Got gist", this.props.gist)
                let files = Object.keys(this.props.gist.files)
                //console.log("Gist's files", files)
                let fileName = files[0]
                //console.log("First file", fileName)
                let file = this.props.gist.files[fileName]
                //console.log("File:", file)
                this.props.getGistFile(file.raw_url).then(() => {
                    this.state.importSnippetTemplate.gistId = gistId;
                    this.state.importSnippetTemplate.creator = this.props.activeUser.username;
                    this.state.importSnippetTemplate.title = fileName;
                    this.state.importSnippetTemplate.description = this.props.gist.description;
                    this.state.importSnippetTemplate.codeText = this.props.gistContent;
                    this.props.createLocalSnippet(this.state.importSnippetTemplate);
                    this.setState({
                        requested: true
                    })
                    // this.state.
                })
            })

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
                        <div className="card col-12 mt-3">
                            <div className="card-body">
                                <div className="row">
                                    <label className="col-form-label d-none" htmlFor="importgistid">
                                        Import a Gist From GitHub
                                    </label>
                                    <div className="input-group col-12">
                                        <input
                                            id="importgistid"
                                            className="form-control col-12"
                                            placeholder="Enter the ID of a GitHub Gist"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-success"
                                                type="button"
                                                onClick={() => this.importGist(document.getElementById("importgistid").value)}>Import
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
                            create={true}
                            singleview={true}
                            editLocalSnippet={this.props.editLocalSnippet}
                            updateSnippet={this.props.updateSnippet}
                            addTagToSnippet={this.props.addTagToSnippet}
                            removeTagFromSnippet={this.props.removeTagFromSnippet}
                            deleteSnippet={this.props.deleteSnippet}
                            createSnippet={this.props.createSnippet}
                            activeUser={this.props.activeUser}
                        />
                }
            </div>
        )
    }
};

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.snippets[0],
    gist: state.gistReducer.gist,
    gistContent: state.gistReducer.file,
    gists: state.gistReducer.gists,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    createSnippet: (snippet) => createSnippet(dispatch, snippet),
    createLocalSnippet: (snippet) => {console.log("Creating from import", snippet); createLocalSnippet(dispatch, snippet)},
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    updateSnippet: (snippet) => updateSnippet(dispatch, snippet),
    addTagToSnippet: (tag) => {
        addTagToSnippet(dispatch, tag)
    },
    removeTagFromSnippet: (tag) => {
        removeTagFromSnippet(dispatch, tag)
    },
    deleteSnippet: (snippetId) => deleteSnippet(dispatch, snippetId),
    getGistById: (gistId) => getGistById(dispatch, gistId),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl)
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ImportGistContainer)
