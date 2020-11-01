import UserService from "./UserService";

// export const LOGIN_GITHUB = "LOGIN_GITHUB"
export const GET_GISTS = "GET_GISTS"
export const GET_GIST = "GET_GIST"

// export const loginGithub = (dispatch) =>
//     UserService.loginToGithub()
//         .then(response => dispatch({type: LOGIN_GITHUB, response}))

export const getGistsForUser = (dispatch) =>
    UserService.getGistsForUser()
        .then(response => dispatch({type: GET_GISTS, response}))

export const getGistById = (dispatch) =>
    UserService.getGistById()
        .then(response => dispatch({type: GET_GIST, response}))