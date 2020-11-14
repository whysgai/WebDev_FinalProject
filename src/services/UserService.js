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


export default {getGistsForUser, getGistById, getGistFile}