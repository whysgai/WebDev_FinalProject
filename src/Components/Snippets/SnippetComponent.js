import React from "react"
import SnippetEditComponent from "./SnippetEditComponent";
import SnippetDisplayComponent from "./SnippetDisplayComponent";

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
