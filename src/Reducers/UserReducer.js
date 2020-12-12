import {FIND_ALL_USERS, GET_USERNAME, GET_USER, UPDATE_USER} from "../Actions/UserActions";

const initialState = {
    users: [],
    user: {username: ""},
    displayedUser: {}
}

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_USERS:
            return {
                ...state,
                users: action.users
            }

        case UPDATE_USER:
            console.log("Reducer", state.users)
            return {
                ...state,
                users: state.users.map(user =>
                    user.uid === action.user.uid ? action.user : user
                )
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
        case "GET_DISPLAYED_USER":
            return {
                ...state,
                displayedUser: action.user
            }
        default:
            return state;
    }
}

export default UserReducer;
