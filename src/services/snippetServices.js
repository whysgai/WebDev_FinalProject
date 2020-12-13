const SNIPPET_URL = "https://cs5610-project-java-server.herokuapp.com/api/snippets"
const CREATOR_URL = "https://cs5610-project-java-server.herokuapp.com/api/creators"
const SNIPPET_NODE_URL = "https://cs5610-server-node-project.herokuapp.com/api"
const SNIPPET_NODE_URL_2 = "https://cs5610-node-v2-group3.herokuapp.com/api"
const LOCAL_POST = "http://localhost:3003/api"


export const findSnippetById = (snippetId) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/id/${snippetId}`)
        .then(response => response.json());


export const findSnippetsByCreator = (username) =>
    fetch(`${SNIPPET_NODE_URL_2}/${username}/snippets`)
        .then(response => response.json());


export const findAllSnippets = () =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets`)
        .then(response => response.json());


export const findRecommendedSnippets = () =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/starred`)
        .then(response => response.json());


export const findFavoriteSnippets = (username) =>
    fetch(`${SNIPPET_NODE_URL_2}/${username}/likes`)
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


export const createSnippet = (snippet) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets`, {
        method: "POST",
        body: JSON.stringify(snippet),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json());


export const updateSnippet = (newSnippet) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/id/${newSnippet._id}`, {
        method: "PUT",
        body: JSON.stringify(newSnippet),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json());


export const deleteSnippet = (snippetId) =>
    fetch(`${SNIPPET_NODE_URL_2}/snippets/id/${snippetId}`, {
        method: "DELETE"
    })

export default {
    createSnippet,
    updateSnippet,
    findSnippetById,
    findSnippetsByCreator,
    findAllSnippets,
    findAllPublicSnippets,
    deleteSnippet,
    searchSnippetsByTags,
    findRecommendedSnippets,
    findFavoriteSnippets
}

