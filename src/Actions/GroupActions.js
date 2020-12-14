import GroupService from "../services/GroupService"
export const GET_ALL_GROUPS = "GET_ALL_GROUPS"
export const CREATE_GROUP = "CREATE_GROUP"

export const getAllGroups = (dispatch) =>
    GroupService.getAllGroups()
        .then(groups => dispatch({type: GET_ALL_GROUPS, groups: groups}))

export const createGroup = (dispatch, group) =>
    GroupService.createGroup(group)
        .then(group => dispatch({type: CREATE_GROUP, group: group}))
