import React from "react"
import SnippetEditComponent from "./SnippetEditComponent";
import SnippetDisplayComponent from "./SnippetDisplayComponent";

const SnippetComponent = ({snippet}) =>
    <div>
        <h2>Edit Component</h2>
        <SnippetEditComponent snippet={snippet}/>
        <h2>Display Component</h2>
        <SnippetDisplayComponent snippet={snippet}/>
    </div>

export default SnippetComponent
