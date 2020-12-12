import React from 'react'
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {connect} from "react-redux";
import {findAllUsers} from "../Actions/UserActions";
import {findAllSnippets, searchSnippetsByTags} from "../Actions/SnippetActions";

class SnippetSearchContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            terms: null
        };
    }

    componentDidMount() {
        // let terms = this.props.match.params.terms;
        if (this.props.match.params.terms) {
            console.log("MOUNT there are terms, so we search", this.props.match.params.terms)
            // this.setState({
            //     ...this.state,
            //     terms: this.props.match.params.terms
            // })
            this.state.terms = this.props.match.params.terms
            console.log("Terms set in state are now", this.state.terms)
            this.props.searchSnippetsByTags(this.state.terms);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.terms !== prevProps.match.params.terms) {
            console.log("UPDATE there are terms, so we search", this.props.match.params.terms)
            // this.setState({
            //     ...this.state,
            //     terms: this.props.match.params.terms
            // })
            this.state.terms = this.props.match.params.terms
            console.log("Terms set in state are now", this.state.terms)
            this.props.searchSnippetsByTags(this.state.terms);
        }
    }

    render () {
        return (
            <div>
                <SnippetSearchComponent
                    snippets={this.props.snippets}
                    terms={this.state.terms}
                    searchSnippetsByTags={this.props.searchSnippetsByTags}
                />
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllSnippets: () => findAllSnippets(dispatch),
    getGistsForUser: () => getGistsForUser(dispatch),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
    searchSnippetsByTags: (tags) => {console.log(tags); searchSnippetsByTags(dispatch, tags)}
})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)
(SnippetSearchContainer)
