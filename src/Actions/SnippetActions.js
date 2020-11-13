import snippetServices from "../services/snippetServices";

export const CREATE_SNIPPET = "CREATE_SNIPPET"
export const FIND_ALL_SNIPPETS = "FIND_ALL_SNIPPETS"

export const createSnippet = (dispatch) =>
    snippetServices.createSnippet()
        .then(snippet => dispatch({
                                      type: CREATE_SNIPPET,
                                      snippet}
                                      ))

    export const findAllSnippets = (dispatch) =>
    snippetServices.findAllSnippets()
        .then(snippets => dispatch({
                                      type: FIND_ALL_SNIPPETS,
                                      snippets: snippets}
        ))


