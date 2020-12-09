import {
    CREATE_SNIPPET, DELETE_SNIPPET,
    FIND_ALL_PUBLIC_SNIPPETS,
    FIND_ALL_SNIPPETS,
    FIND_SNIPPET,
    SEARCH_SNIPPET,
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
            console.log("Reducer setting current snippet", action.snippet)
            return {
                ...state,
                currentSnippet: action.snippet
            };
        case EDIT_LOCAL_SNIPPET:
            return {
                ...state,
                currentSnippet: action.snippet
            };
        case ADD_TAG:
            let tags = []
            if (state.currentSnippet.tags !== null) {
                tags = state.currentSnippet.tags;
            }
            tags.push(action.tag);
            return {
                ...state,
                currentSnippet: {
                    ...state.currentSnippet,
                    tags: tags
                }
            };
        case REMOVE_TAG:
            return {
                ...state,
                currentSnippet: {
                    ...state.currentSnippet,
                    tags: state.currentSnippet.tags.filter(tag => action.tag !== tag)
                }
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
                currentSnippet: action.snippet
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
