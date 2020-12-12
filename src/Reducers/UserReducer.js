import {FIND_ALL_USERS, GET_USERNAME, GET_USER} from "../Actions/UserActions";

const initialState = {
    activeUser: {
        id: "uid001",
        username: "Ms. Pac-Man",
        token: "70f143af3d540e77de91e721e5c4e8960a181663"
    },
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
