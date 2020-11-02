import React from "react"

const TestSnippetDisplayPageComponent = ({loginGithub, getGistsForUser, getGistById, getGistFile, gists, gist, file}) =>
    <div>
        <h1>Show a list of snippets here!</h1>
        <button onClick={getGistsForUser}>Get User Gists</button>
        <p>{!gists[0]? "nothing here" : gists[0].id}</p>
        <p>{!gists[0]? "nothing here" : gists[0].owner.login}</p>
        <button onClick={getGistById}>Get One Gist</button>
        <p>{!gist? "nothing here" : gist.id}</p>
        <button onClick={() => getGistFile(gist.files["Private Gist Test 1"].raw_url)}>Get Gist File</button>
        <p>{!file? "nothing here" : file}</p>

    </div>

export default TestSnippetDisplayPageComponent