import {LOGIN_GITHUB, GET_ISSUES} from "./UserActions"

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
        case GET_ISSUES:
            return {
                ...state,
                response: action.response
            }
        default :
            return state;
    }
}

export default userReducer