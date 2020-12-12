

export const setUser = (dispatch, user) => {
            console.log(user, "Set User Action")

            dispatch({
                type: "SET_USER",
                user: user
            })
        // })
}
export const setUID = (dispatch, uid) => {
    console.log(uid, "Set User ID")
    dispatch({
        type: "SET_ID",
        uid: uid
    })
    // })
}
