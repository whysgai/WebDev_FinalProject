import React from "react"
import SnippetEditComponent from "./SnippetEditComponent";
import SnippetDisplayComponent from "./SnippetDisplayComponent";

const SnippetComponent = () =>
    <div>
        <h2>Edit Component</h2>
        <SnippetEditComponent/>
        <h2>Display Component</h2>
        <SnippetDisplayComponent/>
    </div>

export default SnippetComponent
