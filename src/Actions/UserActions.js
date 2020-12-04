import UserService from "../services/UserService";
import {CREATE_SNIPPET} from "./SnippetActions";

export const FIND_ALL_USERS = "FIND_ALL_USERS"

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
