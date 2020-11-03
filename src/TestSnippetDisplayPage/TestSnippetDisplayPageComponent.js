import React from "react"

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
        <p>{!gist? "nothing here" : gist.id}</p>
        <button onClick={() => getGistFile(gist.files["Private Gist Test 1"].raw_url)}>Get Gist File</button>
        <p>{!file? "nothing here" : file}</p>

    </div>

export default TestSnippetDisplayPageComponent