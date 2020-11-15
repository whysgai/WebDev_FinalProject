import React from "react"
import {Link} from "react-router-dom";
import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";
import TagComponent from "../TagComponent";

const SnippetSearchComponent = ({snippets, gists, getGistsForUser}) =>
    <div>
        <h2>SnippetSearchHere</h2>
        <button onClick={() => getGistsForUser}>Get Gists</button>

        <button onClick={() => console.log(gists)}>Log Gists</button>
        <SnippetSearchBarComponent/>
        <SnippetSearchListComponent snippets={snippets}/>
    </div>

export default SnippetSearchComponent
