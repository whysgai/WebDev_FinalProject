import UserService from "./UserService";

export const LOGIN_GITHUB = "LOGIN_GITHUB"

export const loginGithub = (dispatch) =>
    UserService.loginToGithub()
        .then(response => dispatch({type: LOGIN_GITHUB, response}))