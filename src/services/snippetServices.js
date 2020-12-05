const SNIPPET_URL = "https://cs5610-project-java-server.herokuapp.com/api/snippets"
const CREATOR_URL = "https://cs5610-project-java-server.herokuapp.com/api/creators"
const SNIPPET_NODE_URL = "https://cs5610-server-node-project.herokuapp.com/api"
const LOCAL_POST = "http://localhost:3003/api"

// export const findSnippetById = (snippetId) =>
//     fetch(`${SNIPPET_NODE_URL}/snippets/id/${snippetId}`)
//         .then(response => response.json());

export const findSnippetById = (snippetId) =>
    fetch(`${SNIPPET_URL}/${snippetId}`)
        .then(response => response.json());

export const findAllSnippets = () =>
    fetch(SNIPPET_URL)
        .then(response => response.json());

export const findAllPublicSnippets = () =>
    fetch(`${SNIPPET_URL}/public`)
        .then(response => response.json());

export const searchSnippetsByTags = (tags) =>
    fetch(`${SNIPPET_URL}/search/snippets/${tags}`)
    .then(response => response.json());

// Not working yet.
export const searchAllPublicSnippets = () =>
    fetch(`${SNIPPET_URL}/snippets/public`)
        .then(response => response.json());

export const findSnippetsForCreator = (creatorId) =>
    fetch(`${CREATOR_URL}/${creatorId}/snippets`)
        .then(response => response.json());

export const createSnippet = (snippet) =>
    fetch(`${SNIPPET_NODE_URL}/snippets`, {
        method: "POST",
        body: JSON.stringify(snippet),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json());

export const createSnippetForCreator = (creatorId, snippet) => {
    console.log("Post to node server", "CreatorId:", creatorId, "Snippet:", snippet);
    fetch(`${SNIPPET_URL}/snippets/${creatorId}/snippets`, {
        method: "POST",
        body: JSON.stringify(snippet),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json());
}

export const updateSnippet = (snippetId, newSnippet) =>
    fetch(`${SNIPPET_URL}/${snippetId}`, {
        method: "PUT",
        body: JSON.stringify(newSnippet),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json());

export const deleteSnippet = (snippetId) =>
    fetch(`${SNIPPET_URL}/${snippetId}`, {
        method: "DELETE"
    })

export default {
    createSnippet,
    createSnippetForCreator,
    updateSnippet,
    findSnippetById,
    findAllSnippets,
    findAllPublicSnippets,
    deleteSnippet,
    searchSnippetsByTags
}

