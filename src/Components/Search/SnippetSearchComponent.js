import React from "react"
import {Link} from "react-router-dom";
import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";
import TagComponent from "../TagComponent";

const SnippetSearchComponent = ({snippets}) =>
    <div>
        <h2>SnippetSearchHere</h2>
        <SnippetSearchBarComponent/>
        <SnippetSearchListComponent snippets={snippets}/>
    </div>

export default SnippetSearchComponent
