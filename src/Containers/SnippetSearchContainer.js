import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {connect} from "react-redux";
import {findAllUsers} from "../Actions/UserActions";
import {findAllSnippets, searchSnippetsByTags} from "../Actions/SnippetActions";

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
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
(SnippetSearchComponent)
