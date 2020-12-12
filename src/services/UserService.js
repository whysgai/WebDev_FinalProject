// const username = "group3person"
// const password = "nicsalehwill3"

import fire from "../config/db";
const headers = {
    "Authorization": `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

export async function callFirebase(){
    let user = await fire.auth().currentUser
    console.log("User in call firebase", user)
    return Promise.resolve(user)
}

export async function getUser(uid){

    let userData = await fire.database().ref("/users/" + uid).once('value')
    console.log("Userdata in getUser", userData.val())
    return Promise.resolve(userData.val())
}

export async function getUserUsername() {

    let user = await fire.auth().currentUser
    let uid = await user.uid

    let userData = await fire.database().ref("/users/" + uid).once('value')
    // console.log("Userdata in getUser", userData.val())
    return Promise.resolve(userData.val().username)
}

export async function getUserData () {
    let user = await fire.auth().currentUser
    let uid = await user.uid
    let userData = await fire.database().ref("/users/" + uid).once('value')
    console.log("GetUserData", userData.val())
    return Promise.resolve(userData.val())
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

export async function isLoggedIn() {
    if (fire.auth().currentUser) {
        await getUserUsername()
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


export default {findAllUsers, getTokenForUser, updateUser, getUserUsername, getUser}
