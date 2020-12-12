import React from 'react'
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {connect} from "react-redux";
import {findAllUsers} from "../Actions/UserActions";
import {findAllSnippets, searchSnippetsByTags, updateSearchTerms} from "../Actions/SnippetActions";

class SnippetSearchContainer extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        if (this.props.match.params.terms) {
            this.props.updateSearchTerms(this.props.match.params.terms)
            this.props.searchSnippetsByTags(this.props.match.params.terms);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.terms !== prevProps.match.params.terms) {
            this.props.updateSearchTerms(this.props.match.params.terms)
            this.props.searchSnippetsByTags(this.props.match.params.terms);
        }
    }

    render () {
        return (
            <div>
                <SnippetSearchComponent
                    snippets={this.props.snippets}
                    terms={this.props.terms}
                    searchSnippetsByTags={this.props.searchSnippetsByTags}
                    updateSearchTerms={this.props.updateSearchTerms}
                />
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    terms: state.snippetReducer.terms,
    gists: state.gistReducer.gists,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllSnippets: () => findAllSnippets(dispatch),
    getGistsForUser: () => getGistsForUser(dispatch),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
    searchSnippetsByTags: (tags) => searchSnippetsByTags(dispatch, tags),
    updateSearchTerms: (terms) => updateSearchTerms(dispatch, terms)
})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)
(SnippetSearchContainer)
