import React from "react"
import SnippetEditComponent from "./SnippetEditComponent";
import SnippetDisplayComponent from "./SnippetDisplayComponent";

// classify this to enable componentDidMount and combine in
// On Component did mount call find Gist by ID
// Use that to then also pass gist info down into sub-component
const SnippetComponent = ({snippet, editLocalSnippet, createSnippetForCreator, addTagToSnippet, edit, create, activeUser}) =>
    <div className="card mt-4">
        {
            console.log("Snippet:", snippet)
        }
        {
            console.log("ActiveUser from Snippet Component:", activeUser.username)
        }
        {
            console.log("Creator from Snippet:", snippet.creatorId)
        }
        {
            ((edit || create) && activeUser.username === snippet.creatorId) &&
                <SnippetEditComponent
                    snippet={snippet}
                    editLocalSnippet={editLocalSnippet}
                    createSnippetForCreator={createSnippetForCreator}
                    addTagToSnippet={addTagToSnippet}
                    edit={edit}
                    create={create}
                    activeUser={activeUser}
                />
        }
        {
            ((!edit && !create) || activeUser.username !== snippet.creatorId) &&
                <SnippetDisplayComponent snippet={snippet}/>
        }

    </div>

export default SnippetComponent
