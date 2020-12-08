import React from 'react'
import UserProfileEditComponent from "./UserProfileEditComponent";

const UserProfileComponent = () =>
    <div>
        <h2 className="m-3">Profile Page</h2>
        <div className="card mt-4">
            <UserProfileEditComponent/>
        </div>
    </div>


export default UserProfileComponent
