// const username = "group3person"
// const password = "nicsalehwill3"

import fire from "../config/db";

const headers = {
    "Authorization": `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

export const getUserUsername = (uid) => {
        fire.database().ref("/users/" + uid).once('value')
            .then((snapshot) => {
                return Promise.resolve(snapshot.val().username)
            })
}

export const getUserData = () => {
    if(fire.auth().currentUser){
        fire.database().ref("users/" + fire.auth().currentUser.uid).once('value')
            .then((snapshot) => {
                console.log(snapshot.val()["username"])
                return Promise.resolve(snapshot.val()["username"])
            })
    }
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

export const isLoggedIn = () => {
    if (fire.auth().currentUser) {
        return true
    } else {
        return false
    }
}

export const updateUser = (uid, newUser) =>
    fire.database().ref("/users/" + uid).set({
        locked: newUser.locked,
        username: newUser.username,
        uid: newUser.uid,
        email: newUser.email,
        paToken: newUser.paToken,
        type: newUser.type
    })

export const getUser = () => {
    return new Promise((resolve, reject) => {
        let user = fire.auth().currentUser
        fire.database().ref("users/" + user.uid).once('value')
            .then((snapshot) => {
                console.log(snapshot.val())
               return (snapshot.val())
            })
    })
}


export default {findAllUsers, getTokenForUser, updateUser, getUserUsername, getUser}
