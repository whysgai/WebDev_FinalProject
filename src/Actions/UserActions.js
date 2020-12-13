import UserService from "../services/UserService";

export const FIND_ALL_USERS = "FIND_ALL_USERS"
export const GET_USER = "GET_USER"
export const UPDATE_USER = "UPDATE_USER"

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

export const updateUser = (dispatch, user) => {
    UserService.updateUser(user.uid, user)
        .then(() => {
            dispatch({
                type: UPDATE_USER,
                user: user
            })
        })
}


export const getUser = (dispatch, username) => {
    UserService.getUser(username)
        .then(user => {
            console.log("Get User user", user)
            dispatch({
                type: GET_USER,
                user: user
            })
        })
}
