import React from "react"

const TestSnippetDisplayPageComponent = ({loginGithub, getGistsForUser}) =>
    <div>
        <h1>Show a list of snippets here!</h1>
        <button onClick={getGistsForUser}>Login Test</button>
    </div>

export default TestSnippetDisplayPageComponent