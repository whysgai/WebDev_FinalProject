import React from "react"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import "../styles/codemirror.css"

const SnippetEditComponent = () =>
    <div>
        <div>
            <label htmlFor="snippet_title" />
            <input id="snippet_title" placeholder="Title"/>

        </div>
        <div>
            <label htmlFor="code_editor" />
            {/*<textarea id="code_editor" placeholder="Code goes here"/>*/}
            <CodeMirror
                value='<h1>I ♥ react-codemirror2</h1>'
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                }}
            />
        </div>
        <div>
            <label htmlFor="tag_input" />
            <input id="tag_input" />
        </div>
        <button>Save</button>
    </div>

export default SnippetEditComponent