import React from "react"
import SnippetEditComponent from "./SnippetEditComponent";
import SnippetDisplayComponent from "./SnippetDisplayComponent";

// classify this to enable componentDidMount and combine in
// On Component did mount call find Gist by ID
// Use that to then also pass gist info down into sub-component
const SnippetComponent = ({snippet, edit, create}) =>
    <div className="card mt-4">
        {
            (edit || create) &&
                <SnippetEditComponent snippet={snippet} edit={edit} create ={create}/>
        }
        {
            (!edit && !create) &&
                <SnippetDisplayComponent snippet={snippet}/>
        }

    </div>

export default SnippetComponent
