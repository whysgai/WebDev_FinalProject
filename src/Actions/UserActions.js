import UserService from "../services/UserService";

export const FIND_ALL_USERS = "FIND_ALL_USERS"
export const GET_USERNAME = "GET_USERNAME"
export const GET_USER = "GET_USER"

export const findAllUsers = (dispatch) => {
    UserService.findAllUsers()
        .then(users => {
            console.log("Hit User Action", users)
            dispatch({
                type: FIND_ALL_USERS,
                users: users
            })
        })
}
export const getUserUsername = (dispatch) => {
    UserService.getUserUsername()
        .then(response => {
            console.log("Action response:", response)
            dispatch({
                type: GET_USERNAME,
                username: response
            })
        })
}

export const getUserData = (dispatch, uid) => {
    UserService.getUser(uid)
        .then(user => {
            console.log("Get User user", user)
            dispatch({
                type: GET_USER,
                user: user
            })
        })
}

export const getUser = (dispatch, uid) => {
    UserService.getUser(uid)
        .then(user => {
            console.log("Get User user", user)
            dispatch({
                type: GET_USER,
                user: user
            })
        })
}
