import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {connect} from "react-redux";
import {findAllUsers} from "../Actions/UserActions";
import {findAllSnippets, searchSnippetsByTags} from "../Actions/SnippetActions";

class SnippetSearchContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        let terms = this.props.match.params.terms;
        if (terms) {
            this.props.searchSnippetsByTags(terms);
        }
    }

    render () {
        return (
            <div>
                <SnippetSearchComponent snippets={this.props.snippets}/>
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
