import React from 'react'
import SnippetSearchListComponent from "./Search/SnippetSearchListComponent";

const UserSnippetsComponent = ({snippets, user}) =>
    <div>
        {/*UserProfileComponent*/}
        <SnippetSearchListComponent snippets={snippets.filter(snippet => snippet.creator === user.username)}/>
    </div>

export default UserSnippetsComponent
