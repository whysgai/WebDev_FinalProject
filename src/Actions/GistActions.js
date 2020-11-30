import UserService from "../services/GistService";
import GistService from "../services/GistService";

// export const LOGIN_GITHUB = "LOGIN_GITHUB"

export const GET_GISTS = "GET_GISTS"
export const CREATE_GIST = "CREATE_GIST"
export const GET_GIST = "GET_GIST"
export const GET_FILE = "GET_FILE"
export const DELETE_GIST = "DELETE_GIST"
export const UPDATE_GIST = "UPDATE_GIST"

export const getGistsForUser = (dispatch) =>
    GistService.getGistsForUser()
        .then(response => dispatch({type: GET_GISTS, response}))

export const createGistForUser = (dispatch, token, title, description, content) =>
    GistService.createGistForUser(token,title, description, content)
        .then(response => dispatch({type: CREATE_GIST, response}))

export const deleteGist = (dispatch, id) =>
    GistService.deleteGist(id)
        .then(response => dispatch({type: DELETE_GIST, response}))

export const updateGist = (dispatch, id, title, description, content) =>
    GistService.updateGist(id, title, description, content)
        .then(response => dispatch({type: UPDATE_GIST, response}))

export const getGistById = (dispatch) =>
    GistService.getGistById()
        .then(response => dispatch({type: GET_GIST, response}))

export const getGistFile = (dispatch, fileUrl) =>
    GistService.getGistFile(fileUrl)

    .then(gistfile => dispatch({type: GET_FILE, gistfile}))

