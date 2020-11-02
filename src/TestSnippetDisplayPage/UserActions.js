import UserService from "./UserService";

// export const LOGIN_GITHUB = "LOGIN_GITHUB"
export const GET_GISTS = "GET_GISTS"
export const GET_GIST = "GET_GIST"
export const GET_FILE = "GET_FILE"

// export const loginGithub = (dispatch) =>
//     UserService.loginToGithub()
//         .then(response => dispatch({type: LOGIN_GITHUB, response}))

export const getGistsForUser = (dispatch) =>
    UserService.getGistsForUser()
        .then(response => dispatch({type: GET_GISTS, response}))

export const getGistById = (dispatch) =>
    UserService.getGistById()
        .then(response => dispatch({type: GET_GIST, response}))

export const getGistFile = (dispatch, fileUrl) =>
    UserService.getGistFile(fileUrl)
    .then(gistfile => dispatch({type: GET_FILE, gistfile}))