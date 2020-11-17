import UserService from "../services/GistService";

// export const LOGIN_GITHUB = "LOGIN_GITHUB"
import GistService from "../services/GistService";

export const GET_GISTS = "GET_GISTS"
export const GET_GIST = "GET_GIST"
export const GET_FILE = "GET_FILE"

export const getGistsForUser = (dispatch) =>
    GistService.getGistsForUser()
        .then(response => dispatch({type: GET_GISTS, response}))

export const getGistById = (dispatch) =>
    GistService.getGistById()
        .then(response => dispatch({type: GET_GIST, response}))

export const getGistFile = (dispatch, fileUrl) =>
    GistService.getGistFile(fileUrl)

    .then(gistfile => dispatch({type: GET_FILE, gistfile}))

