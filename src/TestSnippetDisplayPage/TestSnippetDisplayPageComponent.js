import React from "react"

const TestSnippetDisplayPageComponent = ({loginGithub, getGistsForUser, getGistById, response, gist}) =>
    <div>
        <h1>Show a list of snippets here!</h1>
        <button onClick={getGistsForUser}>Get User Gists</button>
        <p>{!response[0]? "nothing here" : response[0].files}</p>
        <button onClick={getGistById}>Get One Gist</button>
        <p>{!gist? "nothing here" : gist}</p>

    </div>

export default TestSnippetDisplayPageComponent