import {
    CREATE_SNIPPET, DELETE_SNIPPET,
    FIND_ALL_PUBLIC_SNIPPETS,
    FIND_ALL_SNIPPETS,
    FIND_SNIPPET,
    EDIT_LOCAL_SNIPPET,
    ADD_TAG,
    REMOVE_TAG
} from '../Actions/SnippetActions'

const initialState = {
    snippets: [],
    currentSnippet: null,
    user: {id:"uid001", username:"Ms. Pac-Man"}

}

const snippetReducer = (state = initialState, action = action) => {
    switch(action.type) {
        case CREATE_SNIPPET:
            return {
                ...state,
                currentSnippet: action.snippet

            }
        case EDIT_LOCAL_SNIPPET:
            return {
                ...state,
                currentSnippet: action.snippet
            }
        case ADD_TAG:
            if (action.snippet.tags === "" || action.snippet.tags === null) {
                action.snippet.tags = action.tag
            } else {
                action.snippet.tags = action.snippet.tags + "," + action.tag
            }
            return {
                ...state,
                currentSnippet: {
                    ...state.currentSnippet,
                    tags: action.snippet.tags
                }
            }
        case REMOVE_TAG:
            return state
        case DELETE_SNIPPET:
            return {
                ...state,
                snippets: state.snippets.filter(snippet => snippet.id !== action.snippetId)
            }
        case FIND_ALL_SNIPPETS:
            return {
                ...state,
                snippets: action.snippets
            }
        case FIND_ALL_PUBLIC_SNIPPETS:
            return {
                ...state,
                snippets: action.snippets
            }
        case FIND_SNIPPET:
            return {
                ...state,
                currentSnippet: action.snippet
            }
        default:
            return state;
    }
}

export default snippetReducer;
