import snippetServices from "../services/snippetServices";

export const CREATE_SNIPPET = "CREATE_SNIPPET";
export const DELETE_SNIPPET = "DELETE_SNIPPET";
export const FIND_SNIPPET = "FIND_SNIPPET";
export const EDIT_LOCAL_SNIPPET = "EDIT_LOCAL_SNIPPET"
export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const EDIT_LOCAL_TEXT = "EDIT_LOCAL_TEXT";
export const TOGGLE_RECOMMENDED = "TOGGLE_RECOMMENDED";
export const UPDATE_TERMS = "UPDATE_TERMS";
export const FIND_SNIPPETS = "FIND_SNIPPETS"

export const createSnippet = (dispatch, snippet, text) => {
    snippet.codeText = text
    snippetServices.createSnippet(snippet)
        .then(snippet => dispatch({
                type: CREATE_SNIPPET,
                snippet
            }
        ))
}

export const addTagToSnippet = (dispatch, tag) => {
    dispatch({
        type: ADD_TAG,
        tag
    })
}
export const removeTagFromSnippet = (dispatch, tag) => {
    dispatch({
        type: REMOVE_TAG,
        tag
    })
}
export const createLocalSnippet = (dispatch, snippet) => {
    dispatch({
            type: CREATE_SNIPPET,
            snippet
    })}

export const editLocalSnippet = (dispatch, snippet) => {
    dispatch({
        type: EDIT_LOCAL_SNIPPET,
        snippet
    })
}

export const editLocalText = (dispatch, text) => {
    dispatch({
        type: EDIT_LOCAL_TEXT,
        text
    })
}

export const updateSnippet = (dispatch, snippet, text) => {
    snippet.codeText = text
    snippetServices.updateSnippet(snippet)
}

export const toggleLike = (dispatch, activeUser, likedSnippet) => {
    if (likedSnippet.likes.includes(activeUser.username)) {
        likedSnippet.likes = likedSnippet.likes.filter(user => user !== activeUser.username);
    } else {
        likedSnippet.likes.push(activeUser.username);
    }
    snippetServices.updateSnippet(likedSnippet)
        .then(() => dispatch({
                type: EDIT_LOCAL_SNIPPET,
                snippet: likedSnippet
            }
        ))
}

export const toggleRecommended = (dispatch, snippet) => {
    snippet.recommended = !snippet.recommended;
    snippetServices.updateSnippet(snippet)
        .then(snippet => dispatch({
            type: EDIT_LOCAL_SNIPPET,
            snippet
        }))

}

export const togglePrivacy = (dispatch, snippet) => {
    snippet.publicPost = !snippet.publicPost
    dispatch({
        type: EDIT_LOCAL_SNIPPET,
        snippet
    })
}

export const deleteSnippet = (dispatch, snippetId) =>
    snippetServices.deleteSnippet(snippetId)
        .then(snippet => dispatch({
            type: DELETE_SNIPPET,
            snippetId
        }))

export const findAllSnippets = (dispatch) =>
    snippetServices.findAllSnippets()
        .then(snippets => dispatch({
            type: FIND_SNIPPETS,
            snippets: snippets
        }))

export const findRecommendedSnippets = (dispatch) =>
    snippetServices.findRecommendedSnippets()
        .then(snippets => dispatch({
            type: FIND_SNIPPETS,
            snippets: snippets
        }))

export const searchSnippetsByTags = (dispatch, tags) =>
    snippetServices.searchSnippetsByTags(tags)
        .then(snippets => dispatch({
            type: FIND_SNIPPETS,
            snippets: snippets
        }))

export const findAllPublicSnippets = (dispatch) =>
    snippetServices.findAllPublicSnippets()
        .then(snippets => dispatch({
            type: FIND_SNIPPETS,
            snippets: snippets
        }))

export const findSnippetById = (dispatch, snippetId) =>
    snippetServices.findSnippetById(snippetId)
        .then(snippet => dispatch({
            type: FIND_SNIPPET,
            snippet: snippet
        }))

export const updateSearchTerms = (dispatch, terms) =>
    dispatch({
        type: UPDATE_TERMS,
        terms
    })
