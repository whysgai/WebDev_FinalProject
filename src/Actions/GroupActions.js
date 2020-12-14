import GroupService from "../services/GroupService"
export const GET_ALL_GROUPS = "GET_ALL_GROUPS"

export const getAllGroups = (dispatch) =>
    GroupService.getAllGroups()
        .then(groups => dispatch({type: GET_ALL_GROUPS, groups: groups}))
