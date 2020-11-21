import React from 'react'
import SnippetSearchListComponent from "../Search/SnippetSearchListComponent";
import UserProfileComponent from "./UserProfileComponent";

const UserSnippetsComponent = ({snippets, user}) =>
    <div>
        <UserProfileComponent/>
        <SnippetSearchListComponent snippets={snippets.length > 0 && snippets.filter(snippet => snippet.creator === user.username)}/>
    </div>

export default UserSnippetsComponent
