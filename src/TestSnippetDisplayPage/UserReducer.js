import {LOGIN_GITHUB} from "./UserActions"

const initialState = {
    response: {}
}

const userReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case LOGIN_GITHUB:
            return {
                ...state,
                response: action.response
            }
        default :
            return state;
    }
}

export default userReducer