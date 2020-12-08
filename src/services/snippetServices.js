const SNIPPET_URL = "https://cs5610-project-java-server.herokuapp.com/api/snippets"
const CREATOR_URL = "https://cs5610-project-java-server.herokuapp.com/api/creators"
const SNIPPET_NODE_URL = "https://cs5610-server-node-project.herokuapp.com/api"
const SNIPPET_NODE_URL_2 = "https://cs5610-node-v2-group3.herokuapp.com/api"
const LOCAL_POST = "http://localhost:3003/api"

// export const findSnippetById = (snippetId) =>
//     fetch(`${SNIPPET_NODE_URL}/snippets/id/${snippetId}`)
//         .then(response => response.json());

export const findSnippetById = (snippetId) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/id/${snippetId}`)
        .then(response => response.json());

export const findSnippetByGistId = (gistId) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/gistid/${gistId}`)
        .then(response => response.json());

export const findAllSnippets = () =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets`)
        .then(response => response.json());

export const findAllPublicSnippets = () =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/public`)
        .then(response => response.json());

export const findAllStarredSnippets = () =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/starred`)
        .then(response => response.json());

export const searchSnippetsByTags = (tags) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/tags/${tags}`)
    .then(response => response.json());

// // Not working yet.
// export const searchAllPublicSnippets = () =>
//     fetch(`${SNIPPET_URL}/snippets/public`)
//         .then(response => response.json());

// export const findSnippetsForCreator = (creator) =>
//     fetch(`${CREATOR_URL}/${creator}/snippets`)
//         .then(response => response.json());

export const createSnippet = (snippet) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets`, {
        method: "POST",
        body: JSON.stringify(snippet),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json());

// export const createSnippetForCreator = (creator, snippet) => {
//     console.log("Post to node server", "CreatorId:", creator, "Snippet:", snippet);
//     fetch(`${SNIPPET_URL}/snippets/${creator}/snippets`, {
//         method: "POST",
//         body: JSON.stringify(snippet),
//         headers: {
//             "content-type": "application/json"
//         }
//     })
//         .then(response => response.json());
// }

export const updateSnippet = (newSnippet) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/id/${newSnippet._id}`, {
        method: "PUT",
        body: JSON.stringify(newSnippet),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json());

export const deleteSnippet = (snippetId) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/${snippetId}`, {
        method: "DELETE"
    })

export default {
    createSnippet,
    // createSnippetForCreator,
    updateSnippet,
    findSnippetById,
    findAllSnippets,
    findAllPublicSnippets,
    deleteSnippet,
    searchSnippetsByTags
}

