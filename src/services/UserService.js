// const username = "group3person"
// const password = "nicsalehwill3"

import fire from "../config/db";

const headers = {
    "Authorization": `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

export const getUserUsername = (uid) => {
//         fire.database().ref("/users/" + uid).once('value')
//             .then((snapshot) => {
//                 return Promise.resolve(snapshot.val().username)
//             })
}

export const getUserData = () => {
    fire.database().ref("/users/" + fire.auth().currentUser.uid).once('value')
        .then((snapshot) => {
            return (snapshot.val()["username"] === undefined ? null : snapshot.val())
        })
}


export const findAllUsers = () =>
    fire.database().ref("/users").once('value')
        .then((snapshot) => {
            return Object.values(snapshot.val())
        })

export const getTokenForUser = (uid) =>
    fire.database().ref("/users/" + uid).once('value')
        .then((snapshot) => {
            return snapshot.val()["paToken"]
        })

export const updateUser = (uid, newUser) =>
    fire.database().ref("/users/" + uid).set({
        locked: newUser.locked,
        username: newUser.username,
        uid: newUser.uid,
        email: newUser.email,
        paToken: newUser.paToken,
        type: newUser.type
    })


export default {findAllUsers, getTokenForUser, updateUser, getUserUsername}
