import UserService from "../services/UserService";

export const FIND_ALL_USERS = "FIND_ALL_USERS"

export const findAllUsers = (dispatch) =>
    UserService.findAllUsers()
        .then(users => dispatch({
                type: FIND_ALL_USERS,
                users: users
            }
        ))
