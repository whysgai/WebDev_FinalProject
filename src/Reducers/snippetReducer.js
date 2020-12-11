import {
    CREATE_SNIPPET, DELETE_SNIPPET,
    FIND_ALL_PUBLIC_SNIPPETS,
    FIND_ALL_SNIPPETS,
    FIND_SNIPPET,
    SEARCH_SNIPPET,
    EDIT_LOCAL_SNIPPET,
    ADD_TAG,
    REMOVE_TAG,
    TOGGLE_LIKE,
    EDIT_LOCAL_TEXT,
    TOGGLE_PRIVACY,
    TOGGLE_RECOMMENDED
} from '../Actions/SnippetActions'
import {whenMapStateToPropsIsMissing} from "react-redux/lib/connect/mapStateToProps";

const _ = require('lodash');

const initialState = {
    snippets: [],
    text: "",
    // user: {id:"uid001", username:"Ms. Pac-Man"}
}

const snippetReducer = (state = initialState, action = action) => {
    switch(action.type) {
        case CREATE_SNIPPET:
            return {
                ...state,
                snippets: [action.snippet]
            };
        case TOGGLE_LIKE:
            let newSnippets = state.snippets.map(
                (snippet) => snippet._id === action.snippet._id ? action.snippet : snippet
            )
            let nextState = {
                ...state,
                snippets: _.cloneDeep(newSnippets)
            }
            return nextState;
        case TOGGLE_PRIVACY:
            return {
                ...state,
                snippets: [{
                    ...state.snippets[0],
                    publicPost: !state.snippets[0].publicPost
                }]
            }
        case TOGGLE_RECOMMENDED:
            return {
                ...state,
                snippets: _.cloneDeep(
                    state.snippets.map(snippet =>
                        snippet._id === action.snippet._id ? action.snippet : snippet
                    )
                )
            }
        case EDIT_LOCAL_SNIPPET:
            return {
                ...state,
                snippets: [action.snippet]
            };
        case EDIT_LOCAL_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TAG:
            let tags = []
            if (state.snippets[0].tags !== null) {
                tags = state.snippets[0].tags;
            }
            tags.push(action.tag);
            return {
                ...state,
                snippets: [{
                    ...state.snippets[0],
                    tags: tags
                }]
            };
        case REMOVE_TAG:
            return {
                ...state,
               snippets: [{
                    ...state.snippets[0],
                    tags: state.snippets[0].tags.filter(tag => action.tag !== tag)
                }]
            };

        case DELETE_SNIPPET:
            return {
                ...state,
                snippets: state.snippets.filter(snippet => snippet._id !== action.snippetId)
            };
        case FIND_ALL_SNIPPETS:
            return {
                ...state,
                snippets: action.snippets
            };
        case FIND_ALL_PUBLIC_SNIPPETS:
            return {
                ...state,
                snippets: action.snippets
            };
        case FIND_SNIPPET:
            return {
                ...state,
                snippets: [action.snippet]
            }
        case SEARCH_SNIPPET:
            return {
                ...state,
            snippets: action.snippets
            };
        default:
            return state;
    }
}

export default snippetReducer;
