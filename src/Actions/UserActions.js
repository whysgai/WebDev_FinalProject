import UserService from "../services/UserService";

export const FIND_ALL_USERS = "FIND_ALL_USERS"
export const GET_USER = "GET_USER"
export const GET_AUTH= "GET_AUTH"

export const GET_USER_BY_UID = "GET_USER_BY_UID"

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

export const getAuth = (dispatch) => {
    UserService.getAuth()
        .then(auth => {
            // console.log("GET AUTH ACTION", auth)
            dispatch({
                type: GET_AUTH,
                auth: auth
            })
        })
}


export const getUser = (dispatch, username) => {
    UserService.getUser(username)
        .then(user => {
            // console.log("Get User user", user)
            dispatch({
                type: GET_USER,
                user: user
            })
        })
}

export async function getUserByUID (dispatch, uid) {
    await UserService.getUserByUID(uid)
        .then(user => {
            console.log("Get User by ID", user)
            dispatch({
                type: GET_USER_BY_UID,
                user: user
            })
        })
}


