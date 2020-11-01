import {GET_GISTS, GET_GIST} from "./UserActions"

const initialState = {
    response: [],
    gist: {}
}

const userReducer = (state = initialState, action = action) => {
    switch (action.type) {
        // case LOGIN_GITHUB:
        //     return {
        //         ...state,
        //         response: action.response
        //     }
        case GET_GISTS:
            return {
                ...state,
                response: action.response
            }
        case GET_GIST:
            return {
                ...state,
                gist: action.response
            }
        default :
            return state;
    }
}

export default userReducer