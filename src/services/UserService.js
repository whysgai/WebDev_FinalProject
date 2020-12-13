// const username = "group3person"
// const password = "nicsalehwill3"

import fire, {fireUser} from "../config/db";

const headers = {
    "Authorization": `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

export const findAllUsers = () =>
    fire.database().ref("/users").once('value')
        .then((snapshot) => {
            return Object.values(snapshot.val())
        })

export async function getUser(username) {
    return Promise.resolve(fire.database().ref("/users/").once('value')
        .then(userData => {
            let x
            console.log(userData.val())
            userData.forEach((user) => {
                if (user.val().username === username) {
                    console.log(user.val())
                    x = user.val()
                }
            })
            return Promise.resolve(x)
        }))
}

export async function getUserByUID(uid) {
    return Promise.resolve(fire.database().ref("/users/" + uid).once('value')
        .then(data => {
            console.log("GetUserByIDSERVICE", data.val())
            return Promise.resolve(data.val())
        })
    )
}


export async function getAuth() {
    console.log("GET AUTH", fireUser)
    return Promise.resolve(await fireUser)
}


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


export default {findAllUsers, getTokenForUser, updateUser, getUser, getAuth, getUserByUID}
