import {FIND_ALL_USERS, GET_USER, UPDATE_USER, GET_USER_BY_UID, ADMINISTER_USER} from "../Actions/UserActions";

const initialState = {
    users: [],
    activeUser: {},
    displayedUser: {}
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_USERS:
            return {
                ...state,
                users: action.users
            }

        case ADMINISTER_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.uid === action.user.uid ? action.user : user
                )
            }

        case UPDATE_USER:
            return {
                ...state,
                activeUser: action.user
            }
        case GET_USER:
            return {
                ...state,
                displayedUser: action.user
            }
        case GET_USER_BY_UID:
            return {
                ...state,
                activeUser: action.user
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
