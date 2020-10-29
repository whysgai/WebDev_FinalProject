import UserService from "./UserService";

export const LOGIN_GITHUB = "LOGIN_GITHUB"
export const GET_ISSUES = "GET_ISSUES"

export const loginGithub = (dispatch) =>
    UserService.loginToGithub()
        .then(response => dispatch({type: LOGIN_GITHUB, response}))

export const getGistsForUser = (dispatch) =>
    UserService.getGistsForUser()
        .then(response => dispatch({type: GET_ISSUES, response}))