import {GET_GISTS, GET_GIST, GET_FILE, CREATE_GIST, DELETE_GIST} from "../Actions/GistActions"

const initialState = {
    gists: [],
    gist: {},
    file: ""
}

const gistReducer = (state = initialState, action = action) => {
    switch (action.type) {

        case GET_GISTS:
            return {
                ...state,
                gists: action.response
            }
        case CREATE_GIST:
            return {
                ...state,
                gists: [...state.gists, action.gist]
            }
        case DELETE_GIST:
            return {
                ...state,
                gists: state.gists.filter(gist => gist.id !== action.gist.id)
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

export default gistReducer
