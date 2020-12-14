import fire from "../config/db";

export async function getAllGroups() {
    console.log("Get all groups")

    let groups = []

    await fire.database().ref("/groups").once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            groups.push(childSnapshot.val())
        });
    });

    return Promise.resolve(groups)


}

export const createGroup = (group) =>
    fire.database().ref("/groups").push({
        groupName: "Company",
        license: "Enterprise",
        active: true,
        members: {}
    })

export default {getAllGroups, createGroup}
