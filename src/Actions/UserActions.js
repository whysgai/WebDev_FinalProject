import UserService from "../services/UserService";

export const FIND_ALL_USERS = "FIND_ALL_USERS"
export const GET_USERNAME = "GET_USERNAME"

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
            console.log(response)
            dispatch({
                type: GET_USERNAME,
                username: response
            })
        })
}
