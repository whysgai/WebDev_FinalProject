import React from "react"

const SnippetDisplayComponent = () =>
    <div>
        <div>
            <span>Snippet Title / <strong>Snippet Owner</strong></span>
            <span>Timestamp</span>
        </div>
        <div>
            <ol>
                <li>
                    <pre>Some code like a function() =></pre>
                </li>
                <li>
                    <pre>   console.log("Hello, world!");</pre>
                </li>
                <li>
                    <pre>   return "Hello, world!"</pre>
                </li>
            </ol>
        </div>
        <div>
            <ul>
                <li>Tag1</li>
                <li>Tag2</li>
                <li>Tag3</li>
                <li>Tag4</li>
            </ul>
        </div>
    </div>

export default SnippetDisplayComponent