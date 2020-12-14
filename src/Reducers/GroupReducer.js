import {GET_ALL_GROUPS} from "../Actions/GroupActions";

const initialState = {
    groups: [],
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GROUPS:
            return {
                ...state,
                groups: action.groups
            }
        default:
            return state;
    }
}

export default UserReducer;
