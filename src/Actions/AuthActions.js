

export const setUser = (dispatch, user) => {
            console.log(user, "Set User Action")

            dispatch({
                type: "SET_USER",
                user: user
            })
        // })
}
export const setUID = (dispatch, ID) => {
    console.log(ID, "Set User ID")
    dispatch({
        type: "SET_ID",
        uid: ID
    })
    // })
}
