import {GET_GISTS, GET_GIST, GET_FILE} from "./UserActions"

const initialState = {
    gists: [],
    gist: {},
    file: ""
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
                gists: action.response
            }
        case GET_GIST:
            return {
                ...state,
                gist: action.response
            }
        case GET_FILE:
            return {
                ...state,
                file: action.gistfile
            }

        default :
            return state;
    }
}

export default userReducer