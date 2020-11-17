import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import SnippetSearchComponent from "../Components/Search/SnippetSearchComponent";
import {connect} from "react-redux";
import {findAllUsers} from "../Actions/UserActions";

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    gists: state.gistReducer.gists,
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    getGistsForUser: () => getGistsForUser(dispatch),
    getGistById: () => getGistById(dispatch),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    findAllUsers: () => findAllUsers(dispatch),
})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)
(SnippetSearchComponent)
