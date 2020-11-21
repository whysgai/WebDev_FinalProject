import React from 'react'
import SnippetContainer from "../../Containers/SnippetContainer";

const SnippetSearchListComponent = ({snippets}) =>
    <div>
        {
            console.log(snippets)
        }
        {
            snippets.map((snippet, index)=>
                <SnippetContainer snippet={snippet}/>
            )
        }

    </div>

export default SnippetSearchListComponent
