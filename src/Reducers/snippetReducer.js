import {
    CREATE_SNIPPET, DELETE_SNIPPET,
    FIND_ALL_PUBLIC_SNIPPETS,
    FIND_ALL_SNIPPETS,
    FIND_SNIPPET
} from '../Actions/SnippetActions'

const initialState = {
    snippets: [],
    snippet: {},
    user: {id:"uid001", username:"Ms. Pac-Man"}

}

const snippetReducer = (state = initialState, action = action) => {
    switch(action.type) {
        case CREATE_SNIPPET:
            return {
                ...state,
                snippets: [...state.snippets, action.snippet]
            }
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
                snippet: action.snippet
            }
        default:
            return state;
    }
}

export default snippetReducer;
