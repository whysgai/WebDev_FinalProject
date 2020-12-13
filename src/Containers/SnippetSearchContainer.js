import React from 'react'
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {connect} from "react-redux";
import {
    searchSnippetsByTags,
    updateSearchTerms
} from "../Actions/SnippetActions";
import {getCookie} from "../config/db";
import {getUserByUID} from "../Actions/UserActions";

class SnippetSearchContainer extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID).then(() => {
            if (this.props.match.params.terms) {
                this.props.updateSearchTerms(this.props.match.params.terms)
                this.props.searchSnippetsByTags(this.props.match.params.terms);
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.terms !== prevProps.match.params.terms) {
            let fireUID = getCookie("uid")
            this.props.getUserByUID(fireUID).then(() => {
                this.props.updateSearchTerms(this.props.match.params.terms);
                this.props.searchSnippetsByTags(this.props.match.params.terms);
            })
        }
    }

    render () {
        return (
            <div>
                <SnippetSearchComponent
                    snippets={this.props.snippets}
                    terms={this.props.terms}
                    updateSearchTerms={this.props.updateSearchTerms}
                    activeUser={this.props.activeUser}
                />
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    terms: state.snippetReducer.terms,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    getUserByUID: (uid) => getUserByUID(dispatch, uid),
    searchSnippetsByTags: (tags) => searchSnippetsByTags(dispatch, tags),
    updateSearchTerms: (terms) => updateSearchTerms(dispatch, terms)
})

export default connect (stateToPropertyMapper, propertyToDispatchMapper)
(SnippetSearchContainer)
