import {
    CREATE_SNIPPET,
    FIND_SNIPPETS,
    FIND_SNIPPET,
    EDIT_LOCAL_SNIPPET,
    EDIT_LOCAL_TEXT,
    ADD_TAG,
    REMOVE_TAG,
    DELETE_SNIPPET,
    UPDATE_TERMS
} from '../Actions/SnippetActions'

const _ = require('lodash');

const initialState = {
    snippets: [],
    text: "",
    terms: "",
}

const snippetReducer = (state = initialState, action = action) => {
    switch(action.type) {
        case CREATE_SNIPPET:
            return {
                ...state,
                snippets: [action.snippet]
            };
        case EDIT_LOCAL_SNIPPET:
            return {
                ...state,
                snippets: _.cloneDeep(
                    state.snippets.map(snippet =>
                        snippet._id === action.snippet._id ? action.snippet : snippet
                    )
                )
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
        case FIND_SNIPPETS:
            return {
                ...state,
                snippets: action.snippets
            };
        case FIND_SNIPPET:
            return {
                ...state,
                snippets: [action.snippet]
            }
        case UPDATE_TERMS:
            return {
                ...state,
                terms: action.terms
            }
        default:
            return state;
    }
}

export default snippetReducer;
