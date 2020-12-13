import React from "react"
import SnippetEditComponent from "./SnippetEditComponent";
import SnippetDisplayComponent from "./SnippetDisplayComponent";

const SnippetComponent = ({snippet, text, editLocalSnippet, editLocalText, updateSnippet, createSnippet, addTagToSnippet, removeTagFromSnippet, deleteSnippet, toggleLike, togglePrivacy, toggleRecommended, createGistForUser, edit, create, singleview, activeUser}) =>
    <div className="card mt-4 ">
        {
            console.log("Snippet:", snippet)
        }
        {
            console.log("ActiveUser from Snippet Component:", activeUser)
        }
        {/*{*/}
        {/*    console.log("Creator from Snippet:", snippet.creator)*/}
        {/*}*/}
        {
            ((edit || create) && activeUser.username === snippet.creator) &&
                <SnippetEditComponent
                    snippet={snippet}
                    text={text}
                    editLocalSnippet={editLocalSnippet}
                    editLocalText={editLocalText}
                    updateSnippet={updateSnippet}
                    createSnippet={createSnippet}
                    addTagToSnippet={addTagToSnippet}
                    removeTagFromSnippet={removeTagFromSnippet}
                    deleteSnippet={deleteSnippet}
                    toggleLike={toggleLike}
                    togglePrivacy={togglePrivacy}
                    createGistForUser={createGistForUser}
                    edit={edit}
                    create={create}
                    activeUser={activeUser}
                />
        }
        {
            ((!edit && !create) || activeUser.username !== snippet.creator) &&
                <SnippetDisplayComponent
                    snippet={snippet}
                    toggleLike={toggleLike}
                    activeUser={activeUser}
                    singleview={singleview}
                    toggleRecommended={toggleRecommended}
                />
        }

    </div>

export default SnippetComponent
