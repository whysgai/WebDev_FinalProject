import React from "react"

const MySnippetsComponent = ({snippets, createSnippet, findAllSnippets, findAllPublicSnippets,
                                 deleteSnippet, createGistForUser, deleteGist}) =>
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
            <div>
                <button onClick={() => createSnippet()}>Create Snippet</button>
                <button onClick={() => deleteSnippet(11)}>Delete Snippet 11</button>
                <button onClick={() => findAllSnippets()}>Get Snippets</button>
                <button onClick={() => findAllPublicSnippets()}>Get Public Snippets</button>
                <button onClick={() => console.log(snippets)}>Log Snippets</button>
                <button onClick={() => createGistForUser()}>createGistForUser</button>
                <button onClick={() => deleteGist( "68dcb1fde7d5b7ed832bb3759fb3ad64")}>deleteGist</button>
            </div>


        </h4>
    </div>

export default MySnippetsComponent;
