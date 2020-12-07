import {FIND_ALL_USERS} from "../Actions/UserActions";

const initialState = {
    activeUser: {
        id: "uid001",
        username: "Ms. Pac-Man",
        token: "70f143af3d540e77de91e721e5c4e8960a181663"
    },
    users: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_USERS:
            console.log("Hit User Reducer", action.users)
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export default UserReducer;
