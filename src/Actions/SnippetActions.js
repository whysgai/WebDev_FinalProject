import snippetServices from "../services/snippetServices";

export const CREATE_SNIPPET = "CREATE_SNIPPET";
export const DELETE_SNIPPET = "DELETE_SNIPPET";
export const FIND_SNIPPET = "FIND_SNIPPET";
export const FIND_ALL_SNIPPETS = "FIND_ALL_SNIPPETS";
export const FIND_ALL_PUBLIC_SNIPPETS = "FIND_ALL_PUBLIC_SNIPPETS";
export const UPDATE_LOCAL_SNIPPET = "UPDATE_LOCAL_SNIPPET";
export const EDIT_LOCAL_SNIPPET = "EDIT_LOCAL_SNIPPET"
export const SEARCH_SNIPPET = "SEARCH_SNIPPET";
export const ADD_TAG = "ADD_TAG"
export const REMOVE_TAG = "REMOVE_TAG"

export const createSnippet = (dispatch, snippet) =>
    snippetServices.createSnippet(snippet)
        .then(snippet => dispatch({
                                      type: CREATE_SNIPPET,
                                      snippet
                                  }
        ))

// export const createSnippetForCreator = (dispatch, creator, snippet) =>
//     snippetServices.createSnippet(snippet)
//         .then(snippet => {
//                 dispatch({
//                     type: CREATE_SNIPPET,
//                     snippet
//                 });
//             }
//
//         )

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
    console.log("Changed snippet ACTION", snippet);
    dispatch({
        type: EDIT_LOCAL_SNIPPET,
        snippet
    })
}

export const updateSnippet = (dispatch, snippet) =>
    snippetServices.updateSnippet(snippet)

export const deleteSnippet = (dispatch, snippetId) =>
    snippetServices.deleteSnippet(snippetId)
        .then(snippet => dispatch({
                                      type: DELETE_SNIPPET,
                                      snippetId
                                  }
        ))


export const findAllSnippets = (dispatch) =>
    snippetServices.findAllSnippets()
        .then(snippets => dispatch({
                                       type: FIND_ALL_SNIPPETS,
                                       snippets: snippets
                                   }
        ))

export const searchSnippetsByTags = (dispatch, tags) =>
    snippetServices.searchSnippetsByTags(tags)
        .then(snippets => dispatch({
                                        type: SEARCH_SNIPPET,
                                        snippets: snippets
        }))

export const findAllPublicSnippets = (dispatch) =>
    snippetServices.findAllPublicSnippets()
        .then(snippets => dispatch({
                                       type: FIND_ALL_PUBLIC_SNIPPETS,
                                       snippets: snippets
                                   }
        ))

export const findSnippetById = (dispatch, snippetId) =>
    snippetServices.findSnippetById(snippetId)
        .then(snippet => dispatch({
                                        type: FIND_SNIPPET,
                                        snippet: snippet
                                    }
        ))


