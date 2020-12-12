import React from 'react'
import SnippetContainer from "../../Containers/SnippetContainer";

const SnippetSearchListComponent = ({snippets}) =>
    <div>
        {/*{*/}
        {/*    console.log(snippets)*/}
        {/*}*/}
        {
            snippets.length > 0 &&
                snippets.map((snippet, index)=>
                    <div key={index}>
                        <SnippetContainer snippet={snippet}/>
                    </div>
                )
        }
    </div>

export default SnippetSearchListComponent
