import React from "react";
import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";

const SnippetSearchComponent = ({snippets, terms, updateSearchTerms, activeUser}) =>
    <div>
        <h2 className="mt-3 m-3">Search for Snippets</h2>
        <SnippetSearchBarComponent
            terms={terms}
            updateSearchTerms={updateSearchTerms}
        />
        <SnippetSearchListComponent snippets={snippets} activeUser={activeUser}/>
    </div>

export default SnippetSearchComponent
