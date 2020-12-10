import React from "react"
import {getUserUsername} from "../services/UserService";

const MySnippetsComponent = ({snippets, createSnippet, findAllSnippets, findAllPublicSnippets,
                                 deleteSnippet, createGistForUser, deleteGist, updateGist}) =>
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
                <button onClick={() => getUserUsername()}>Get userUsername</button>
            </div>


        </h4>
    </div>

export default MySnippetsComponent;
