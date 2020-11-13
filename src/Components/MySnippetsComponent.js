import React from "react"

const MySnippetsComponent = ({snippets, createSnippet, findAllSnippets}) =>
    <div>
        <h1>
            My snippets
        </h1>
        <h4>
            {
                snippets.map(snippet => <h5>{snippet.title}</h5>)
            }

            {
                console.log(snippets)
            }
            <button onClick={() => createSnippet()}>Create Snippet</button>
            <button onClick={() => findAllSnippets()}>Get Snippets</button>

        </h4>
    </div>

export default MySnippetsComponent;