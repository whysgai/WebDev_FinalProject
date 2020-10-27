const url = "https://github.com/login/oauth/authorize"
const client_id ="be6df06a30f90f7386f9" //WC registered an OAuth app with github?
const redirect_uri = "localhost:3000"
const login =""
const scope = "gist"
const state = "thisisabadsatestring"

export const loginToGithub = () =>
    fetch(`${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`)
        .then(response => response.json())


export default {loginToGithub}