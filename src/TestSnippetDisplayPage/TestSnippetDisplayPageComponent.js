import React from "react"

const TestSnippetDisplayPageComponent = ({loginGithub, getIssuesForRepo}) =>
    <div>
        <h1>Show a list of snippets here!</h1>
        <button onClick={getIssuesForRepo}>Login Test</button>
    </div>

export default TestSnippetDisplayPageComponent