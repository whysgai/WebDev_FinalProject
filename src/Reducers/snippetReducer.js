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
                snippets: [...state.snippets, action.snippet]
            }
        case DELETE_SNIPPET:
            return {
                snippets: state.snippets.filter(snippet => snippet.id !== action.snippetId)
            }
        case FIND_ALL_SNIPPETS:
            return {
                snippets: action.snippets
            }
        case FIND_ALL_PUBLIC_SNIPPETS:
            return {
                snippets: action.snippets
            }
        case FIND_SNIPPET:
            console.log("Reducer!");
            console.log(action.snippet);
            // let array = [];
            // array.push(action.snippet)
            return {
                ...state,
                snippet: action.snippet
            }
        default:
            return state;
    }
}

export default snippetReducer;
