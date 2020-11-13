import snippetServices from "../services/snippetServices";

export const CREATE_SNIPPET = "CREATE_SNIPPET"

export const createSnippet = (dispatch) =>
    snippetServices.createSnippet()
        .then(snippet => dispatch({
                                      type: CREATE_SNIPPET,
                                      snippet}
                                      ))

