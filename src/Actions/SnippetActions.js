export const CREATE_SNIPPET = "CREATE_SNIPPET"

export const createSnippet = (dispatch, snippet) =>
    dispatch({type: CREATE_SNIPPET, snippet})
