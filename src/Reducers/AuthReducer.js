import fire, {fireUser} from "../config/db";



const INITIAL_STATE = {
    user: fireUser,
    uid: ""
};

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
                user: action.user,
                userUid: action.user.uid
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;
