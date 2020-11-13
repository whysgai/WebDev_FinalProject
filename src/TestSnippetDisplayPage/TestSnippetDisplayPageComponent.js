import React from "react"

var fileName = ""
const TestSnippetDisplayPageComponent = ({loginGithub, getGistsForUser, getGistById, getGistFile, gists, gist, file}) =>
    <div>
        <h1>Show a list of snippets here!</h1>
        <button onClick={getGistsForUser}>Get User Gists</button>
        <ul>
            {
                gists[0] &&
                gists.map((gist, index) =>
                              <li>Gist Id: {gist.id} Owner: {gist.owner.login}</li>
                )

            }
        </ul>
        <button onClick={getGistById}>Get One Gist</button>
        <p>{!gist ? "nothing here" : gist.id}</p>


            {(typeof Object.keys(gist) !== 'undefined' && Object.keys(gist).length > 0) ?
             fileName = Object.keys(gist.files) : "No gist file to pull" }
            <button onClick={() => getGistFile(gist.files[fileName].raw_url)}>Get Gist File</button>
            <p>{!file? "nothing here" : file}</p>
    </div>

export default TestSnippetDisplayPageComponent
