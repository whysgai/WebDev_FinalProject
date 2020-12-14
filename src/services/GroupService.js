import fire from "../config/db";

export async function getAllGroups() {
    console.log("Get all groups")
    return Promise.resolve(fire.database().ref("/groups").once('value')
        .then(data => {
            console.log("Get all groups", data.val())
            return Promise.resolve(data.val())
        })
    )
}

export const createGroup = (group) =>
    fire.database().ref("/groups").push({
        groupName: "Company",
        license: "Enterprise",
        active: true,
        members: {}
    })

export default {getAllGroups, createGroup}
