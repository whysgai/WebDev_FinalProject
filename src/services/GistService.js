// const username = "group3person"
// const password = "nicsalehwill3"

const gistId = "3ca80de89acfaac051414ac0c308359b"

const headers = {
    "Authorization" : `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

export const getGistsForUser = () =>
    fetch("https://api.github.com/gists",
          {"method":"GET",
          "headers": headers})
        .then(response => response.json())

export const createGistForUser = (token) =>
    fetch("https://api.github.com/gists", {
            method: "POST",
            body: JSON.stringify( {
                "description": "Hello World Example",
                "public": true,
                "files": {
                    "hello_world_python.txt": {
                        "content": "Run `python hello_world.py` to print Hello World"
                    }
                }
            }),
            headers: {
                "Authorization" : `Token ${token}`
            }})
        .then(response => response.json())

export const updateGist = (gistId, title, description, content) =>
    fetch(`https://api.github.com/gists/${gistId}`, {
        method: "PATCH",
        body: JSON.stringify( {
            "description": `${description}`,
            "public": true,
            "files": {
                "snippet": {
                    "content": `${content}`
                }
            }
        }),
        headers: headers})
        .then(response => response.json())

export const deleteGist = (id) =>
    fetch(`https://api.github.com/gists/${id}`,
        {method:"DELETE",
            headers: headers
        })

export const getGistById = () =>
    fetch(`https://api.github.com/gists/${gistId}`,
        {"method":"GET",
            "headers": headers})
        .then(response => response.json())

export const getGistFile = (fileUrl) =>
    fetch(`${fileUrl}`,
        // {"method":"GET",
        //     "headers": headers}
            )
        .then(response => response.text())


export default {getGistsForUser, getGistById, getGistFile, createGistForUser, deleteGist, updateGist}
