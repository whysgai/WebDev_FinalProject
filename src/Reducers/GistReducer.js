import {GET_GISTS, GET_GIST, GET_FILE, CREATE_GIST, DELETE_GIST, UPDATE_GIST} from "../Actions/GistActions"

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
        case UPDATE_GIST:
            return {
                ...state,
                // gists: state.gists.map(gist => gist.id === action.gist.id ? action.gist : gist)
            }
        case DELETE_GIST:
            return {
                ...state,
                gists: state.gists.filter(gist => gist.id !== action.gist.id)
            }

        case GET_GIST:
            console.log("Reducer", action.gist)
            return {
                ...state,
                gist: action.gist
            }
        case GET_FILE:
            console.log("Reducer file", action.gistfile)
            return {
                ...state,
                file: action.gistfile
            }

        default :
            return state;
    }
}

export default gistReducer
