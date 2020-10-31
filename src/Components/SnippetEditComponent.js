import React from "react"

const SnippetDisplayComponent = () =>
    <div>
        <div>
            <label htmlFor="snippet_title" />
            <input id="snippet_title" placeholder="Title"/>

        </div>
        <div>
            <label htmlFor="code_editor" />
            <textarea id="code_editor" placeholder="Code goes here"/>
        </div>
        <div>
            <label htmlFor="tag_input" />
            <input id="tag_input" />
        </div>
        <button>Save</button>
    </div>

export default SnippetDisplayComponent