import React from "react"
import SnippetEditComponent from "./SnippetEditComponent";
import SnippetDisplayComponent from "./SnippetDisplayComponent";

const SnippetComponent = ({snippet, edit}) =>
    <div className="card mt-4">
        {
            edit &&
                <SnippetEditComponent snippet={snippet}/>
        }
        {
            !edit &&
                <SnippetDisplayComponent snippet={snippet}/>
        }

    </div>

export default SnippetComponent
