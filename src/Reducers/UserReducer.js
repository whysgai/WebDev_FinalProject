import {FIND_ALL_USERS, GET_USERNAME, GET_USER} from "../Actions/UserActions";

const initialState = {
    users: [],
    user: {username: ""}
}

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_USERS:
            return {
                ...state,
                users: action.users
            }
        case GET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case GET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default UserReducer;
