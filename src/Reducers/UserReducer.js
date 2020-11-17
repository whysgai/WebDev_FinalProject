import {FIND_ALL_USERS} from "../Actions/UserActions";

const UserReducer = (state = [], action = action) => {
    switch(action.type) {
        case FIND_ALL_USERS:
            return {
                users: [action.users]
            }
        default:
            return state;
    }
}

export default UserReducer;
