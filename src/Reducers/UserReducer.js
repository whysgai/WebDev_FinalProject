import {FIND_ALL_USERS} from "../Actions/UserActions";

const initialState = {
    activeUser: {
        id:"uid001",
        username:"Ms. Pac-Man",
        token:"70f143af3d540e77de91e721e5c4e8960a181663"
    }

}

const UserReducer = (state = initialState, action = action) => {
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
