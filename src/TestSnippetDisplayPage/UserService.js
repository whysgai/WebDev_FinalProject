const url = "https://github.com/login/oauth/authorize"
const client_id ="be6df06a30f90f7386f9" //WC registered an OAuth app with github?
const redirect_uri = "localhost:3000"
const login = ""
const scope = "gist"
const state = "thisisabadsatestring"

const gistId = "3ca80de89acfaac051414ac0c308359b"

const username = "group3person"
const password = "nicsalehwill3"

const headers = {
    "Authorization" : `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

export const loginToGithub = () =>
    fetch(`${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`)
        .then(response => response.json())

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