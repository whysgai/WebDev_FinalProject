import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {connect} from "react-redux";
import {findAllUsers} from "../Actions/UserActions";
import {findAllSnippets} from "../Actions/SnippetActions";

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
})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)
(SnippetSearchComponent)
